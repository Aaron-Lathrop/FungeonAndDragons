// import axios from "axios";

const state = {
	adventureLogs: null,
};

const getters = {
	allAdventureLogs: (state) => state.adventureLogs,
};

const actions = {
	async fetchAdventureLogs({ commit }) {
		//const response = await axios.get("../hardcodedata/adventureLogs.json");
		const response = await require("../hardcodedata/adventureLogs.json");
		commit("setAdventureLogs", response);

		// const test = await axios.get(
		// 	"https://fungeonanddragons-e6e61.firebaseio.com"
		// );
		// console.log("testing");
		// console.log(test);
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
