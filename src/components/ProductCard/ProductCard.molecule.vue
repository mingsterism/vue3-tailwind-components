<template>

  <div class="max-w-sm overflow-hidden bg-limitdLightGray">
  <img class="pb-16 px-4 w-full bg-limitdGray" src="../../assets/Nike-Dunk-High-Michigan.png" alt="Sunset in the mountains">
  <div class="p-10">
    <div class="font-sans text-lg mb-2">{{ prodName }}</div>
    <!-- <p class="text-gray-700 text-base">
      {{ description }}
    </p> -->
    <div class="text-3xl font-sans font-bold">{{ currency }} {{ askPrice }}</div>
    <!-- <div class="text-xl mb-2">Bidding price: {{ currency }} {{ bidPrice }}</div> -->

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
import { ProductCard } from '.';

export default defineComponent({
  name: "ProductCard",
  props: {
    prodName: {
      type: String,
      required: true
    },
    askPrice: {
      type: Number,
      required: true
    },
    currency: {
      type: String,
      required: true
    },
    imgLink:{
      type: String
    }
  }
});
</script>
