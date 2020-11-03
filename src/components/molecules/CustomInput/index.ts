import { App as Application } from "vue";
import CustomInput from "./molecules/CustomInput.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, CustomInput);
  },
};

export default Plugin;

export { CustomInput };
