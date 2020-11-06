<template>
  <div>
    <p :class="customStyleLabel" class="text-xs">{{ fieldLabel }}</p>
    <label>
      <input
          :class="[{
          'w-full rounded-md border-solid border-2 h-12 border-black bg-gray-200': true,
        }, customStyleInput]"
          :name="inputName"
          :placeholder="placeholder"
          :required="isRequired"
          :type="inputType"
          @input="handleInput"
          class="block px-4 border-solid border-1 border-black h-10 text-sm rounded-md"
      />
    </label>
    <p class="text-xs">{{ helpText }}</p>
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
      required: true,
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
      required: false
    },
    helpText: {
      type: String,
      required: false
    },
    customStyleInput: {
      type: String
    },
    customStyleLabel: {
      type: String
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('change', {
        inputName: this.inputName,
        inputText: e.target.value
      })

    }
  }
});
</script>
<style scoped>
.isSquared {
  @apply rounded-none;
}
</style>
