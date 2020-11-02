import { App as Application } from "vue";
import Uploader from "./Uploader/molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Uploader);
  },
};

export default Plugin;

export { Uploader };
