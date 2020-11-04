<template>
  <div>
    <div class="flex">
      <button
        class="w-1/2 border-2 h-12 hover:bg-gray-300 bg-gray-200 text-black font-bold"
        @click="back()"

      >
        BACK
      </button>
      <button
        class="w-1/2 border-2 h-12 text-white hover:bg-blueHover bg-blue font-bold border-b-4 border-blue"
        @click="next()"

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
import {
  defineComponent,
  ref
} from 'vue';
import { BackNextBtn } from '.';

export default defineComponent({
  name: "BackNextBtn",
  props: {},
  methods: {
    next() {
      console.log("next");
      this.$emit("nextBtn");
    },
    back() {
      console.log("back");
      this.$emit("backBtn");

    }
  }
});
</script>
