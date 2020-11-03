import { App as Application } from "vue";
import DynamicTable from "./molecules/DynamicTable.zmolecule.vue";

import { registerComponent } from "../../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, DynamicTable);
  },
};

export default Plugin;

export { DynamicTable };
