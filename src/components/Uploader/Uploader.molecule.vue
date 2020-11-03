<template>
  <div :style="bg" @click="chooseImage" class="base-image-input">
    <input
      @input="onSelectFile"
      class="file-input"
      ref="fileInput"
      type="file"
    />
  </div>
</template>

<script>
import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: "Uploader",
  props: {
    image: {
      type: String,
      default: "",
    },
  },
  computed: {
    bg() {
      return `background-image: url(${
        this.image || "https://via.placeholder.com/150"
      });`;
    },
  },

  methods: {
    chooseImage() {
      console.log("CHOOSE IMAGE");
      this.$refs.fileInput.click();
    },
    onSelectFile() {
      const input = this.$refs.fileInput;
      const files = input.files;
      if (files && files[0]) {
        const reader = new FileReader();

        reader.onload = (e) => {
          console.log(e.target, "--");
          this.$emit("input", e.target.result);
        };

        reader.readAsDataURL(files[0]);
      }
    },
  },
});
</script>

<style scoped>
@import "@css/main.css";

.base-image-input {
  display: block;
  width: 50%;
  height: 100%;
  cursor: pointer;
  background-size: cover;
  background-position: center center;
}

.placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: 1px solid #dee2e6;
}

.file-input {
  display: none;
}
</style>