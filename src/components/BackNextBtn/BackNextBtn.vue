<template>
  <div>
    <div class="flex px-3">
      <button
        class="w-1/2 border-2 h-12 hover:bg-gray-300 bg-gray-200 text-black font-bold"
      >
        BACK
      </button>
      <button
        class="w-1/2 border-2 h-12 text-white hover:bg-blueHover bg-blue font-bold border-b-4 border-blue"
      >
        NEXT
      </button>
    </div>
  </div>
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
export default {
  props: {},
  methods: {
    next() {
      console.log("next");
    },
    back() {
      console.log("back");
    }
  }
};
</script>
