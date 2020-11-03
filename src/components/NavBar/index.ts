import { App as Application } from "vue";
import NavBar from "./NavBar.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, NavBar);
  },
};

export default Plugin;

export { NavBar };
