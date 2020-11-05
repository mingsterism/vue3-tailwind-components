import { App as Application } from "vue";
import Gallery from "./Gallery.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Gallery);
  },
};

export default Plugin;

export { Gallery };
