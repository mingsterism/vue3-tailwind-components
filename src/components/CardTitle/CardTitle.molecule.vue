<template>
  <div class="text-left">
    <div class="font-sans text-3xl font-bold">
      {{ heading }}
    </div>
    <div class="font-sans text-base font-semibold" v-if="subHeading">
      {{ subHeading }}
    </div>
  </div>
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
export default {
  props: {
    heading: {
      type: String,
      required: true
    },
    subHeading: {
      type: String
    }
  }
};
</script>
