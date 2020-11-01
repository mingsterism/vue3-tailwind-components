<template>
  <div>
    <div v-if="activeBtnRight" class="flex flex-wrap overflow-hidden">
      <button
        @click="onLeftHandler"
        class="border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnLeft }}
      </button>
      <button
        @click="onRightHandler"
        class="border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r border-b-4 border-blue w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnRight }}
      </button>
    </div>
    <div v-if="activeBtnLeft" class="flex flex-wrap overflow-hidden">
      <button
        @click="onLeftHandler"
        class="border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l border-b-4 border-blue w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
      >
        {{ BtnLeft }}
      </button>
      <button
        @click="onRightHandler"
        class="border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r w-1/2 overflow-hidden sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
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
export default {
  data() {
    return {
      activeBtnLeft: false,
      activeBtnRight: true
    };
  },
  props: {
    BtnLeft: {
      type: Number
    },
    BtnRight: {
      type: Number,
      required: true
    }
  },
  methods: {
    onLeftHandler() {
      console.log("BtnLeft");
      this.activeBtnLeft = true;
      this.activeBtnRight = false;
    },
    onRightHandler() {
      console.log("BtnRight");
      this.activeBtnRight = true;
      this.activeBtnLeft = false;
    }
  }
};
</script>
