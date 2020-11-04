<template>
  <div class="container">
    <div class="bg-limitdLightGray flex flex-wrap overflow-hidden">
      <!-- <div
          class="p-3 col-span-3 text-center font-bold text-2xl my-4 border-b-2"
        >
          {{ product }}
        </div> -->
      <template class="w-full" v-for="item in data" :key="item.name">
        <div class="w-1/2 overflow-hidden font-bold text-left p-4">
          <p>{{ item.name }}</p>
        </div>
        <div class="w-1/2 overflow-hidden font-bold text-right p-4">
          {{ currency }}&nbsp;{{ item.price }}
        </div>
      </template>
      <!-- <div class="w-1/2 overflow-hidden font-bold text-left p-4">
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
      </div> -->

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
    data:{
      type: Array,
      required: true
    },
    currency: {
      type: String,
      required: true
    }
  },
  computed: {
    total() {
      return (
        this.data.reduce((a, ele) => a + ele.price, 0)
      );
    }
  }
});
</script>
