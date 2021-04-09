const mutations: any = {
  SET_POSITIONS(state: any, payload: any) {
    state.positions = payload
  },

  SET_BUSINESSES(state: any, payload: any) {
    state.businesses = payload
  },

  SET_CURRENT_BUSINESS(state: any, payload: any) {
    state.currentBusiness = payload
  },

  SET_EMPLOYEES(state: any, payload: any) {
    state.employees = payload
  },

  SET_INVOICES(state: any, payload: any) {
    state.invoices = payload
  },

  SET_CUSTOMERS(state: any, payload: any) {
    state.customers = payload
  },
}
export default mutations
