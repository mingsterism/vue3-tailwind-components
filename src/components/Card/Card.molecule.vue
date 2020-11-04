<template>

  <div class="max-w-sm overflow-hidden bg-limitdLightGray">
  <img class="pb-16 px-4 w-full bg-limitdGray" :src="require('@/assets/' + imgLink + '')" alt="Sunset in the mountains">
  <div class="p-10">
    <div class="font-sans text-lg mb-2">{{ primaryText }}</div>
    <!-- <p class="text-gray-700 text-base">
      {{ description }}
    </p> -->
    <div class="text-3xl font-sans font-bold">{{ secondaryText }}</div>
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
import { Card } from '.';

export default defineComponent({
  name: "Card",
  props: {
    primaryText: {
      type: String,
    },
    secondaryText: {
      type: String,
    },
    imgLink:{
      type: String
    }
  }
});
</script>
