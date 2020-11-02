import { App as Application } from "vue";
import BackNextBtn from "./molecules/BackNextBtn.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, BackNextBtn);
  },
};

export default Plugin;

export { BackNextBtn };
