<template>
  <div>
    <v-app-bar app elevation="0">
      <v-spacer></v-spacer>

      <div class="text-center">
        <v-menu transition="fade-transition" offset-y>
          <template #activator="{ on }">
            <v-avatar color="orange" size="32" class="mr-3" v-on="on">
              <v-img
                src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png"
                lazy-src="https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png"
              />
            </v-avatar>
          </template>

          <v-list>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon color="error"> lock </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
            <v-list-item to="/settings">
              <v-list-item-icon>
                <v-icon color="blue"> settings </v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn small="" fab elevation="0" @click="lightSwitch()">
        <v-icon v-if="themeState" color="blue">dark_mode</v-icon>
        <v-icon v-else color="primary">light_mode</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
<script>
export default {
  computed: {
    themeState() {
      return this.$vuetify.theme.dark
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout')
    },
    lightSwitch() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
  },
}
</script>
