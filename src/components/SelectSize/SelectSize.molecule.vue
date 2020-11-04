<template>
  <div class="container">
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div
          :key="item.id"
          :class="customStyle"
          class="cursor-pointer hover:bg-blueHover flex-none bg-blue hover:bg-hoverBlue text-white m-2 p-2 w-1/5 overflow-hidden"
          v-bind:class="{ activeRed: isActive == item.id }"
          v-for="item in sizeArray"
          v-on:click="onSelectedSize(item.id)"
      >
        <p v-bind:class="{ paracolor: isActive == item.id }">
          {{ item.name }}
        </p>
        <p
            v-bind:class="{
            paracolor: isActive == item.id,
          }"
        >
          {{ item.currencyType }} {{ item.price }}
        </p>
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

export default defineComponent({
  name: "SelectSize",
  props: {
    size:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      isActive: null,
    };
  },
  methods: {
    onSelectedSize(id) {
      console.log(id, "selected");
    },
  },
  computed:{
    sizeArray: function(){
      return this.size
    },
    customStyle: {
      type: String,
    },
  }
});
</script>
