<template>
  <div class="flex flex-wrap">
    <div v-for="index in headingsArray.length-1" :key="index" class="xs:w-1/3 lg:w-1/6 border-r-2 border-gray-200 h-12 my-6">
      <p class="text-gray-500 text-base font-bold font-sans">{{ headingsArray[index] }}</p>
      <p class="font-sans text-xl">{{ infoArray[index] }}</p>
    </div>
    <!-- <div class="w-1/6 border-r-2 border-gray-200 h-12 my-6">
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
    </div> -->
  </div>
</template>
<style scoped>
@import "@css/main.css";
</style>
<script>
import {
  defineComponent,
  
} from 'vue';

export default defineComponent({
  name: "Partitions",
  props: {
    headings: {
      type: Array,
    },
    info: {
      type: Array,
    }
  },
  computed:{
    headingsArray: function(){
      return this.headings
    },
    infoArray: function(){
      return this.info
    }
  }
});
</script>
