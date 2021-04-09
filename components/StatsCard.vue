<template>
  <v-card
    elevation="5"
    class="ma-5 rounded card-hover"
    max-width="250px"
    min-height="120px"
  >
    <v-layout class="rounded">
      <v-flex xs6>
        <v-card
          :color="iconCardColor"
          elevation="11"
          width="70"
          height="70"
          class="rounded ml-5 offset text-center"
        >
          <v-layout justify-center="" align-center="" fill-height="">
            <v-icon :color="iconColor" size="40">{{ icon }}</v-icon>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs6>
        <v-card class="rounded" elevation="0">
          <v-card-text class="text-right">
            {{ title }}
            <div :class="`${iconCardColor}--text  title`">{{ value }}</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-divider class="mx-5"></v-divider>
    <v-layout justify-start="" align-center="">
      <v-card class="rounded" elevation="0">
        <v-card-text class="ml-0 pl-2 caption">
          <v-icon :color="subiconColor">{{ subicon }}</v-icon>

          {{ subtitle }}
          <span> {{ subvalue }}</span>
        </v-card-text>
      </v-card>
    </v-layout>
  </v-card>
</template>
<script>
export default {
  props: {
    iconCardColor: { type: String, required: true },
    iconColor: { type: String, required: true },
    icon: { type: String, required: true },
    title: { type: String, required: true },
    value: { type: String, required: true },
    subtitle: { type: String, required: true },
    subicon: { type: String, required: true },
    subvalue: { type: String, required: true },
    subiconColor: { type: String, required: true },
  },
}
</script>
<style>
.offset {
  top: -20px;
}

.card-hover:hover {
  transition: box-shadow 1s;
  /* transform: rotate3d(0.5, 0.866, 0, 15deg) rotateZ(-1deg); */
  box-shadow: -27.1px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
    -16.2px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);

  /* box-shadow: 17.1px 12.5px 25px 17px rgba(50, 50, 93, 0.1),
    7.2px 17.5px 15px 5.5px rgba(0, 0, 0, 0.1) !important; */
}
</style>
