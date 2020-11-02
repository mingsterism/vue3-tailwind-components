import { App as Application } from "vue";
import CardTitle from "./molecules/CardTitle.molecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, CardTitle);
  },
};

export default Plugin;

export { CardTitle };
