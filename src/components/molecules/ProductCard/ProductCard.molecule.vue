<template>
  <div class="p-4 border-red-4 max-w-sm rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      src="../../../assets/Nike-Dunk-High-Michigan.png"
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ prodName }}</div>
      <p class="text-gray-700 text-base">
        {{ description }}
      </p>
      <div class="text-xl mb-2">
        Asking price: {{ currency }} {{ askPrice }}
      </div>
      <div class="text-xl mb-2">
        Bidding price: {{ currency }} {{ bidPrice }}
      </div>
    </div>
  </div>
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
export default {
  props: {
    prodName: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    askPrice: {
      type: Number,
      required: true
    },
    bidPrice: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    }
  }
};
</script>
