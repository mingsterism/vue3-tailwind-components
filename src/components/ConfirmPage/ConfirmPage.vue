<template>
  <div class="grid grid-cols-3 font-sans">
    <div class="col-span-3 mb-4">
      <img
        class="w-full"
        src="../../assets/Nike-Dunk-High-Michigan.png"
        alt="Sunset in the mountains"
      />
    </div>
    <div class="col-span-3 mb-4 font-bold text-5xl">
      {{ flowType }} CONFIRMED!
    </div>
    <div class="col-span-3 mb-4 text-2xl">
      Congratulations! Your latest {{ flowType }} is successful.
    </div>

    <div class="col-span-3 mt-4">
      <div class="bg-gray-200 grid grid-cols-3 gap-4 gap-y-4">
        <div
          class="p-3 col-span-3 text-center font-bold text-2xl my-4 border-b-2"
        >
          {{ product }}
        </div>
        <div class="p-3 col-span-2 text-left text-md font-bold">
          <p>Your {{ flowType }} Price</p>
        </div>
        <div class="p-3 col-span-1 text-md font-bold">
          {{ currency }}&nbsp;{{ purchasePrice }}
        </div>

        <div class="p-3 col-span-2 text-left text-md font-bold">
          <p>Processing Fee</p>
        </div>
        <div class="p-3 col-span-1 text-md font-bold">
          {{ currency }}&nbsp;{{ processingFee }}
        </div>

        <div class="p-3 col-span-2 text-left text-md font-bold">
          <p>Shipping Fee</p>
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
    //   questions:{
    //       type: String,
    //   },
    //   cardType:{
    //       type: String,
    //       required: true
    //   },
    //   cardNum:{
    //       type: Number,
    //       required: true
    //   },
    //   shippingDetails:{
    //       type: String,
    //       required: true
    //   },
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
};
</script>
