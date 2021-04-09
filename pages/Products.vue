<template>
  <div class="ma-2">
    <ProductCard
      v-for="(product, idx) in products"
      :key="idx"
      class="my-3"
      :product="product"
    />
  </div>
</template>

<script>
/* -------------------------------------------------------------------------- */
/*               basic product view to be updated in  the future              */
/* -------------------------------------------------------------------------- */

export default {
  data() {
    return {
      products: [
        {
          images: [
            {
              caption: 'just an image',
              src:
                'https://www.apple.com/v/homepod-mini/d/images/overview/hero_homepod__cnpc7icpf1aq_large.png',
            },
            {
              caption: 'just an image',
              src:
                'https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg',
            },
          ],
          name: 'Amazon',
          price: 123,
          currency: 'CAD',
          description:
            '3M Thinsulate Insulation: Lightweight 40 grams 3m thinsulate creat a thermal barrier to keep hands warm against cold air. The premium polar fleece lining is comfortable and soft for skin touch. Waterproof FAN-TEX Insert: It is',
        },
        {
          images: [
            {
              caption: 'just an image',
              src:
                'https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg',
            },
            {
              caption: 'just an image',
              src:
                'https://www.apple.com/v/homepod-mini/d/images/overview/hero_homepod__cnpc7icpf1aq_large.png',
            },
          ],
          name: 'Amazon',
          price: 123,
          currency: 'CAD',
          description:
            '3M Thinsulate Insulation: Lightweight 40 grams 3m thinsulate creat a thermal barrier to keep hands warm against cold air. The premium polar fleece lining is comfortable and soft for skin touch. Waterproof FAN-TEX Insert: It is',
        },
        {
          images: [
            {
              caption: 'just an image',
              src:
                'https://www.apple.com/v/homepod-mini/d/images/overview/hero_homepod__cnpc7icpf1aq_large.png',
            },
            {
              caption: 'just an image',
              src:
                'https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg',
            },
          ],
          name: 'Amazon',
          price: 123,
          currency: 'CAD',
          description:
            '3M Thinsulate Insulation: Lightweight 40 grams 3m thinsulate creat a thermal barrier to keep hands warm against cold air. The premium polar fleece lining is comfortable and soft for skin touch. Waterproof FAN-TEX Insert: It is',
        },
        {
          images: [
            {
              caption: 'just an image',
              src:
                'https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg',
            },
            {
              caption: 'just an image',
              src:
                'https://www.apple.com/v/homepod-mini/d/images/overview/hero_homepod__cnpc7icpf1aq_large.png',
            },
          ],
          name: 'Amazon',
          price: 123,
          currency: 'CAD',
          description:
            '3M Thinsulate Insulation: Lightweight 40 grams 3m thinsulate creat a thermal barrier to keep hands warm against cold air. The premium polar fleece lining is comfortable and soft for skin touch. Waterproof FAN-TEX Insert: It is',
        },
        {
          images: [
            {
              caption: 'just an image',
              src:
                'https://www.apple.com/v/homepod-mini/d/images/overview/hero_homepod__cnpc7icpf1aq_large.png',
            },
            {
              caption: 'just an image',
              src:
                'https://46ba123xc93a357lc11tqhds-wpengine.netdna-ssl.com/wp-content/uploads/2019/09/amazon-alexa-event-sept-2019.jpg',
            },
          ],
          name: 'Amazon',
          price: 123,
          currency: 'CAD',
          description:
            '3M Thinsulate Insulation: Lightweight 40 grams 3m thinsulate creat a thermal barrier to keep hands warm against cold air. The premium polar fleece lining is comfortable and soft for skin touch. Waterproof FAN-TEX Insert: It is',
        },
      ],
    }
  },
}
</script>
