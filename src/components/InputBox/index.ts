import { App as Application } from "vue";
import InputBox from "./InputBox.organism.vue";

import { registerComponent } from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, InputBox);
  },
};

export default Plugin;

export { InputBox };
