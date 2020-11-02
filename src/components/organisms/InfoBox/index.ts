import { App as Application } from "vue";
import InfoBox from "./InfoBox/organism.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, InfoBox);
  },
};

export default Plugin;

export { InfoBox };
