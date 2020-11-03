import { App as Application } from "vue";
import DropDown from "./molecules/DropDown.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, DropDown);
  },
};

export default Plugin;

export { DropDown };
