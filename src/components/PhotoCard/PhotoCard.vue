<template>
  <div class="max-w-xs rounded overflow-hidden shadow-lg my-2">
    <img :alt="imgAlt" :src="imgSrc" class="w-full h-64">
    <div class="px-6 py-4">
      <div class="font-bold text-2xl mb-2">{{ primaryText }}</div>
      <p class="text-grey-darker text-base">
        {{ secondaryText }}
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "PhotoCard",
  data() {

  },
  props: {
    primaryText: {
      type: String
    },
    secondaryText: {
      type: String
    },
    imgSrc: {
      type: String
    },
    imgAlt: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>
