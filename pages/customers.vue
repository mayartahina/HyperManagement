<template>
  <v-container>
    <v-card elevation="5" class="mt-5 rounded">
      <v-card-title>
        Customers
        <v-btn
          color="primary"
          dark
          small
          absolute
          top
          right
          fab
          @click="openAddModal = true"
        >
          <v-icon>add</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :search="search"
        loading-text="Loading... Please wait"
        :loading="customers == null"
        :headers="headers"
        :items="customers"
        :items-per-page="5"
        class="elevation-1"
      >
        <template #[`item.avatar`]="{ item }">
          <v-avatar class="my-3" size="60">
            <v-img :src="item.avatar" :lazy-src="item.avatar"></v-img>
          </v-avatar>
        </template>
        <template #[`item.status`]="{ item }">
          <v-chip :color="item.status.color">
            {{ item.status.name }}
          </v-chip>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-btn fab elevation="2" x-small="" class="mx-2" color="secondary">
            <v-icon small> edit </v-icon>
          </v-btn>
          <v-btn
            fab
            elevation="0"
            x-small=""
            color="error"
            @click="openDeleteDialog(item)"
          >
            <v-icon small> delete </v-icon>
          </v-btn>
        </template>
      </v-data-table>
    </v-card>
    <v-navigation-drawer
      v-model="openAddModal"
      width="100vw"
      fixed
      app
      right
      :value="openAddModal"
    >
      <v-card elevation="0" class="pa-5 ma-5">
        <v-btn
          color="primary"
          dark
          small
          absolute
          top
          right
          fab
          @click="openAddModal = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-layout fill-height="" justify-center="" align-center="" row>
          <v-flex>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field
                v-model="newCustomer.name"
                :counter="10"
                :rules="nameRules"
                label="Name"
                required
              ></v-text-field>

              <v-text-field
                v-model="newCustomer.email"
                :rules="emailRules"
                label="E-mail"
                required
              ></v-text-field>
              <v-text-field
                v-model="newCustomer.phone"
                type="number"
                label="Phone Number"
              ></v-text-field>
              <v-btn @click="addCustomer"> Add </v-btn>
            </v-form>
          </v-flex>
        </v-layout>
      </v-card>
    </v-navigation-drawer>
    <v-navigation-drawer
      v-model="openEditModal"
      width="100vw"
      fixed
      app
      right
      :value="openEditModal"
    >
      <v-card elevation="3">
        <v-btn
          color="primary"
          dark
          small
          absolute
          top
          right
          fab
          @click="openEditModal = false"
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-card elevation="0" class="pa-5 ma-5">
          <slot name="Edit"></slot>
        </v-card>
      </v-card>
    </v-navigation-drawer>
    <span v-if="itemToDelete">
      <v-dialog v-model="deleteDialog">
        <v-card>
          to delete you need to write the name as a confirmation
          {{ itemToDelete }} - {{ deleteName }}
          <v-text-field v-model="deleteName" :placeholder="itemToDelete.name" />
          <span></span>
          <v-btn :disabled="itemToDelete.name != deleteName">Delete</v-btn>
        </v-card>
      </v-dialog>
    </span>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      //  custome headers for the crud table of the customers
      headers: [
        { text: 'Name', value: 'name' },
        { text: 'Email', value: 'email' },
        { text: 'Phone Number', value: 'phone' },
        { text: 'Actions', value: 'actions' },
      ],
      deleteDialog: false,
      deleteName: '',
      itemToDelete: null,
      openEditModal: false,
      openAddModal: false,
      search: '',
      valid: true,
      newCustomer: {
        name: '',
        email: '',
        phone: '',
      },
      nameRules: [
        (v) => !!v || 'Name is required',
        (v) => (v && v.length <= 50) || 'Name must be less than 50 characters',
      ],
      emailRules: [
        (v) => !!v || 'E-mail is required',
        (v) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }
  },
  computed: {
    /* ----------------- maps the cusomters list from the store ----------------- */
    ...mapState('business', ['customers']),
  },
  mounted() {
    this.$store.dispatch('business/getCustomers')
  },
  methods: {
    /* ------ adding a customer by calling AddCustomer in the functions.js ------ */
    addCustomer() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch('business/addCustomer', this.newCustomer)
        this.openAddModal = false
      }
    },

    /* ------------------------- opens the delete dialog ------------------------ */
    openDeleteDialog(item) {
      this.itemToDelete = item
      this.deleteDialog = true
    },
  },
}
</script>
