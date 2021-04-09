<template>
  <v-navigation-drawer app>
    <v-toolbar elevation="0">
      <v-img
        max-width="56px"
        height="56px"
        src="/uploads/Logo_clear.png"
      ></v-img>
      <span> HyperManagement </span>
    </v-toolbar>
    <v-list class="mt-5" dense rounded>
      <v-list-item
        v-for="(item, index) in routes"
        :key="index"
        :to="item.route"
      >
        <v-list-item-icon>
          <v-icon :color="item.color">{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-title>{{ item.name }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import routes from '../content/routes.json'
export default {
  data() {
    return {
      routes,
      mini: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' },
      ],
    }
  },
}
</script>
