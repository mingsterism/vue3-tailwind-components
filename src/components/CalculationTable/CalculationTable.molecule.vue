<template>
  <div class="container">
    <div class="bg-limitdLightGray flex flex-wrap overflow-hidden">
      <!-- <div
          class="p-3 col-span-3 text-center font-bold text-2xl my-4 border-b-2"
        >
          {{ product }}
        </div> -->
      <div class="w-1/2 overflow-hidden font-bold text-left p-4">
        <p>Your {{ flowType }} Price</p>
      </div>
      <div class="w-1/2 overflow-hidden font-bold text-right p-4">
        {{ currency }}&nbsp;{{ purchasePrice }}
      </div>

      <div class="w-1/2 overflow-hidden font-bold text-left p-4">
        <p>Processing Fee</p>
      </div>
      <div class="w-1/2 overflow-hidden font-bold text-right p-4">
        {{ currency }}&nbsp;{{ processingFee }}
      </div>

      <div class="w-1/2 overflow-hidden font-bold text-left p-4">
        <p>Shipping Fee</p>
      </div>
      <div class="w-1/2 overflow-hidden font-bold text-right p-4">
        {{ currency }}&nbsp;{{ shippingFee }}
      </div>

      <div class="w-1/2 overflow-hidden text-left p-4">
        <p class="font-extrabold">TOTAL</p>
      </div>
      <div class="w-1/2 overflow-hidden text-right font-extrabold p-4">
        {{ currency }}&nbsp;{{ total }}
      </div>
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
import { CalculationTable } from '.';

export default defineComponent({
  name: "CalculationTable",
  props: {
    currency: {
      type: String,
      required: true
    },
    purchasePrice: {
      type: Number,
      required: true
    },
    processingFee: {
      type: Number,
      required: true
    },
    shippingFee: {
      type: Number,
      required: true
    },
    flowType: {
      type: String,
      required: true
    }
  },
  computed: {
    total() {
      return (
        Number(this.purchasePrice) +
        Number(this.processingFee) +
        Number(this.shippingFee)
      );
    },
    detailsList() {
      return JSON.parse(this.questions);
    }
  }
});
</script>
