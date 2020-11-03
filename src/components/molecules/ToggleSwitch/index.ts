import { App as Application } from "vue";
import toggleSwitch from "./molecules/ToggleSwitch.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, toggleSwitch);
  },
};

export default Plugin;

export { toggleSwitch };
