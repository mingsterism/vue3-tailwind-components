<template>
  <button
    class="p-1 m-1 max-w-auto px-2 border-solid border-1 border-black text-sm text-center"
    :class="{ 'bg-indigo-700 text-white': isBgBlue }"
  >
    <slot></slot>
    {{ btnTxt }}
  </button>
</template>
   
<script>
export default {
  props: {
    btnTxt: {
      type: String,
      required: true,
    },
    isBgBlue: {
      type: Boolean,
    },
  },
  name: "CustomButton",
  data() {
    return {};
  },
};
</script>

<style scoped>
@import "@css/main.css";
</style>
