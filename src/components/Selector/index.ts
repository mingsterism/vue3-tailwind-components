import { App as Application } from "vue";
import Selector from "./Selector.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Selector);
  },
};

export default Plugin;

export { Selector };
