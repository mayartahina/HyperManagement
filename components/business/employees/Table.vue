<template>
  <v-container>
    <v-card elevation="5" class="mt-5 rounded">
      <v-card-title>
        Employees
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
        :loading="items == null"
        :headers="headers"
        :items="items"
        :items-per-page="5"
        class="elevation-1"
      >
        <template #[`item.avatar`]="{ item }">
          <v-avatar class="my-3" size="60">
            <v-img :src="item.avatar" :lazy-src="item.avatar"></v-img>
          </v-avatar>
        </template>
        <template #[`item.status`]="{ item }">
          <v-chip color="primary">{{ item.status }}</v-chip>
        </template>
        <template #[`item.actions`]="{ item }">
          <v-btn
            fab
            elevation="1"
            x-small
            color="success"
            @click="
              payDialog = true
              employeeToPay = item
            "
            >pay</v-btn
          >
          <v-dialog v-model="payDialog">
            <v-card v-if="payDialog" class="pa-5">
              <v-layout justify-center>
                <v-avatar size="150">
                  <v-img :src="employeeToPay.avatar"></v-img>
                </v-avatar>
              </v-layout>
              <h3 class="text-center">{{ employeeToPay.name }}</h3>
              <p class="text-center">${{ employeeToPay.pay }}</p>
              <v-text-field
                v-model="payment"
                label="Amount"
                class="mx-5"
                type="number"
                outlined
              ></v-text-field>
              <v-layout justify-center>
                <!-- <v-btn color="success" @click="payout">Pay Now</v-btn> -->
                <v-btn color="success">Pay Now</v-btn>
              </v-layout>
            </v-card>
          </v-dialog>

          <v-btn fab elevation="2" x-small class="mx-2" color="secondary">
            <v-icon small>edit</v-icon>
          </v-btn>
          <v-btn
            fab
            elevation="0"
            x-small
            color="error"
            @click="openDeleteDialog(item)"
          >
            <v-icon small>delete</v-icon>
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
        <Add @closeAdd="closeAdd" />
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
          <v-btn
            :disabled="itemToDelete.name != deleteName"
            @click="DeletePosition"
            >Delete</v-btn
          >
        </v-card>
      </v-dialog>
    </span>
  </v-container>
</template>
<script>
// employee crud table

// importing the add component
import Add from './Add'
export default {
  components: {
    Add,
  },
  props: {
    items: {
      required: true,
      type: Array,
    },
    headers: {
      required: true,
      type: Array,
    },
  },
  data() {
    return {
      payDialog: false,
      payment: null,
      employeeToPay: null,
      deleteDialog: false,
      deleteName: '',
      itemToDelete: null,
      openEditModal: false,
      openAddModal: false,
      search: '',
    }
  },
  methods: {
    /* -------------------------------------------------------------------------- */
    /*      DeletePosition deletes an employee from the company while leaving     */
    /*                     them active as a user of the system                    */
    /* -------------------------------------------------------------------------- */
    // DeletePosition() {
    //   functions.DeleteEmployeePosition(this.itemToDelete.position_id)
    // },

    // opens the delete dialog
    openDeleteDialog(item) {
      this.itemToDelete = item
      this.deleteDialog = true
    },

    // closes the delete dialog
    closeAdd(value) {
      this.openAddModal = !value
    },
  },
}
</script>
