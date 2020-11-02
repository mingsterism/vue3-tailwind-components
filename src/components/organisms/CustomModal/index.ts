import { App as Application } from "vue";
import CustomModal from "./organisms/CustomModal.organism.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, CustomModal);
  },
};

export default Plugin;

export { CustomModal };
