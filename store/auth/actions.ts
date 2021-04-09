const actions: any = {
  // * Set route attempted before auth rejection ||| Tested - Passed
  setToRouter({ commit }: any, ToRoute: string) {
    commit('SET_TO_ROUTE', ToRoute)
  },

  // * Go to route after successful login ||| Tested - Passed
  goToRoute({ commit }: any) {
    commit('GO_TO_ROUTE')
  },

  // * Update User Profile ||| Tested - Passed
  async updateUserAuth(
    _context: any,
    payload: { displayName?: string | null; photoURL?: string | null }
  ) {
    await this.$fire.auth.currentUser.updateProfile(payload)
  },

  // * Signup User ||| Tested - Passed
  async createUser({ dispatch }: any, payload: any) {
    try {
      const UID = (
        await this.$fire.auth.createUserWithEmailAndPassword(
          payload.email,
          payload.password
        )
      ).user.uid
      // const ip = (await this.$axios.get('https://api.ipify.org/?format=json'))
      //   .data.ip
      const userAgent = navigator.userAgent
      const planID = 'TO BE DONE LATER' // ! TODO: Plan Logic needs to be added
      const tosAcceptance = {
        date: new Date(),
        // ip,
        type: 'general software agreement',
        userAgent,
      }
      const name = {
        first: payload.name.first,
        last: payload.name.last,
      }
      const user = { name, email: payload.email, tosAcceptance, planID }

      await this.$fire.firestore.collection('users').doc(UID).set(user)
      await dispatch('updateUserAuth', {
        displayName: `${user.name.first} ${user.name.last}`,
      })

      await dispatch('sendEmailVerfication')
      this.$router.push('/auth/verify')
    } catch (error) {
      this.$Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        confirmButtonText: 'Try Again',
      })
    }
  },

  // * Login User ||| Tested - Passed
  async emailLogin({ dispatch }: any, payload: any) {
    try {
      await this.$fire.auth.signInWithEmailAndPassword(
        payload.email,
        payload.password
      )
      dispatch('goToRoute')
    } catch (error) {
      this.$Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error,
        confirmButtonText: 'Try Again',
      })
    }
  },

  // ? Update User Email ||| not tested
  async updateUserEmail(_context: any, newEmail: string) {
    await this.$fire.auth.currentUser.updateEmail(newEmail)
  },

  // * Send Email Verfication ||| Tested - Passed
  async sendEmailVerfication() {
    await this.$fire.auth.currentUser.sendEmailVerification()
  },

  onAuthStateChanged({ commit, dispatch }: any, { authUser, claims }: any) {
    if (!authUser) {
      commit('LOGIN_USER', null)
      this.$router.push('/auth/login')
    } else {
      const { uid, email, emailVerified, displayName, photoURL } = authUser
      commit('LOGIN_USER', {
        uid,
        displayName,
        email,
        emailVerified,
        photoURL: photoURL || null,
        isAdmin: claims.custom_claim,
      })
      dispatch('getUserData', uid)
    }
  },

  getUserData({ commit }: any, uid: string) {
    const ref = this.$fire.firestore.collection('users').doc(uid)
    ref.onSnapshot((res: any) => {
      commit('USER_DATA', res.data())
    })
  },

  logout() {
    this.$fire.auth.signOut()
  },
}
export default actions
