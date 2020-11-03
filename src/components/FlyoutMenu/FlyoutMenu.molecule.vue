<template>
  <div class="antialiased font-sans mb-16" id="app">
    <div @click="isVisible = false" class="fixed inset-0"></div>
    <div
      @keydown.enter="isVisible = !isVisible"
      @mouseleave="isVisible = false"
      @mouseover="isVisible = true"
      class="relative inline-block"
    >
      <button
        class="inline-flex items-center justify-between px-2 py-1 font-medium text-gray-700 transition-all duration-500 rounded-md focus:outline-none focus:text-brand-900 sm:focus:shadow-outline"
        type="button"
      >
        <span class="flex-shrink-0">Menu</span>
        <svg
          class="flex-shrink-0 w-5 h-5 ml-1"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            :class="{ 'rotate-180': isVisible }"
            class="transition duration-300 ease-in-out origin-center transform"
            clip-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            fill-rule="evenodd"
          ></path>
        </svg>
      </button>
      <transition
        enter-active-class="transition duration-300 ease-out transform"
        enter-class="-translate-y-3 scale-95 opacity-0"
        enter-to-class="translate-y-0 scale-100 opacity-100"
        leave-active-class="transition duration-150 ease-in transform"
        leave-class="translate-y-0 opacity-100"
        leave-to-class="-translate-y-3 opacity-0"
      >
        <div class="absolute pt-2" v-show="isVisible">
          <div
            class="relative py-1 bg-white border border-gray-200 rounded-md shadow-xl"
          >
            <div
              class="absolute top-0 w-4 h-4 origin-center transform rotate-45 translate-x-5 -translate-y-2 bg-white border-t border-l border-gray-200 rounded-sm pointer-events-none"
            ></div>
            <div class="relative">
              <template :key="index" v-for="(value, index) in submenus">
                <router-link
                  :to="value.linkTo"
                  class="block w-full px-4 py-2 font-medium text-gray-700 whitespace-no-wrap hover:bg-gray-100 focus:outline-none hover:text-gray-900 focus:text-gray-900 focus:shadow-outline transition duration-300 ease-in-out cursor-pointer"
                  href="#"
                >
                  {{ value.name }}
                </router-link>
              </template>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import {
  defineComponent,
  ref
} from 'vue';

export default defineComponent({
  name: "FlyoutMenu",
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    submenus: {
      type: Array,
    },
  },
});
</script>

<style scoped>
@import "@css/main.css";
</style>