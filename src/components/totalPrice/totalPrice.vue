<template>
  <!-- <div class="col-span-3 mt-4"> -->
  <div
    class="bg-gray-200 flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2"
  >
    <!-- <div
          class="p-3 col-span-3 text-center font-bold text-2xl my-4 border-b-2"
        >
          {{ product }}
        </div> -->
    <div
      class="my-2 px-2 w-1/2 overflow-hidden font-bold sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 text-left"
    >
      <p>Your {{ flowType }} Price</p>
    </div>
    <div
      class="my-2 px-2 w-1/2 overflow-hidden font-bold text-right sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2"
    >
      {{ currency }}&nbsp;{{ purchasePrice }}
    </div>

    <div
      class="my-2 px-2 w-1/2 overflow-hidden font-bold sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 text-left"
    >
      <p>Processing Fee</p>
    </div>
    <div
      class="my-2 px-2 w-1/2 overflow-hidden font-bold text-right sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2"
    >
      {{ currency }}&nbsp;{{ processingFee }}
    </div>

    <div
      class="my-2 px-2 w-1/2 overflow-hidden font-bold sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 text-left"
    >
      <p>Shipping Fee</p>
    </div>
    <div
      class="my-2 px-2 w-1/2 overflow-hidden font-bold text-right sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2"
    >
      {{ currency }}&nbsp;{{ shippingFee }}
    </div>

    <div
      class="my-2 px-2 w-1/2 overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 text-left"
    >
      <p class="font-extrabold">TOTAL</p>
    </div>
    <div
      class="my-2 px-2 w-1/2 overflow-hidden text-right sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2 font-extrabold"
    >
      {{ currency }}&nbsp;{{ total }}
    </div>
  </div>
  <!-- </div> -->
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
export default {
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
};
</script>
