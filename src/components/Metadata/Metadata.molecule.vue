<template>
  <span>
    <p class="font-bold">{{ primaryText }}</p>
    <p>{{ secondaryText }}</p>
  </span>
</template>

<script>
import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: "Metadata",
  props: {
    primaryText: {
      type: String,
      required: true
    },
    secondaryText: {
      type: String
    }
  }
})
</script>

<style scoped>

</style>