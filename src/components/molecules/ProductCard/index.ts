import { App as Application } from "vue";
import ProductCard from "./molecules/ProductCard.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, ProductCard);
  },
};

export default Plugin;

export { ProductCard };
