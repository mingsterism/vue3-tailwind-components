<template>
  <div class="flex flex-wrap">
    <!-- <div class="flex flex-wrap"> -->
      <div
          :key="item.id"
          class="default"
          :class="clicked == item.id?'default clicked':'default unclicked'"
          v-for="item in sizeArray"
          v-on:click="onSelectedSize(item.id)"
      >
        <p class="flex-row font-extrabold">
          {{ item.name }}
        </p>
        <p class="flex-row">
          {{ item.currencyType }} {{ item.price }}
        </p>
      </div>
    <!-- </div> -->
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
  name: "Selector",
  props: {
    size:{
      type: Array,
      required: true
    }
  },
  data() {
    return {
      clicked: null,
      baseStyles: {
        fontWeight:'800',
        color: 'red'
      },
      overrideStyles: {
        color:'blue'
      },
      customStyle: {
      type: String,
    },
    };
  },
  methods: {
    onSelectedSize(id) {
      console.log(id, "selected");
      this.clicked = id
      this.$emit("sizeSelect", id);

    },
  },
  computed:{
    sizeArray: function(){
      let sizeArr = this.size
      this.clicked = sizeArr[0].id
      return sizeArr
    }
  }
});
</script>
<style scoped>
.clicked{
  @apply cursor-pointer m-2 p-2 w-auto bg-blue text-white border-2;
}
.unclicked{
  @apply cursor-pointer border-2 box-border border-gray-700 flex-none m-2 p-2 w-auto;
}
.default{
  @apply flex-auto cursor-pointer box-border border-gray-700 m-2 p-2 w-1/5 justify-between;
}
</style>
