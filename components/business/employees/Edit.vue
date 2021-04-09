<template>
  <div>
    {{ item }}
  </div>
</template>
<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
}
</script>
