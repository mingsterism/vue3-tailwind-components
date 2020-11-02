<template>
  <!-- <HelloWorld/><br>
  <TestWorld/><br> -->
  <hr />
  <p class="font-bold my-2 text-2xl">Product Card</p>
  <ProductCard
    prodName="Nike Air Force 1 Low Travis Scott"
    description="Condition:New|100% Authentic"
    askPrice="1000"
    bidPrice="900"
    currency="RM"
  />
  <hr />
  <p class="font-bold my-2 text-2xl">Select Size</p>
  <SelectSize class="w-full mx-auto" />
  <hr />
  <p class="font-bold my-2 text-2xl">CalculationTable</p>
  <!-- Rename this as well to refect -->
  <CalculationTable
    currency="RM"
    purchasePrice="250"
    processingFee="0"
    shippingFee="0"
    flowType="ASK"
  />

  <hr />

  <p class="font-bold my-2 text-2xl">Toggle Switch</p>
  <toggleSwitch BtnLeft="PLACE BID" BtnRight="BUY NOW" />
  <hr />
  <p class="font-bold my-2 text-2xl">BackNextBtn</p>
  <BackNextBtn />
  <hr />
  <p class="font-bold my-2 text-2xl">Product Details</p>

<!-- always use generic terms -->
<!-- describe the component. Describe the visuals of the component -->
  <Partitions
    headings='["BRAND","RELEASE DATE","RETAIL PRICE","COLOR WAY","SHOE STYLE","CONDITION","CURRENCY"]'
    info='["NIKE","2017-02-25","389","White/University Blue-White","CU6015&#8208;100","NEW","RM"]'
  />
  <hr />
  <!--  ADDING SOME MOLECULES AND ORGANIMS FROM ADMIN PANEL -->
  <div class="w-full p-8">
    <p class="my-2 font-bold text-2xl">Dynamic Table</p>
    <DynamicTable
      :headers="headers"
      :testData="bodyData"
      :numOfRows="5"
      :isScrollAble="true"
    >
    </DynamicTable>
    <hr />
    <p class="my-2 font-bold text-2xl">Input Box</p>
    <CustomInput
      inputType="text"
      inputName="name"
      placeholder="Placeholder Text"
    />
    <hr />
    <p class="my-4 font-bold text-2xl">Custom Button And Modal</p>
    <CustomModal
      confirmBtnText="Confirm"
      cancelBtnText="Cancel"
      customStyle="w-2/5"
    >
      <template v-slot>
        <CustomBtn btnTxt="Click me">
          <template v-slot:default></template>
        </CustomBtn>
      </template>
      <template v-slot:body>
        <div class="text-center px-6">
          <p>This is A Modal</p>
        </div>
      </template>
    </CustomModal>
    <hr />
    <p class="my-4 font-bold text-2xl">DropDown</p>
    <div class="w-1/4 mx-auto h-10 mb-4">
      <DropDown
        placeHolderText="Select Catagory"
        :dropOptions="['Option 0', 'Option 1']"
      />
    </div>
    <hr />
    <p class="my-4 font-bold text-2xl">Tabs</p>
    <Tabs
      :tabs="tabsData"
      @selected="handleSelect"
      customStyle="flex justify-around mt-10 w-2/3 mx-auto"
    >
    </Tabs>
    <hr />
    <p class="my-4 font-bold text-2xl">Uploader</p>
    <div class="w-1/3 mx-auto h-20 mb-4">
      <Uploader class="mx-auto" />
    </div>

    <hr />
    <p class="my-4 font-bold text-2xl">Info Box</p>
    <InfoBox :metadata="metadata" title="TestTitle" />
    <hr />
    <p class="font-bold text-2xl">Flyout Menu</p>
    <FlyoutMenu :submenus="subMenu" />
    <hr />
    <p class="font-bold text-2xl">Respoonsive Navbr</p>
    <NavBar class="mb-20" />
  </div>
    <h1>CardTitle</h1>
  <CardTitle
    heading="BUY/BID PRODUCT"
    sub-heading="Please choose your billing and shipping method"
  />
</template>

<script>
/* eslint-disable */
import ProductCard from "./components/ProductCard/ProductCard.vue";
import SelectSize from "./components/SelectSize/SelectSize.vue";
import Partitions from "./components/Partitions/Partitions.molecule.vue";
import BackNextBtn from "./components/BackNextBtn/BackNextBtn.vue";
import CalculationTable from "./components/CalculationTable/CalculationTable.vue";
import toggleSwitch from "./components/toggleSwitch/toggleSwitch.vue";
// Importing Molecules
import DynamicTable from "@/components/molecules/DynamicTable.molecule.vue";
import CustomInput from "@/components/molecules/CustomInput.molecule.vue";
import CustomBtn from "@/components/molecules/CustomBtn.molecule.vue";
import DropDown from "@/components/molecules/DropDown.molecule.vue";
import Tabs from "@/components/molecules/Tabs.molecule.vue";
import Uploader from "@/components/molecules/Uploader.molecule.vue";
import FlyoutMenu from "@/components/molecules/FlyoutMenu.molecule.vue";
import NavBar from "@/components/molecules/NavBar.molecule.vue";
// Importing Organisms
import CustomModal from "@/components/organisms/CustomModal.organism.vue";
import InfoBox from "@/components/organisms/InfoBox.organism.vue";

// Mock Data for Table
import tableData from "@/mockData/dynamic_table_data.json";
import headersData from "@/mockData/dynamic_table_header.json";

export default {
  name: "App",
  components: {
    ProductCard,
    SelectSize,
    Partitions,
    BackNextBtn,
    CalculationTable,
    toggleSwitch,
    // Molecules
    DynamicTable,
    CustomInput,
    CustomBtn,
    DropDown,
    Tabs,
    Uploader,
    FlyoutMenu,
    NavBar,
    // Organism
    CustomModal,
    InfoBox,
  },
  data() {
    return {
      headers: headersData,
      bodyData: tableData,
      tabsData: [
        { name: "TAB ONE" },
        { name: "TAB TWO" },
        { name: "TAB THREE" },
        { name: "TAB FOUR" },
      ],
      subMenu: [
        { name: "menu1", linkTo: "/merchant/1" },
        { name: "menu2", linkTo: "/merchant/1" },
      ],
      metadata: {
        name: "Luke",
        address: "10 rahim selamat",
        stars: "4/5",
        age: "Luke",
        height: "10 rahim selamat",
        tenants: "4/5",
        comments: "ABC",
        friends: "DEF",
        name: "A",
        B: "C",
        D: "E",
      },
    };
  },
  methods: {
    handleSelect(tabName) {
      this.selectedTab = tabName;
    },
  },
};
</script>

<style>
@import "@css/main.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
