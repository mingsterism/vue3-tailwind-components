import { App as Application } from "vue";
import MerchantGallery from "./MerchantGallery.organism.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, MerchantGallery);
  },
};

export default Plugin;

export { MerchantGallery };
