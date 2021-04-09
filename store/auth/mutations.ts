const mutations: any = {
  // * Tested - Passed
  LOGIN_USER(state: any, payload: any) {
    state.user = payload
  },
  USER_DATA(state: any, payload: any) {
    if (state.user) state.user.data = payload
  },
  // * Tested - Passed
  SET_TO_ROUTE(state: any, payload: any) {
    state.toRoute = payload
  },

  // * Tested - Passed
  GO_TO_ROUTE(state: any) {
    this.$router.push(state.toRoute)
    state.toRoute = '/'
  },
}
export default mutations
