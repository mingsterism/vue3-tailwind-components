import { App as Application } from "vue";
import toggleSwitch from "./ToggleSwitch.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, toggleSwitch);
  },
};

export default Plugin;

export { toggleSwitch };