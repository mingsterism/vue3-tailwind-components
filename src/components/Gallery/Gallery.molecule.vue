<template>
  <div class="flex items-center">
    <p class="text-3xl m-2">Gallery</p>
    <input @change="$emit('addImage', $event)" type="file">
  </div>
  <div class="flex flex-wrap overflow-scroll overflow-x-hidden content-around justify-around w-4/5 h-2/5 m-4 shadow">
    <img
        :key="index"
        :src="image.url" @dblclick="$emit('deleteImage', {id:image.id})" alt="image.name"
        class="max-w-xl h-64"
        v-for="(image, index) in images">
  </div>
</template>

<script>
// import CustomBtn from '/@/components/CustomBtn/CustomBtn.molecule.vue'
import {
  defineComponent,
  
} from 'vue';


export default defineComponent({
  name: "Gallery",
  props: {
    uploadEndpoint: {
      type: String,
      default: false
    },
    images: {
      type: Array,
      required: true,
      default: [
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
        {altName: "test1", url: "/@/assets/avatar-placeholder.png"},
      ]
    }
  },
  components: {
    // CustomBtn
  },
  methods: {


  }
});
</script>

<style scoped>
</style>