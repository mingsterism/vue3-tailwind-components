import { App as Application } from "vue";
import BackNextBtn from "./BackNextBtn.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, BackNextBtn);
  },
};

export default Plugin;

export { BackNextBtn };
