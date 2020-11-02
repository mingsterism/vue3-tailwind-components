import { App as Application } from "vue";
import Partitions from "./Partitions.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Partitions);
  },
};

export default Plugin;

export { Partitions };
