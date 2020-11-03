import { App as Application } from "vue";
import Metadata from "./Metadata.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Metadata);
  },
};

export default Plugin;

export { Metadata };
