import { App as Application } from "vue";
import CustomBtn from "./CustomBtn.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, CustomBtn);
  },
};

export default Plugin;

export { CustomBtn };
