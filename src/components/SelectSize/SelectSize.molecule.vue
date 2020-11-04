<template>
  <div class="container">
    <div class="flex flex-wrap -mx-2 overflow-hidden">
      <div
          :key="item.id"
          class="cursor-pointer box-border border-gray-700 flex-none m-2 p-2 w-1/5 overflow-hidden"
          :class="clicked == item.id?'customStyle cursor-pointer m-2 p-2 w-1/5 overflow-hidden bg-blue text-white border-2':'cursor-pointer border-2 box-border border-gray-700 flex-none m-2 p-2 w-1/5 overflow-hidden'"
          v-for="item in sizeArray"
          v-on:click="onSelectedSize(item.id)"
      >
        <p class="font-extrabold">
          {{ item.name }}
        </p>
        <p>
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
