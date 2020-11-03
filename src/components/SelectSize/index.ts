import { App as Application } from "vue";
import SelectSize from "./SelectSize.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, SelectSize);
  },
};

export default Plugin;

export { SelectSize };
