<template>
  <div>
    <input
      :class="{
        'w-full border-solid border-2 h-12 border-black bg-gray-200': isSearchBox,
      }"
      :name="inputName"
      :placeholder="placeholder"
      :required="isRequired"
      :type="inputType"
      class="block w-full h-10 px-4 border-solid border-1 border-black text-sm"
    />
  </div>
</template>
<script>
import {
  defineComponent,
  
} from 'vue';

export default defineComponent({
  name: "CustomInput",
  props: {
    inputType: {
      type: String,
    },
    inputName: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    isRequired: {
      type: Boolean,
    },
    fieldLabel: {
      type: String,
    },
    helpText: {
      type: String,
    },
    inputValue: {
      type: String,
    },
    isSearchBox: {
      type: Boolean,
    },
  },
  // data() {
  //   return {
  //     inputValue: "",
  //   };
  // },
  // methods: {
  // handleInput(e) {
  // this.$emit("change", {
  // inputName: this.inputName,
  // inputText: e.target.value,
  // });
  // },
  // },
});
</script>
<style scoped>
@import "@css/main.css";
.isSquared {
  @apply rounded-none;
}
</style>