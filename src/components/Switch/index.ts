import { App as Application } from "vue";
import Switch from "./Switch.organism.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Switch);
  },
};

export default Plugin;

export { Switch };
