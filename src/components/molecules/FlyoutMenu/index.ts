import { App as Application } from "vue";
import FlyoutMenu from "./FlyoutMenu.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, FlyoutMenu);
  },
};

export default Plugin;

export { FlyoutMenu };
