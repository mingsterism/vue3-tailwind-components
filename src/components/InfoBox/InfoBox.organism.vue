<template>
  <div class="flex flex-row bg-white-200 m-4 shadow-lg w-4/5">
    <!--    <Uploader></Uploader>-->
    <img :src="imageUri" alt="test" class="max-w-md h-64" type="image" />
    <!--    <input id="my_file" ref="inputButton" style="display: none;" type="file"/>-->

    <!--    <img :src="mainImageUri" alt="" class="w-full h-full max-w-xs"/>-->
    <div class="flex flex-col items-start justify-around w-full">
      <p class="text-4xl mt-5 ml-5">{{ title }}</p>
      <span class="flex flex-wrap">
        <span
          :key="index"
          class="mx-6 mt-4 max-w-xs"
          v-for="(value, index) in Object.keys(metadata)"
        >
          <Metadata
            :key="index"
            :primaryText="value"
            :secondaryText="metadata[value]"
            class="max-w-xs text-sm"
            v-if="metadata !== null"
          />
        </span>
      </span>
      <span class="flex self-end m-5">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
import Uploader from "@/components/Uploader/Uploader.molecule.vue";
import Metadata from "@/components/Metadata/Metadata.molecule.vue";

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: "InfoBox",
  components: {
    Metadata,
    Uploader,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    metadata: {
      type: [Object],
      required: false,
    },
    mainImageUri: {
      type: String,
      required: false,
      default: "/@/assets/default-placeholder-image.png",
    },
    imageUri: {
      type: String,
      required: false,
      default: "https://via.placeholder.com/150",
    },
  },
  data() {
    return {
      imageUrl: "",
    };
  },
  methods: {
    handleClick() {
      console.log("CLICKING");
    },
    handleUpload(event) {
      console.log("UPLOAD");
      this.$refs.inputButton.click();
      this.imageUrl = "https://via.placeholder.com/150";
    },
  },
});
</script>

<style scoped>
</style>
