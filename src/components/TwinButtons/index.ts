import {App as Application} from "vue";
import TwinButtons from "./TwinButtons.molecule.vue";

import {registerComponent} from "../../utils/plugins/index";


const Plugin = {
    install(vue: Application) {
        registerComponent(vue, TwinButtons);
    },
};

export default Plugin;

export {TwinButtons};
