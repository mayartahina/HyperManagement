<template>
  <v-layout fill-height justify-center align-center>
    <v-card width="500px" class="text-center" color="transparent" flat>
      <div class="my-5 text-center">
        <h1>Login into HyperManagement</h1>
      </div>
      <v-form ref="loginForm" @submit.prevent="login">
        <v-text-field
          v-model="credentials.email"
          label="Email"
          dense
          rounded
          placeholder="Email/Username"
          outlined
          type="email"
          filled
        ></v-text-field>
        <v-text-field
          v-model="credentials.password"
          label="Password"
          placeholder="Password"
          dense
          required
          rounded
          outlined
          type="password"
          filled
        ></v-text-field>

        <v-card-actions class="text-center justify-center">
          <v-btn
            color="primary "
            class="text-capitalize"
            large
            type="submit"
            rounded
          >
            Continue
            <v-icon>fas fa-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
      <v-divider class="my-5"></v-divider>
      <v-btn to="/auth/signup" text>Create a new account</v-btn>
    </v-card>
  </v-layout>
</template>
<script>
export default {
  name: 'Login',
  layout: 'auth',
  data() {
    return {
      credentials: {
        email: '',
        password: '',
      },
    }
  },
  methods: {
    login() {
      if (!this.$refs.loginForm.validate()) return
      this.$store.dispatch('auth/emailLogin', this.credentials)
    },
  },
}
</script>
