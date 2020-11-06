<template>
  <div class="h-full w-full">
    <input
        :class="customStyle"
        :placeholder="placeHolderz"
        :type="inputType"
        @input="handleChange"
        class="rounded-md p-2 w-full border-solid border-2 border-black bg-gray-200"
    />
    <!-- <img src="./src/assets/Search2.png" alt="" /> -->
    <div>{{ inputProp }}</div>
  </div>
</template>

<script>
import {
  defineComponent,
  
} from 'vue';


export default defineComponent({
  name: "customInput",
  props: {
    inputData: {
      type: String,
      required: true,
    },
    placeHolderz: {
      type: String,
    },
    inputType: {
      type: String,
      required: true,
    },
    customStyle: {
      type: String,
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value)
    }
  }
});
</script>

<style scoped>
</style>