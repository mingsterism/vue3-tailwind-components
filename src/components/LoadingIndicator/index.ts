import { App as Application } from "vue";
import LoadingIndicator from "./LoadingIndicator.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, LoadingIndicator);
  },
};

export default Plugin;

export { LoadingIndicator };
