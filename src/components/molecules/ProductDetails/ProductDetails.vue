<template>
  <div class="flex">
    <div class="w-1/6 border-r-2 border-gray-200 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">BRAND</p>
      <p class="font-sans text-xl">{{ brand }}</p>
    </div>
    <div class="w-1/6 border-r-2 border-gray-200 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">RELEASE DATE</p>
      <p class="font-sans text-xl">{{ releaseDate }}</p>
    </div>
    <div class="w-1/6 border-r-2 border-gray-200 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">RETAIL PRICE</p>
      <p class="font-sans text-xl">{{ retailPrice }}</p>
    </div>
    <div class="w-1/6 border-r-2 border-gray-200 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">COLORWAY</p>
      <p class="font-sans text-xl">{{ colorway }}</p>
    </div>
    <div class="w-1/6 border-r-2 border-gray-200 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">STYLE</p>
      <p class="font-sans text-xl">{{ shoeStyle }}</p>
    </div>
    <div class="w-1/6 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">CONDITION</p>
      <p class="font-sans text-xl">{{ condition }}</p>
    </div>
  </div>
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
export default {
  props: {
    brand: {
      type: String
    },
    releaseDate: {
      type: String
    },
    retailPrice: {
      type: Number,
      required: true
    },
    colorway: {
      type: Number
    },
    shoeStyle: {
      type: String
    },
    condition: {
      type: String
    },
    currency: {
      type: String,
      required: true
    }
  }
};
</script>
