<template>
  <div class="w-full h-full text-sm">
    <div
      class="h-full w-full flex flex-row bg-white border-solid border-1 border-black"
      :class="customStyle"
    >
      <p class="h-full w-4/5 flex flex-row items-center justify-center pl-10">
        {{ selectedValue ? selectedValue : placeHolderText }}
      </p>
      <div
        class="w-1/4 flex flex-row items-center justify-center cursor-pointer"
        @click="toggleDropDown"
      >
        <img
          class="h-3 w-3 transform rotate-90"
          src="../../assets/vector.png"
          alt="Vector"
        />
      </div>
    </div>
    <!-- The dropdown items -->
    <div
      class="z-40 relative flex flex-col justify-around bg-white cursor-pointer divide-y-1 divide-gray-500 divide-solid shadow-2xl"
      :class="{ hidden: !isDrop }"
    >
      <p
        class="w-full h-10 flex flex-row items-center justify-center hover:bg-gray-200"
        v-for="(item, index) in dropOptions"
        :key="index"
        @click="onSelect(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

export default {
  props: {
    customStyle: {
      type: String,
    },
    placeHolderText: {
      type: String,
      required: true,
    },
    dropOptions: {
      type: Array,
      required: true,
    },
  },
  name: "DropDown",
  data() {
    return {
      isDrop: false,
      selectedValue: null,
    };
  },
  methods: {
    toggleDropDown() {
      this.isDrop = !this.isDrop;
    },
    onSelect(item) {
      this.isDrop = false;
      this.selectedValue = item;
      this.$emit("select", item);
    },
  },
};
</script>
<style scoped>
@import "@css/main.css";
</style>