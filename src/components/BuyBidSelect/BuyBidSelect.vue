<template>
  <div>
    <div class="grid grid-rows-2 bg-gray-200 grid-flow-col">
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
        <p class=" text-xl font-bold text-blue m-auto">
          HIGHEST BID:&nbsp;&nbsp;
        </p>
        <div class="text-4xl text-black font-bold m-auto">
          {{ currency }} {{ highestBid }}
        </div>
      </div>
      <div
        class="font-sans flex row-span-1 col-span-2 content-center text-center m-auto"
      >
        <p class=" text-xl font-bold text-blue m-auto">
          LOWEST ASK:&nbsp;&nbsp;
        </p>
        <div class="text-4xl text-black font-bold m-auto">
          {{ currency }} {{ lowestAsk }}
        </div>
      </div>
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
