<template>
  <v-container>
    <v-card elevation="5" class="mt-5 rounded">
      <!-- Header of the Card component that has the add and the title -->
      <v-card-title>
        Invoices
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

      <!-- the start of the crud table  -->
      <v-data-table
        :search="search"
        loading-text="Loading... Please wait"
        :loading="!invoices.length"
        :headers="headers"
        :items="invoices"
        :items-per-page="5"
        class="elevation-1"
      >
        <template #[`item.due_date`]="{ item }">
          <v-chip v-if="item.paid">
            Paid <v-icon color="success">check</v-icon>
          </v-chip>
          <v-chip v-else>
            <!-- getting payment status  -->
            {{ PaymentStatus(item.due_date).text }}
            <v-icon :color="PaymentStatus(item.due_date).color">
              {{ PaymentStatus(item.due_date).icon }}
            </v-icon>
          </v-chip>
        </template>
        <template #[`item.sent`]="{ item }">
          <v-chip v-if="item.sent">
            <v-icon color="success"> check</v-icon>
          </v-chip>
          <v-chip v-else>
            Not sent <v-icon color="error">error</v-icon>
          </v-chip>
        </template>
        <template #[`item.receipt`]="{ item }">
          <v-chip v-if="item.receipt">
            <v-icon color="success"> check</v-icon>
          </v-chip>
          <v-chip v-else>
            <v-icon color="error">close</v-icon>
          </v-chip>
        </template>
        <!-- actions not functional  -->
        <template #[`item.actions`]="{ item }">
          <v-btn
            fab
            elevation="2"
            x-small=""
            class="mx-2"
            color="secondary"
            @click="editItem(item)"
          >
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
  </v-container>
</template>

<script>
import moment from 'moment'
import { mapState } from 'vuex'
export default {
  components: {},
  filters: {
    datefilter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
  data() {
    return {
      search: '',
      /* ------------- custome headers to be passed to the crud Table ------------- */
      headers: [
        { text: 'Date Created', value: 'date' },
        { text: 'Amount', value: 'amount' },
        { text: 'Customer', value: 'customer_name' },
        { text: 'Status', value: 'due_date' },
        { text: 'Sent', value: 'sent' },
        { text: 'Reciept', value: 'receipt' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },
  computed: {
    /* --------------------- Mapping invoices from the store -------------------- */
    ...mapState('business', ['invoices']),
  },
  mounted() {
    this.$store.dispatch('business/getInvoices')
  },
  methods: {
    /* --------------------- Filter date in a specfic format -------------------- */
    datefilter(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },

    /* -------------------------------------------------------------------------- */
    /*              return an object according to the payment status              */
    /* -------------------------------------------------------------------------- */
    PaymentStatus(date) {
      if (new Date(date) > new Date()) {
        return {
          text: `Due on ${this.datefilter(date)} `,
          color: 'secondary',
          icon: 'schedule',
        }
      } else if (new Date(date) === new Date())
        return {
          text: `Due on ${this.datefilter(date)}`,
          color: 'error',
          icon: 'schedule',
        }
      else
        return {
          text: `Overdue , Date ${this.datefilter(date)} `,
          color: 'error',
          icon: 'error',
        }
    },
  },
}
</script>

<style></style>
