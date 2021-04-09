<template>
  <div>
    <v-autocomplete
      v-model="UsersSelected"
      :items="GlobalUsers"
      filled
      chips
      label="Employee Name"
      item-text="name"
      item-value="name"
    >
      <template #selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @click="data.select"
          @click:close="UsersSelected = null"
        >
          <v-avatar left>
            <v-img :src="data.item.Avatar"></v-img>
          </v-avatar>
          {{ data.item.FirstName }}
          {{ data.item.LastName }}
        </v-chip>
      </template>
      <template #item="data">
        <template v-if="!data.item.FirstName">
          <v-list-item-content>{{ data.item }}</v-list-item-content>
        </template>
        <template v-else>
          <v-list-item-avatar>
            <img :src="data.item.Avatar" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ data.item.FirstName }}</v-list-item-title>
            <v-list-item-subtitle> {{ data.item.Email }}</v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </template>
    </v-autocomplete>
    <v-autocomplete
      v-model="Position"
      label="Position"
      item-text="name"
      item-value="name"
      filled=""
      :items="Positions"
    >
      <template #selection="data">
        <v-chip
          v-bind="data.attrs"
          :input-value="data.selected"
          close
          @click="data.select"
          @click:close="Position = ''"
          >{{ data.item.Name }}</v-chip
        >
      </template>
      <template #item="data">
        {{ data.item.Name }}
      </template>
    </v-autocomplete>
    <v-text-field
      prepend-icon="attach_money"
      type="number"
      step=".5"
    ></v-text-field>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      UsersSelected: [],
      Position: [],
    }
  },

  computed: {
    ...mapState(['GlobalUsers', 'Positions']),
  },
  created() {
    // if (!this.GlobalUsers.length) {
    //   this.$store.dispatch('GetGlobalUsers')
    // }
  },
  methods: {
    remove(item, array) {
      const index = array.findIndex((e) => e.ID === item.ID)
      if (index >= 0) array.splice(index, 1)
    },
  },
}
</script>
