<template>
  <!-- // this File is to create the display card of the product. -->
  <div>
    <v-card class="pa-2" elevation="5">
      <v-dialog v-model="openEditModal" height="100%" :value="openEditModal">
        <v-card>
          <v-container>
            <v-form>
              <v-text-field v-model="localProduct.name" outlined label="Name" />
              <v-text-field
                v-model="localProduct.price"
                outlined
                type="number"
                label="Price"
              />
              <v-text-field
                v-model="localProduct.currency"
                outlined
                label="Currency"
              />
              <v-textarea
                v-model="localProduct.description"
                outlined
                label="Description"
              />
              <v-card elevation="1">
                <v-card-title>Images</v-card-title>
                <v-layout
                  class="mx-2"
                  row
                  wrap
                  justify-center=""
                  align-center=""
                >
                  <v-flex
                    v-for="(image, index) in localProduct.images"
                    :key="index"
                    xs4
                    class="pa-2"
                  >
                    <v-img class="rounded" :src="image.src">
                      <v-btn
                        icon
                        fab
                        small
                        color="error"
                        elevation="0"
                        absolute=""
                        right=""
                        @click="removeImage(index)"
                      >
                        <v-icon>delete</v-icon></v-btn
                      >
                      <v-card
                        elevation="0"
                        height="100%"
                        class="d-flex transparent align-end"
                      >
                        <div
                          class="pa-2"
                          style="background: rgba(0, 0, 0, 0.3); width: 100%"
                        >
                          <v-text-field
                            v-model="image.caption"
                            dark=""
                            dense=""
                            label="Caption"
                          />
                        </div>
                      </v-card>
                    </v-img>
                  </v-flex>
                  <v-flex xs4 class="text-center">
                    <v-btn fab="" elevation="0">
                      <v-icon> add </v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-card>
              <div class="d-flex justify-center">
                <v-btn class="ma-5" color="error"> Cancel </v-btn>
                <v-btn class="ma-5" color="success"> Save </v-btn>
              </div>
            </v-form>
          </v-container>
        </v-card>
      </v-dialog>
      <v-btn
        color="secondary"
        dark
        class="mt-2"
        x-small
        absolute
        right
        fab
        @click="openEditModal = true"
      >
        <v-icon>edit</v-icon>
      </v-btn>
      <v-layout align-center>
        <v-flex md2>
          <v-carousel
            hide-delimiters
            hide-delimiter-background
            show-arrows-on-hover
            height="150px"
            :interval="2000"
            :cycle="true"
          >
            <v-carousel-item
              v-for="(item, i) in localProduct.images"
              :key="i"
              cover
              :src="item.src"
            ></v-carousel-item>
          </v-carousel>
        </v-flex>
        <v-flex md10>
          <v-card-title> {{ localProduct.name }} </v-card-title>
          <p>
            <v-card-text
              >Price:
              <span class="primary--text">{{ localProduct.price }}$</span>
              {{ localProduct.currency }}
            </v-card-text>
            <v-card-text>{{ localProduct.description }}</v-card-text>
          </p>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    /* ---------------- a product prop accepted by the componenet --------------- */
    product: { type: Object, required: true },
  },
  data() {
    return {
      openEditModal: false,
    }
  },
  computed: {
    localProduct: {
      get() {
        return this.product
      },
      set(value) {
        this.$emit('productChanged', value)
      },
    },
  },
  methods: {
    /* ------------------- removes image form the images array ------------------ */
    removeImage(index) {
      this.localProduct.images.splice(index, index + 1)
    },
  },
}
</script>

<style></style>
