import Vuex from "vuex";
import Vue from "vue";
import adventureLogs from "./modules/adventureLogs";

Vue.use(Vuex);

export default new Vuex.Store({
	modules: {
		adventureLogs,
	},
});
