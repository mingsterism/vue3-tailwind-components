<template>
  <!-- <HelloWorld/><br>
  <TestWorld/><br> -->
  <hr />
  ProductCard
  <ProductCard
    prodName="Nike Air Force 1 Low Travis Scott"
    description="Condition:New|100% Authentic"
    askPrice="1000"
    bidPrice="900"
    currency="RM"
  />
  <hr />
  SelectSize <SelectSize />
  <hr />
  totalPrice
  <totalPrice
    currency="RM"
    purchasePrice="250"
    processingFee="0"
    shippingFee="0"
    flowType="ASK"
  />

  <hr />
  toggleSwitch
  <toggleSwitch BtnLeft="PLACE BID" BtnRight="BUY NOW" />
  <hr />
  BackNextBtn
  <BackNextBtn />
  <hr />
  ProductDetails
  <ProductDetails
    brand="Nike"
    releaseDate="2017-02-25"
    retailPrice="389"
    colorway="White/University Blue-White"
    shoeStyle="CU6015&#8208;100"
    condition="NEW"
    currency="RM"
  />
  <hr />
  CardTitle
  <CardTitle
    heading="BUY/BID PRODUCT"
    sub-heading="Please choose your billing and shipping method"
  />
</template>

<script>
import ProductCard from "./components/ProductCard/ProductCard.vue";
import SelectSize from "./components/SelectSize/SelectSize.vue";
import ProductDetails from "./components/ProductDetails/ProductDetails.vue";
import BackNextBtn from "./components/BackNextBtn/BackNextBtn.vue";
import totalPrice from "./components/totalPrice/totalPrice.vue";
import toggleSwitch from "./components/toggleSwitch/toggleSwitch.vue";
import CardTitle from "./components/CardTitle/CardTitle.vue";

export default {
  name: "App",
  components: {
    ProductCard,
    SelectSize,
    ProductDetails,
    BackNextBtn,
    totalPrice,
    toggleSwitch,
    CardTitle
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
