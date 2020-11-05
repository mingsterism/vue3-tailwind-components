import { App as Application } from "vue";
import Avatar from "./Avatar.molecule.vue";

import {registerComponent} from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Avatar);
  },
};

export default Plugin;

export { Avatar };
