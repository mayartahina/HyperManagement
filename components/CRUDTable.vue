<template>
  <!-- this CRUD Table is not used at the moment 
  it is a template for the crud tables that are used in the customers and the employees -->
  <v-container>
    <v-card elevation="5" class="mt-5 rounded">
      <v-simple-table>
        <template v-slot:default>
          <v-btn
            @click="openAddModal = true"
            color="primary"
            dark
            small
            absolute
            top
            right
            fab
          >
            <v-icon>add</v-icon>
          </v-btn>
          <thead>
            <tr>
              <th v-for="(item, index) in headers" :key="index">{{ item }}</th>
              <th style="width: 100px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              height="90"
              class="text-capitalize"
              v-for="(item, index) in items"
              :key="index"
            >
              <td v-for="(attribute, key, index) in item" :key="index">
                <span v-if="key == 'Avatar'">
                  <v-avatar class="mr-2" size="50" color="grey">
                    <img v-if="attribute" :src="attribute" alt="avatar" />
                    <v-icon color="white" large v-else-if="type == 'projects'"
                      >settings_applications</v-icon
                    >
                    <v-icon color="white" large v-else>fas fa-user</v-icon>
                  </v-avatar>
                </span>

                <span v-else-if="key == 'Status'">
                  <v-chip :color="attribute.Color">{{ attribute.Name }}</v-chip>
                </span>

                <span v-else>{{ attribute }}</span>
              </td>

              <td style="width: 100px">
                <v-card-actions>
                  <v-btn icon @click="edit(item)">
                    <v-icon color="blue">edit</v-icon>
                  </v-btn>
                  <v-btn icon @click="RemoveObject(item, type)">
                    <v-icon color="pink">delete</v-icon>
                  </v-btn>
                </v-card-actions>
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th style="border: none; height: 10px"></th>
            </tr>
          </thead>
        </template>
      </v-simple-table>
    </v-card>
    <v-navigation-drawer
      width="100vw"
      fixed
      app
      right
      :value="openAddModal"
      v-model="openAddModal"
    >
      <v-card elevation="0" class="pa-5 ma-5">
        <v-btn
          @click="openAddModal = false"
          color="primary"
          dark
          small
          absolute
          top
          right
          fab
        >
          <v-icon>close</v-icon>
        </v-btn>
        <slot name="Add"></slot>
      </v-card>
    </v-navigation-drawer>
    <v-navigation-drawer
      width="100vw"
      fixed
      app
      right
      :value="openEditModal"
      v-model="openEditModal"
    >
      <v-card elevation="3">
        <v-btn
          @click="openEditModal = false"
          color="primary"
          dark
          small
          absolute
          top
          right
          fab
        >
          <v-icon>close</v-icon>
        </v-btn>
        <v-card elevation="0" class="pa-5 ma-5">
          <slot name="Edit"></slot>
        </v-card>
      </v-card>
    </v-navigation-drawer>
  </v-container>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  props: {
    items: {
      required: true,
      type: Array,
    },
    headers: {
      required: true,
      type: Array,
    },
    type: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      openEditModal: false,
      openAddModal: false,
    }
  },
  computed: {
    ...mapActions(['RemoveObject']),
  },
  methods: {
    edit(item) {
      this.$emit('SendingItem', item)
      this.openEditModal = true
    },
  },
}
</script>
