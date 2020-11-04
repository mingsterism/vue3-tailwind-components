import { App as Application } from "vue";
import Card from "./Card.molecule.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, Card);
  },
};

export default Plugin;

export { Card };
