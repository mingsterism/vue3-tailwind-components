<template>
  <div class="contaioner">
    <div class="flex flex-wrap mx-2 overflow-hidden">
      <div
        v-for="item in size"
        class="cursor-pointer bg-blue text-white m-2 p-2 w-1/4 overflow-hidden"
        v-on:click="onSelectedSize(item.id)"
        :key="item.id"
        v-bind:class="{ activeRed: isActive == item.id }"
      >
        <p v-bind:class="{ paracolor: isActive == item.id }">
          {{ item.name }}
        </p>
        <p
          v-bind:class="{
            paracolor: isActive == item.id,
            'para-text-red-color': isSellActive,
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
export default {
  props: {},
  data() {
    return {
      heading: "SELECT SIZE",
      subheading: "view size chart",
      isActive: null,
      size: [
        { name: "US 4", price: 100, currencyType: "RM", id: 1001 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1002 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1003 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1004 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1005 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1006 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1007 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1008 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1009 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1010 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1011 },
        { name: "US 4", price: 100, currencyType: "RM", id: 1012 },
      ],
    };
  },
  methods: {
    onSelectedSize(id) {
      console.log(id, " selected");
    },
  },
};
</script>
