<template>
  <div>
    <div class="flex flex-wrap overflow-hidden" v-if="activeBtnRight">
      <button
          @click="onLeftHandler"
          class="border-2 h-16 hover:bg-gray-200 text-gray-800 font-bold w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnLeft }}
      </button>
      <button
          @click="onRightHandler"
          class="border-2 h-16 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border-b-8 border-blue w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnRight }}
      </button>
    </div>
    <div class="flex flex-wrap overflow-hidden" v-if="activeBtnLeft">
      <button
          @click="onLeftHandler"
          class="border-2 h-16 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 border-b-8 border-blue w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnLeft }}
      </button>
      <button
          @click="onRightHandler"
          class="border-2 h-16 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnRight }}
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
  
} from 'vue';

export default defineComponent({
  name: "ToggleSwitch",
  data() {
    return {
      activeBtnLeft: false,
      activeBtnRight: true
    };
  },
  props: {
    BtnLeft: {
      type: String,
      required: true

    },
    BtnRight: {
      type: String,
      required: true
    }
  },
  methods: {
    onLeftHandler() {
      console.log("BtnLeft");
      this.$emit("onBtnLeft");

      this.activeBtnLeft = true;
      this.activeBtnRight = false;
    },
    onRightHandler() {
      console.log("BtnRight");
      this.$emit("onBtnRight");
      this.activeBtnRight = true;
      this.activeBtnLeft = false;
    }
  }
});
</script>
