//import axios from "axios";

const state = {
	adventureLogs: [],
};

const getters = {
	allAdventureLogs: (state) => state.adventureLogs,
};

const actions = {
	async fetchAdventureLogs({ commit }) {
		// const response = await axios.get(
		//     "https://jsonplaceholder.typicode.com/todo"
		// )
		const response = await require("../hardcodedata/adventureLogs.json");
		commit("setAdventureLogs", response);
	},
};

const mutations = {
	setAdventureLogs: (state, adventureLogs) =>
		(state.adventureLogs = adventureLogs),
};

export default {
	state,
	getters,
	actions,
	mutations,
};
