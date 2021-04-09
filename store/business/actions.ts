const actions: any = {
  getBusinessesWithAccess({ rootState, commit, dispatch }: any) {
    this.$fire.firestore
      .collection('positions')
      .where('userID', '==', rootState.auth.user.uid)
      .onSnapshot((docs: any) => {
        const positions: any[] = []
        docs.forEach((position: any) => {
          positions.push(position.data())
        })
        dispatch('getBusinesses', positions)
        commit('SET_POSITIONS', positions)
      })
  },

  async getBusinesses({ commit }: any, positions: any[]) {
    const businesses: any[] = []
    for (let index = 0; index < positions.length; index++) {
      const business = await this.$fire.firestore
        .collection('businesses')
        .doc(positions[index].businessID)
        .get()
      businesses.push({
        id: positions[index].businessID,
        ...business.data(),
      })
    }
    commit('SET_BUSINESSES', businesses)
  },

  async createBusiness({ rootState }: any, newBusiness: any) {
    const businessID = (
      await this.$fire.firestore.collection('businesses').add(newBusiness)
    ).id
    await this.$fire.firestore.collection('positions').add({
      accessLevel: 1,
      businessID,
      title: 'owner',
      status: 'active',
      userID: rootState.auth.user.uid,
    })
  },
  setCurrentBusiness({ commit }: any, business: any) {
    commit('SET_CURRENT_BUSINESS', business)
  },

  getEmployees({ commit, state }: any) {
    this.$fire.firestore
      .collection('positions')
      .where('businessID', '==', state.currentBusiness.id)
      .onSnapshot(async (res: any) => {
        const positions: any[] = []
        res.forEach((doc: any) => {
          positions.push(doc.data())
        })
        const employees: any[] = []
        for (let index = 0; index < positions.length; index++) {
          const position = positions[index]
          const employee = await this.$fire.firestore
            .collection('users')
            .doc(position.userID)
            .get()
          employees.push({ ...employee.data(), position })
        }
        commit('SET_EMPLOYEES', employees)
      })
  },

  getInvoices({ commit, state }: any) {
    const invoices: any[] = []
    this.$fire.firestore
      .collection('businesses')
      .doc(state.currentBusiness.id)
      .collection('invoices')
      .onSnapshot((res: any) => {
        res.forEach((item: any) => {
          invoices.push(item.data())
        })
        commit('SET_INVOICES', invoices)
      })
  },
  getCustomers({ commit, state }: any) {
    this.$fire.firestore
      .collection('businesses')
      .doc(state.currentBusiness.id)
      .collection('customers')
      .onSnapshot((res: any) => {
        const customers: any[] = []
        res.forEach((customer: any) => {
          customers.push(customer.data())
        })
        commit('SET_CUSTOMERS', customers)
      })
  },

  addCustomer({ state }: any, customer: any) {
    this.$fire.firestore
      .collection('businesses')
      .doc(state.currentBusiness.id)
      .collection('customers')
      .add(customer)
  },
}
export default actions
