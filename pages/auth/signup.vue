<template>
  <v-layout fill-height row justify-center align-center>
    <v-card-title class="justify-center display-1">Sign up</v-card-title>
    <v-container>
      <v-form ref="form" @submit.prevent="Signup">
        <v-row>
          <v-col cols="12" lg="6">
            <!-- first name  -->
            <v-text-field
              id="firstname"
              v-model="name.first"
              required
              label="First Name"
              type="text"
              filled
              rounded
            ></v-text-field>
          </v-col>

          <!-- last name -->
          <v-col cols="12" lg="6">
            <v-text-field
              id="lastname"
              v-model="name.last"
              required
              label="Last Name"
              rounded
              type="text"
              filled
            ></v-text-field>
          </v-col>
        </v-row>

        <!-- email -->
        <v-text-field
          v-model="email"
          label="Email"
          rounded
          type="email"
          filled
        ></v-text-field>

        <!-- password -->
        <v-text-field
          v-model="password"
          label="Password"
          rounded
          :type="displayPassword ? 'text' : 'password'"
          filled
          class="pb-0 mb-0"
          :append-icon="displayPassword ? 'fas fa-eye' : 'fas fa-eye-slash'"
          @click:append="displayPassword = !displayPassword"
          @focus="showValidation = true"
          @blur="showValidation = false"
        ></v-text-field>

        <!-- confirm password -->
        <v-text-field
          v-model="cpassword"
          label="Confirm pasword"
          rounded
          type="password"
          filled
        ></v-text-field>
        <v-list-item class="text-left">
          <v-checkbox v-model="tos">
            <template v-slot:label>
              Agree to
              <a>Terms and Conditions</a>
            </template>
          </v-checkbox>
        </v-list-item>

        <v-card-actions class="text-center mb-5 justify-center">
          <v-btn
            color="primary"
            class="white--text"
            large
            type="submit"
            rounded
          >
            <span class="mx-2">Continue</span>
            <v-icon>fas fa-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-form>
    </v-container>
    <v-divider></v-divider>
    <v-card-text id="firebaseui-auth-container"></v-card-text>
    <v-card-actions class="justify-center mt-5">
      <v-btn
        to="/auth/login"
        rounded
        large
        color="secondary"
        elevation="0"
        class="text-capitalize"
        >Login with an existing account</v-btn
      >
    </v-card-actions>
  </v-layout>
</template>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      displayPassword: false,
      showValidation: false,
      tos: false,
      name: { first: '', last: '' },
      email: '',
      password: '',
      cpassword: '',
    }
  },
  methods: {
    Signup() {
      if (!this.$refs.form.validate()) return

      this.$store.dispatch('auth/createUser', {
        name: this.name,
        email: this.email,
        password: this.password,
        tos: this.tos,
      })
    },
  },
}
</script>
