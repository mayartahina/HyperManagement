<template>
  <div>
    <h2>Select a business</h2>
    <v-container>
      <v-layout row wrap align-center justify-center>
        <v-flex
          v-for="(business, index) in businesses"
          :key="index"
          xs12
          sm6
          md4
          lg3
          xl2
          class="pa-3"
        >
          <v-card
            elevation="3"
            class="pa-2"
            height="150px"
            @click="selectBusiness(business)"
          >
            <v-layout justify-end="">
              <v-chip
                x-small=""
                class="ma-2 text-capitalize"
                :color="position(business).color"
              >
                {{ position(business).title }}
              </v-chip>
            </v-layout>
            <v-card-title class="text-capitalize">
              {{ business.name }}
            </v-card-title>
            <v-card-text> {{ business.description }} </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm6 md4 lg3 xl2 class="pa-3">
          <v-card
            elevation="3"
            class="pa-2 text-center grey--text text--darken-2 text-capitalize"
            @click="addBusinessDialog = true"
          >
            <v-card-title> Craete a new business </v-card-title>
            <v-btn fab depressed x-large>
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-dialog v-model="addBusinessDialog">
      <v-card class="pa-5 text-center">
        <v-form @submit.prevent="createBusiness()">
          <v-text-field
            v-model="newbusiness.name"
            rounded=""
            filled
            label="Business Name"
          ></v-text-field>
          <v-textarea
            v-model="newbusiness.description"
            rounded=""
            filled
            label="Description"
          ></v-textarea>
          <v-btn rounded type="submit" color="primary"> Create Business</v-btn>
        </v-form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'nonav',
  data: () => ({
    newbusiness: {},
    addBusinessDialog: false,
  }),
  computed: {
    ...mapState('business', ['businesses', 'positions']),
  },
  mounted() {
    this.$store.dispatch('business/getBusinessesWithAccess')
  },
  methods: {
    createBusiness() {
      this.$store.dispatch('business/createBusiness', this.newbusiness)
      this.addBusinessDialog = false
    },
    position(business) {
      const ret = { title: 'Unknown', color: 'secondary' }
      const position = this.positions.find(
        (pos) => pos.businessID === business.id
      )
      if (position) ret.title = position.title

      return ret
    },
    selectBusiness(business) {
      this.$store.dispatch('business/setCurrentBusiness', business)
      this.$router.push('/')
    },
  },
}
</script>
