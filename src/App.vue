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
  /><br />
  <hr />
  BillingForm <BillingForm total="250" currency="RM" /><br />
  <hr />
  SelectSize <SelectSize class="w-1/4" /><br />
  <hr />
  BuyBidSelect
  <BuyBidSelect
    class="w-1/4"
    highestBid="10000"
    lowestAsk="10000"
    size="10"
    currency="RM"
  /><br />
  <hr />
  SellAskSelect
  <SellAskSelect
    class="w-1/4"
    highestBid="10000"
    lowestAsk="10000"
    size="10"
    currency="RM"
  /><br />
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
  /><br />
  <hr />
  BackNextBtn
  <BackNextBtn class="w-1/4" />
  <ReviewPurchase
    class="w-1/4"
    product="YEEZY Boost 350 Zebra US 10"
    details='["New and Unworn","In Original Box","100% Verified Authentic"]'
    cardType="MasterCard"
    cardNum="1084"
    shippingDetails="Subang Jaya, Selangor"
    currency="RM"
    purchasePrice="250"
    processingFee="0"
    shippingFee="0"
    buyOrBid="BID"
  />
  <hr />
  ConfirmPage
  <ConfirmPage
    class="w-1/4"
    product="YEEZY Boost 350 Zebra US 10"
    questions='["My sneakers are 100% authentic and brand new","My sneakers are undamaged, complete set","I will ship within 2 working days","I agree to Limitd Terms and Conditions."]'
    cardType="CIMB"
    cardNum="1084"
    shippingDetails="Subang Jaya, Selangor"
    currency="RM"
    purchasePrice="250"
    processingFee="0"
    shippingFee="0"
    flowType="BID"
  />
  <hr />
  ReviewSale
  <ReviewSale
    class="w-1/4"
    product="YEEZY Boost 350 Zebra US 10"
    questions='["My sneakers are 100% authentic and brand new","My sneakers are undamaged, complete set","I will ship within 2 working days","I agree to Limitd Terms and Conditions."]'
    cardType="CIMB"
    cardNum="1084"
    shippingDetails="Subang Jaya, Selangor"
    currency="RM"
    purchasePrice="250"
    processingFee="0"
    shippingFee="0"
    sellOrAsk="ASK"
  />
  <hr />
  ConfirmPage
  <ConfirmPage
    class="w-1/4"
    product="YEEZY Boost 350 Zebra US 10"
    questions='["My sneakers are 100% authentic and brand new","My sneakers are undamaged, complete set","I will ship within 2 working days","I agree to Limitd Terms and Conditions."]'
    cardType="CIMB"
    cardNum="1084"
    shippingDetails="Subang Jaya, Selangor"
    currency="RM"
    purchasePrice="250"
    processingFee="0"
    shippingFee="0"
    flowType="ASK"
  />
</template>

<script>
// import TestWorld from "./components/testworld/TestWorld.vue";
// import HelloWorld from "./components/helloworld/HelloWorld.vue";
import ProductCard from "./components/ProductCard/ProductCard.vue";
import BillingForm from "./components/BillingForm/BillingForm.vue";
import SelectSize from "./components/SelectSize/SelectSize.vue";
import BuyBidSelect from "./components/BuyBidSelect/BuyBidSelect.vue";
import SellAskSelect from "./components/SellAskSelect/SellAskSelect.vue";
import ReviewPurchase from "./components/ReviewPurchase/ReviewPurchase.vue";
import ProductDetails from "./components/ProductDetails/ProductDetails.vue";
import ReviewSale from "./components/ReviewSale/ReviewSale.vue";
import ConfirmPage from "./components/ConfirmPage/ConfirmPage.vue";
import BackNextBtn from "./components/BackNextBtn/BackNextBtn.vue";

export default {
  name: "App",
  components: {
    // TestWorld,
    // HelloWorld,
    ProductCard,
    BillingForm,
    SelectSize,
    BuyBidSelect,
    SellAskSelect,
    ReviewPurchase,
    ProductDetails,
    ReviewSale,
    ConfirmPage,
    BackNextBtn
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
