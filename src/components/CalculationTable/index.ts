import { App as Application } from "vue";
import CalculationTable from "./CalculationTable.molecule.vue";

import {registerComponent} from "../../utils/plugins/index";

const Plugin = {
  install(vue: Application) {
    registerComponent(vue, CalculationTable);
  },
};

export default Plugin;

export { CalculationTable };
