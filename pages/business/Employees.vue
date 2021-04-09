<template>
  <div>
    <BusinessEmployeesTable :headers="headers" :items="filteredEmployees" />
    <!-- <CRUDTable
      :headers="headers"
      type="employees"
      :items="filteredEmployees"
      @SendingItem="ReceivingItem"
    >
      <template slot="Add">
        <BusinessEmployeesAdd />
      </template>
      <template slot="Edit">
        <BusinessEmployeesEdit :item="item" />
      </template>
    </CRUDTable> -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      item: {},
      headers: [
        { text: 'Avatar', value: 'avatar' },
        { text: 'Name', value: 'name' },
        { text: 'Position', value: 'position' },
        { text: 'Access Level', value: 'accessLevel' },
        { text: 'Pay Rate', value: 'pay' },
        { text: 'Status', value: 'status' },
        { text: 'Actions', value: 'actions' },
      ],
    }
  },
  computed: {
    filteredEmployees() {
      return this.employees.map((res) => {
        const item = {
          avatar: res.avatar,
          name: `${res.name.first} ${res.name.last}`,
          position: res.position.title,
          accessLevel: res.position.accessLevel,
          pay: res.position.pay,
          salary: res.position.salary,
          salary_cycle: res.position.salary_cycle,
          currency: res.position.currency,
          status: res.position.status,
          actions: null,
        }

        return item
      })
    },
    ...mapState('business', ['employees']),
  },
  mounted() {
    this.$store.dispatch('business/getEmployees')
  },
  methods: {
    ReceivingItem(item) {
      this.item = item
    },
  },
}
</script>
