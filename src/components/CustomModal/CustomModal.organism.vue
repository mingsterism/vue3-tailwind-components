<template>
  <!-- Modal is in Progress -->
  <div @click="modalStatus = true">
    <slot></slot>
  </div>
  <div>
    <div
      class="overflow-x-auto overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
      v-if="modalStatus"
    >
      <div :class="customStyle" class="relative my-6 mx-auto">
        <!--content-->
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div class="flex items-start justify-between p-5 rounded-t">
            <p class="text-3xl">{{ title }}</p>
            <!--header-->
            <button
              class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              @click="modalStatus = false"
            >
              <span
                class="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none"
              >
                ×
              </span>
            </button>
          </div>
          <!--body-->
          <div class="relative p-6 flex-auto">
            <slot name="body">This is the body slot</slot>
          </div>
          <!--action buttons-->
          <div class="flex items-center justify-end p-6 rounded-b">
            <slot name="actions"></slot>
            <CustomBtn :btnTxt="cancelBtnText" @click="modalStatus = false" />
            <CustomBtn :btnTxt="confirmBtnText" @click="modalStatus = false" />
          </div>
        </div>
      </div>
    </div>
    <div
      class="opacity-25 fixed inset-0 z-40 bg-black"
      v-if="modalStatus"
    ></div>
  </div>
</template>

<script>
/* eslint-disable */

import CustomBtn from "@/components/CustomBtn/CustomBtn.molecule.vue";

import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: "CustomModal",
  components: {
    CustomBtn,
  },
  data() {
    return {
      modalStatus: false,
    };
  },
  props: {
    title: {
      type: String,
    },
    confirmBtnText: {
      type: String,
      required: true,
    },
    cancelBtnText: {
      type: String,
      required: true,
    },
    customStyle: {
      type: String,
    },
  },
  methods: {
    // toggleModal() {
    // this.modalStatus = !this.modalStatus;
    // this.$emit("closeModal");
    // },
  },
});
</script>
<style scoped>
@import "@css/main.css";
</style>
