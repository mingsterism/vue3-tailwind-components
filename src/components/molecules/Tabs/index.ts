import { App as Application } from "vue";
import Tabs from "./molecules/Tabs/molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Tabs);
  },
};

export default Plugin;

export { Tabs };
