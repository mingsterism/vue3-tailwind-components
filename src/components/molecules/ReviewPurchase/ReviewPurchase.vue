<template>
  <div>
    <div class="rounded-md p-3">
      <div class="bg-gray-200 grid grid-cols-3 gap-4 gap-y-4">
        <div
          class="rounded-md p-3 font-extrabold bg-gray-300 col-span-3 text-left"
        >
          {{ product }}
        </div>

        <div class="p-3 col-span-2 text-left">
          <ul>
            <li v-for="item in detailsList" :key="item">
              &#10004;&nbsp;{{ item }}
            </li>
          </ul>
        </div>
        <div class="p-3 col-span-2 text-left">
          <p class="text-blue font-extrabold">CARD DETAILS</p>
          {{ cardType }} ending in {{ cardNum }}
        </div>
        <div class="p-3 col-span-1">&#128394;</div>

        <div class="p-3 col-span-2 text-left">
          <p class="text-blue font-extrabold">SHIPPING DETAILS</p>
          {{ shippingDetails }}
        </div>
        <div class="p-3 col-span-1">&#128394;</div>
      </div>
      <div
        class="bg-gray-200 grid grid-cols-3 gap-4 gap-y-4 border-t-2 border-gray-500"
      >
        <div class="p-3 col-span-2 text-left text-md font-bold">
          <p class="">Your {{ buyOrBid }} Price</p>
        </div>
        <div class="p-3 col-span-1 text-md font-bold">
          {{ currency }}&nbsp;{{ purchasePrice }}
        </div>

        <div class="p-3 col-span-2 text-left text-md font-bold">
          <p class="">Processing Fee</p>
        </div>
        <div class="p-3 col-span-1 text-md font-bold">
          {{ currency }}&nbsp;{{ processingFee }}
        </div>

        <div class="p-3 col-span-2 text-left text-md font-bold">
          <p class="">Shipping Fee</p>
        </div>
        <div class="p-3 col-span-1 text-md font-bold">
          {{ currency }}&nbsp;{{ shippingFee }}
        </div>

        <div class="p-3 col-span-2 text-left text-2xl">
          <p class="font-extrabold">TOTAL</p>
        </div>
        <div class="p-3 col-span-1 font-extrabold text-2xl">
          {{ currency }}&nbsp;{{ total }}
        </div>
      </div>
    </div>

    <div class="flex px-3">
      <button
        class="w-1/2 border-2 h-12 hover:bg-gray-200 bg-gray-200 text-black font-bold"
      >
        BACK
      </button>
      <button
        class="w-1/2 border-2 h-12 text-white bg-blue font-bold border-b-4 border-blue"
      >
        CONFIRM {{ buyOrBid }}
      </button>
    </div>
  </div>
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
export default {
  props: {
    product: {
      type: String,
      required: true
    },
    details: {
      type: Array
    },
    cardType: {
      type: String,
      required: true
    },
    cardNum: {
      type: Number,
      required: true
    },
    shippingDetails: {
      type: String,
      required: true
    },
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
    buyOrBid: {
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
      return JSON.parse(this.details);
    }
  }
};
</script>
