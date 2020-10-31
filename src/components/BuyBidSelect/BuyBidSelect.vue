<template>
  <div>
    <div class="grid grid-rows-2 bg-gray-200 grid-flow-col rounded-md">
      <div class="row-span-3 border-r-2 border-gray-400">
        <div class="text-md p-10">
          <p>
            Selected
          </p>
          <h1 class="text-4xl font-bold">US {{ size }}</h1>
        </div>
      </div>
      <div
        class="font-sans flex row-span-1 col-span-2 content-center text-center m-auto"
      >
        <p class=" text-2xl text-blue m-auto">HIGHEST BID:&nbsp;&nbsp;</p>
        <div class="text-5xl text-black font-bold m-auto">
          {{ currency }} {{ highestBid }}
        </div>
      </div>
      <div
        class="font-sans flex row-span-1 col-span-2 content-center text-center m-auto"
      >
        <p class=" text-2xl text-blue m-auto">LOWEST ASK:&nbsp;&nbsp;</p>
        <div class="text-5xl text-black font-bold m-auto">
          {{ currency }} {{ lowestAsk }}
        </div>
      </div>
    </div>
    <div v-if="activeBuy" class="flex mb-4">
      <button
        @click="onPlaceBidHandler"
        class="w-1/2 border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l"
      >
        PLACE BID
      </button>
      <button
        @click="onBuybidHandler"
        class="w-1/2 border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r border-b-4 border-blue"
      >
        BUY NOW
      </button>
    </div>
    <div v-if="activeBid" class="flex mb-4">
      <button
        @click="onPlaceBidHandler"
        class="w-1/2 border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-l border-b-4 border-blue"
      >
        PLACE BID
      </button>
      <button
        @click="onBuybidHandler"
        class="w-1/2 border-2 h-12 hover:bg-gray-200 text-gray-800 font-bold py-2 px-4 rounded-r"
      >
        BUY NOW
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
      activeBid: false,
      activeBuy: true
    };
  },
  props: {
    highestBid: {
      type: Number
    },
    lowestAsk: {
      type: Number,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    }
  },
  methods: {
    onPlaceBidHandler() {
      console.log("onPlaceBidHandler");
      this.activeBid = true;
      this.activeBuy = false;
    },
    onBuybidHandler() {
      console.log("onBuybidHandler");
      this.activeBuy = true;
      this.activeBid = false;
    }
  }
};
</script>
