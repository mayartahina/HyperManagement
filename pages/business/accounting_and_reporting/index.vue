<template>
  <v-container class="pa-5">
    <v-layout row wrap="" justify-center="" align-center="">
      <v-flex xs6 class="pa-3">
        <v-card
          to="/business/accounting_and_reporting/reports"
          @mouseenter="card_elevation_1 = 12"
          @mouseleave="card_elevation_1 = null"
          :elevation="card_elevation_1"
          class="text-center"
        >
          <v-img
            :gradient="`to  left, rgba(255,0,0,${Creditpercentage}), rgba(0,255,200,${Debitpercentage})`"
            lazy-src="/uploads/reporting.jpg"
            src="/uploads/reporting.jpg"
          >
            <v-layout fill-height="" justify-center align-center>
              <v-flex class="white--text display-1"> Reporting </v-flex>
            </v-layout>
          </v-img>
        </v-card>
      </v-flex>
      <v-flex xs6 class="pa-3">
        <v-card
          to="/business/accounting_and_reporting/accounting"
          @mouseenter="card_elevation_2 = 12"
          @mouseleave="card_elevation_2 = null"
          :elevation="card_elevation_2"
          class="text-center"
        >
          <v-img
            :gradient="`to  left, rgba(255,0,0,${Creditpercentage}), rgba(0,255,200,${Debitpercentage})`"
            lazy-src="/uploads/accounting.jpg"
            src="/uploads/accounting.jpg"
          >
            <v-layout fill-height="" justify-center align-center>
              <v-flex class="white--text display-1"> Accounting </v-flex>
            </v-layout>
          </v-img>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      Debitpercentage: 1,
      card_elevation_1: null,
      card_elevation_2: null,
    }
  },
  computed: {
    Creditpercentage() {
      return 1 - this.Debitpercentage
    },
  },
}
</script>
