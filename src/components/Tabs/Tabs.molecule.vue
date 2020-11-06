<template>
  <div :class="customStyle">
    <span :key="index" v-for="(key, index) in tabs">
      <span
          class="bg-gray-100 m-1 rounded hover:bg-gray-400"
          :class="{
          baseStyle: true,
          'text-blue font-bold': key.name == selectedTabName,
        }"
          @click="handleSelected(key.name)"
      >
        {{ key.name }}
        <span @click="handleDelete(index)" class="text-red-700 font-bold">> x </span>
      </span>
    </span>
    <span @click="$emit('addTab')" class="cursor-pointer font-bold text-green-500">+</span>
  </div>
  <slot></slot>
</template>

<script>
/* eslint-disable */
import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: "Tabs",
  data() {
    return {
      selectedTabName: "",
    };
  },
  props: {
    tabs: {
      type: Array,
      required: true,
    },
    customStyle: {
      type: String,
    },
  },
  methods: {
    handleSelected(tabName) {
      this.selectedTabName = tabName;
      console.log(this.selectedTabName);
      this.$emit("selected", tabName);
    },
    // handleDelete(index) {
    //   this.$emit("deleteTab", index);
    // },
  },
});
</script>

<style scoped>
@import "@css/main.css";

.baseStyle {
  @apply cursor-pointer p-2 text-lg;
}
</style>
