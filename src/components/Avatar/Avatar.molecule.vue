<template>
  <div class="h-full flex justify-center items-center">
    <span class="text-sm mr-2">{{ textVal }}</span>
    <img
        alt="avatar"
        class="rounded-full w-1/3"
        :src="imgSrc"
    />
  </div>

</template>

<script>
import {
  defineComponent,
  
} from 'vue';

export default defineComponent({
  name: "Avatar",
  props: {
    imgSrc: {
      type: String,
      required: false,
      default: "../../assets/yeezy_boost.jpg"
    },
    textVal: {
      type: String,
      required: false
    },
    avatarThumb: {
      type: String,
      required: false,
      default: "/@/assets/avatar-placeholder.png"
    }
  }
})
</script>

<style scoped>

</style>