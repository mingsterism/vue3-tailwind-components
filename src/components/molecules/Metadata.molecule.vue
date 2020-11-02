<template>
  <span>
    <p class="font-bold">{{ primaryText }}</p>
    <p>{{ secondaryText }}</p>
  </span>
</template>

<script>
export default {
  name: "Metadata.molecule",
  props: {
    primaryText: {
      type: String,
      required: true
    },
    secondaryText: {
      type: String
    }
  }
}
</script>

<style scoped>

</style>