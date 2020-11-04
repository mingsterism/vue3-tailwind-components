<template>
  <div class="w-auto overflow-x-auto">
    <table class="table-auto text-sm" :class="{ 'w-screen': isScrollAble }">
      <thead>
        <tr :class="[isBgGray ? 'bgGray' : isBgWhite ? 'bgWhite' : 'default']">
          <th
            v-for="(item, index) in headers"
            :key="index"
            :class="{ [item.headerStyle]: true, 'pt-6': isBgGray }"
            class="py-2"
          >
            {{ item.header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          class="hover:bg-gray-300 cursor-pointer"
          :class="[isBgWhite ? 'bg-white' : 'bg-gray-200']"
          v-for="(row, index) in testData.slice(startRange, endRange)"
          :key="index"
        >
          <td
            v-for="(header, index2) in headers"
            :key="index2"
            :class="{ [header.bodyStyle]: true, border: !isBgWhite }"
          >
            <span v-if="header.showField">
              {{ header.field.reduce((a, field) => a[field], row) }}
            </span>

            <slot
              :rowId="row.id"
              :computedData="header.field.reduce((a, field) => a[field], row)"
              :name="header.slotName"
            >
            </slot>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- </div> -->
  <!-- Pagination -->
  <div class="w-1/5 mx-auto flex flex-row justify-around mt-6 items-center">
    <p
      @click="previousPage"
      class="cursor-pointer text-xl transition ease-in-out transform hover:scale-110"
    >
      &#8810;
    </p>
    <p
      class="w-8 text-center rounded-md h-full may-auto cursor-pointer hover:bg-gray-300"
      v-for="(num, index) in pageNumArray"
      :key="index"
      @click="selectPage(num)"
      :class="[num === currentPageNum ? 'text-blue-700' : null]"
    >
      {{ num }}
    </p>
    <p @click="nextPage" class="cursor-pointer text-xl">&#8811;</p>
  </div>
</template>
<script>
/* eslint-disable */
import {
  defineComponent,
  
} from 'vue';

export default defineComponent({
  name: "DynamicTable",
  props: {
    headers: {
      type: Array,
      required: true,
      field: {
        type: Array,
        required: false,
        default: function () {
          return [];
        },
      },
    },
    testData: {
      type: Array,
      required: true,
    },
    numOfRows: {
      type: Number,
      required: true,
    },
    isScrollAble: {
      type: Boolean,
    },
    isBgWhite: {
      type: Boolean,
    },
    isBgGray: {
      type: Boolean,
    },
  },
  data() {
    return {
      startRange: 0,
      endRange: this.numOfRows,
      currentPageNum: 1,
      totalNumOfPages: Math.ceil(this.testData.length / this.numOfRows),
      number: null,
      text: null,
    };
  },
  mounted() {},
  computed: {
    pageNumArray() {
      if (this.totalNumOfPages > 4) {
        console.log("testnc");
        if (
          this.currentPageNum >= 3 &&
          this.currentPageNum < this.totalNumOfPages
        )
          return [
            this.currentPageNum - 2,
            this.currentPageNum - 1,
            this.currentPageNum,
            this.currentPageNum + 1,
          ];
        else if (this.currentPageNum == 2 || this.currentPageNum == 1)
          return [1, 2, 3, 4];
        else
          return [
            this.currentPageNum - 3,
            this.currentPageNum - 2,
            this.currentPageNum - 1,
            this.currentPageNum,
          ];
      } else {
        console.log("nice");
        var result = [...Array(this.totalNumOfPages).keys()];
        return result.map((e) => e + 1);
      }
    },
  },
  methods: {
    nextPage() {
      if (this.currentPageNum * this.numOfRows < this.testData.length) {
        this.startRange += this.numOfRows;
        this.endRange += this.numOfRows;
        this.currentPageNum = Math.ceil(this.endRange / this.numOfRows);
      }
    },
    previousPage() {
      if (this.startRange > 0) {
        this.startRange -= this.numOfRows;
        this.endRange -= this.numOfRows;
        this.currentPageNum = Math.ceil(this.endRange / this.numOfRows);
      }
    },
    selectPage(page) {
      if (page > this.currentPageNum) {
        var difference = page - this.currentPageNum;
        this.startRange += difference * this.numOfRows;
        this.endRange += difference * this.numOfRows;
        this.currentPageNum = page;
      } else if (page < this.currentPageNum) {
        var difference = this.currentPageNum - page;
        this.startRange -= this.numOfRows * difference;
        this.endRange -= this.numOfRows * difference;
        this.currentPageNum = page;
      }
    },
  },
});
</script>
<style scoped>
@import "@css/main.css";
.default {
  @apply bg-gray-800 text-white font-bold;
}
.bgGray {
  @apply bg-gray-200 text-black;
}
.bgWhite {
  @apply bg-white text-black;
}
</style>