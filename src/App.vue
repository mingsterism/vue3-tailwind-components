<template>
  <!-- <HelloWorld/><br>
  <TestWorld/><br> -->
  <hr/>
  <p class="font-bold my-2 text-2xl">Card</p>
  <Card
      imgLink="https://storage.googleapis.com/lele-bucket-staging/uploads/images/menus/item/288/288_thumb.jpg?v=63771616629"
      primaryText="Nike Air Force 1 Low Travis Scott"
      secondaryText="RM 1000"
  />
  <hr/>
  <p class="font-bold my-2 text-2xl">Select Size</p>
  <Selector
      :size="[{name: 'US 4', price: 100, currencyType: 'RM', id: 1013},{name: 'US 4', price: 100, currencyType: 'RM', id: 1014},{name: 'US 4', price: 100, currencyType: 'RM', id: 1015},{name: 'US 4', price: 100, currencyType: 'RM', id: 1016},{name: 'US 4', price: 100, currencyType: 'RM', id: 1001},{name: 'US 4', price: 100, currencyType: 'RM', id: 1002},{name: 'US 4', price: 100, currencyType: 'RM', id: 1003},{name: 'US 4', price: 100, currencyType: 'RM', id: 1004},{name: 'US 4', price: 100, currencyType: 'RM', id: 1005},{name: 'US 4', price: 100, currencyType: 'RM', id: 1006},{name: 'US 4', price: 100, currencyType: 'RM', id: 1007},{name: 'US 4', price: 100, currencyType: 'RM', id: 1008},{name: 'US 4', price: 100, currencyType: 'RM', id: 1009},{name: 'US 4', price: 100, currencyType: 'RM', id: 1010},{name: 'US 4', price: 100, currencyType: 'RM', id: 1011},{name: 'US 4', price: 100, currencyType: 'RM', id: 1012}]"
      @sizeSelect="handleSelector"
      class="w-full mx-auto"
      customStyle="text-red"
  />
  <hr/>
  <p class="font-bold my-2 text-2xl">CalculationTable</p>
  <!-- Rename this as well to refect -->
  <CalculationTable
      :data="[{name:'Your Purchase Price', price: 2252},{name:'Processing Fee (3%) (0%)', price: 0},{name:'Shipping Fee', price: 0}]"
      :processingFee=0
      :purchasePrice=250
      :shippingFee=0
      currency="RM"
      flowType="ASK"
  />

  <hr/>

  <p class="font-bold my-2 text-2xl">Toggle Switch</p>
  <toggleSwitch
      @onBtnLeft="handleBtnLeft"
      @onBtnRight="handleBtnRight"
      BtnLeft="PLACE BID"
      BtnRight="BUY NOW"
  />
  <hr/>
  <p class="font-bold my-2 text-2xl">TwinButtons</p>
  <TwinButtons
      @backBtn="handleBack"
      @nextBtn="handleNext"

  />
  <hr/>
  <p class="font-bold my-2 text-2xl">Partitions</p>

  <!-- always use generic terms -->
  <!-- describe the component. Describe the visuals of the component -->
  <!-- make data object -->
  <Partitions :partitionsdata="partitionsData"/>
  <hr/>
  <!--  ADDING SOME MOLECULES AND ORGANIMS FROM ADMIN PANEL -->
  <div class="w-full p-8">
    <p class="my-2 font-bold text-2xl">Dynamic Table</p>
    <DynamicTable
        :headers="headers"
        :isScrollAble="true"
        :numOfRows="5"
        :testData="bodyData"
    >
    </DynamicTable>
    <hr/>
    <p class="my-2 font-bold text-2xl">Input Box</p>
    <CustomInput
        inputName="name"
        inputType="text"
        placeholder="Placeholder Text"
    />
    <hr/>
    <p class="my-4 font-bold text-2xl">Custom Button And Modal</p>
<!--    <CustomModal-->
<!--        cancelBtnText="Cancel"-->
<!--        confirmBtnText="Confirm"-->
<!--        customStyle="w-2/5"-->
<!--    >-->
<!--      <template v-slot>-->
<!--        <CustomBtn btnTxt="Click me">-->
<!--          <template v-slot:default></template>-->
<!--        </CustomBtn>-->
<!--      </template>-->
<!--      <template v-slot:body>-->
<!--        <div class="text-center px-6">-->
<!--          <p>This is A Modal</p>-->
<!--        </div>-->
<!--      </template>-->
<!--    </CustomModal>-->
    <hr/>
    <p class="my-4 font-bold text-2xl">DropDown</p>
    <div class="w-1/4 mx-auto h-10 mb-4">
      <DropDown
          :dropOptions="['Option 0', 'Option 1']"
          placeHolderText="Select Catagory"
      />
    </div>
    <hr/>
    <p class="my-4 font-bold text-2xl">Tabs</p>
    <Tabs
        :tabs="tabsData"
        @selected="handleSelect"
        customStyle="flex justify-around mt-10 w-2/3 mx-auto"
    >
    </Tabs>
    <hr/>
    <p class="my-4 font-bold text-2xl">Uploader</p>
    <div class="w-1/3 mx-auto h-20 mb-4">
    <Uploader class="mx-auto"/>
    </div>

    <hr/>
    <p class="my-4 font-bold text-2xl">Info Box</p>
    <InfoBox :metadata="metadata" title="TestTitle"/>
    <hr/>
    <p class="font-bold text-2xl">Flyout Menu</p>
    <FlyoutMenu :submenus="subMenu"/>
    <hr/>
    <p class="font-bold text-2xl">Responsive Navbr</p>
    <NavBar 
      class="mb-20" 
      navBarTitle="Flowtrail UI"
      :navBarElement="navbarelement"
      :navBarAdditionElement="navbaradditionelement"
    />
  </div>
  <h1>CardTitle</h1>
  <CardTitle
      heading="BUY/BID PRODUCT"
      sub-heading="Please choose your billing and shipping method"
  />
  <hr>
  <h1>Avatar</h1>
  <Avatar imgSrc="../src/assets/Nike-Dunk-High-Michigan.png"/>
  <hr>
  <h1>Gallery</h1>
  <Gallery/>

  <hr>
  <!-- <h1> LoadingIndicator </h1>
  <LoadingIndicator />
  <hr> -->
  <h1>Switch</h1>
  <Switch/>
</template>

<script>
/* eslint-disable */
import Card from "./components/Card/Card.molecule.vue";
import Selector from "./components/Selector/Selector.molecule.vue";
import Partitions from "./components/Partitions/Partitions.molecule.vue";
import TwinButtons from "./components/TwinButtons/TwinButtons.molecule.vue";
import CalculationTable from "./components/CalculationTable/CalculationTable.molecule.vue";
import toggleSwitch from "./components/ToggleSwitch/ToggleSwitch.molecule.vue";
import CardTitle from "./components/CardTitle/CardTitle.molecule.vue";

// Importing Molecules
import DynamicTable from "./components/DynamicTable/DynamicTable.molecule.vue";
import CustomInput from "./components/CustomInput/CustomInput.molecule.vue";
import CustomBtn from "./components/CustomBtn/CustomBtn.molecule.vue";
import DropDown from "./components/DropDown/DropDown.molecule.vue";
import Tabs from "./components/Tabs/Tabs.molecule.vue";
import Uploader from "./components/Uploader/Uploader.molecule.vue";
import FlyoutMenu from "./components/FlyoutMenu/FlyoutMenu.molecule.vue";
import NavBar from "./components/NavBar/NavBar.molecule.vue";
import Avatar from "./components/Avatar/Avatar.molecule.vue";
import Gallery from "./components/Gallery/Gallery.molecule.vue";
import LoadingIndicator from "./components/LoadingIndicator/LoadingIndicator.molecule.vue";
import Switch from "./components/Switch/Switch.molecule.vue";


// Importing Organisms
import CustomModal from "./components/CustomModal/CustomModal.organism.vue";
import InfoBox from "./components/InfoBox/InfoBox.organism.vue";
import PhotoCard from "./components/PhotoCard/PhotoCard.vue"
// Mock Data for Table
import tableData from "./mockData/dynamic_table_data.json";
import headersData from "./mockData/dynamic_table_header.json";



export default {
  name: "App",
  components: {
    Card,
    Selector,
    Partitions,
    TwinButtons,
    CalculationTable,
    toggleSwitch,
    CardTitle,
    // Molecules
    DynamicTable,
    CustomInput,
    CustomBtn,
    DropDown,
    Tabs,
    Uploader,
    FlyoutMenu,
    NavBar,
    Avatar,
    Gallery,
    LoadingIndicator,
    Switch,
    // Organism
    CustomModal,
    InfoBox,
    PhotoCard
  },
  data() {
    return {
      headers: headersData,
      partitionsData: [
        {
          heading: "BRAND",
          info:"NIKE",
        },
        {
          heading: "RELEASE DATE",
          info:"2017-02-25",
        },
        {
          heading: "RETAIL PRICE",
          info:"389",
        },
        {
          heading: "COLOR WAY",
          info:"White/University Blue-White",
        },
        {
          heading: "SHOE STYLE",
          info:"CU6015&#8208;100",
        },
        {
          heading: "CONDITION",
          info:"NEW",
        },
        {
          heading: "CURRENCY",
          info:"RM",
        },
      ],
      bodyData: tableData,
      tabsData: [
        {name: "TAB ONE"},
        {name: "TAB TWO"},
        {name: "TAB THREE"},
        {name: "TAB FOUR"},
      ],
      subMenu: [
        {name: "menu1", linkTo: "/merchant/1"},
        {name: "menu2", linkTo: "/merchant/1"},
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
      navbarelement: [ 
        {
          name: "Blog",
          href:"#"
        },
        {
          name: "Portfolio",
          href:"#"
        },
        {
          name: "About",
          href:"#"
        },
        {
          name: "Contact",
          href:"#"
        }
      ],
      navbaradditionelement: [ 
        {
          name: "Appearance",
          infor:"Easy customization",
          href:"#"

        },
        {
          name: "Comments",
          infor:"Check your latest comments",
          href:"#"
        },
        {
          name: "Analytics",
          infor:"Take a look at your statistics",
          href:"#"
        }
      ],
    };
  },
  methods: {
    handleSelect(tabName) {
      this.selectedTab = tabName;
    },
    handleNext() {
      console.log('NEXT pressed')
    },
    handleBack() {
      console.log('BACK pressed')
    },
    handleSelector(id) {
      console.log(id, 'size selected')
    },
    handleBtnRight() {
      console.log('Right btn')
    },
    handleBtnLeft() {
      console.log('Left btn')

    }
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
