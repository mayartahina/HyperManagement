<template>
  <div>
    <v-toolbar-title v-if="currentBusiness !== null" class="text-center">
      {{ currentBusiness.name }}
    </v-toolbar-title>

    <!-- default link to activate payment using Stripe Connet Onboarding  -->
    <v-list>
      <v-list-item-group :value="0" color="primary">
        <v-list-item
          class="text-center grey lighten-2"
          href="https://dashboard.stripe.com/express/oauth/authorize?response_type=code&client_id=ca_FsUmb3zakFRKTNSczVC9iHfVlPtaIBCh&scope=read_write&redirect_uri=http://localhost:3000/stripe_set_account?business=true"
        >
          <v-list-item-content>
            <v-list-item-avatar>
              <v-img
                contain
                src="https://upload.wikimedia.org/wikipedia/en/e/eb/Stripe_logo%2C_revised_2016.png"
              />
            </v-list-item-avatar>
            <v-list-item-title>
              Activate Payments for your business
            </v-list-item-title>
            <v-list-item-subtitle> </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <!-- Using stat cards in the future  -->
    <v-container>
      <v-layout row wrap>
        <v-flex lg3>
          <StatsCard
            icon-color="white"
            icon-card-color="blue"
            icon="trending_up"
            title="Revenue"
            value="$1975"
            subtitle="Last Upadted at"
            subicon="schedule"
            subicon-color="grey"
            subvalue="12:45pm"
          />
        </v-flex>
        <v-flex lg3>
          <StatsCard
            icon-color="white"
            icon-card-color="red"
            icon="money_off"
            title="Expenses"
            value="$775"
            subtitle="Last Upadted at"
            subicon="schedule"
            subicon-color="grey"
            subvalue="12:45pm"
          />
        </v-flex>
        <v-flex lg3>
          <StatsCard
            icon-color="white"
            icon-card-color="green"
            icon="account_balance"
            title="Profit"
            value="$1200"
            subtitle="Last Upadted at"
            subicon="schedule"
            subicon-color="#DD2C00"
            subvalue="2 mins ago"
          />
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
/* ------------- importing important components and dependencies ------------ */
import { mapState } from 'vuex'
export default {
  data() {
    return {
      BID: '',
    }
  },
  computed: {
    ...mapState('business', ['currentBusiness']),
  },
  methods: {
    /* -------------------------------------------------------------------------- */
    /*        Setting the business id to be used by stripe on the callback        */
    /* -------------------------------------------------------------------------- */
  },
}
</script>
