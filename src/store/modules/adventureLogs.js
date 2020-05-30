import axios from "axios";

const state = {
	adventureLogs: [],
};

const getters = {
	allAdventureLogs: (state) => state.adventureLogs,
};

const actions = {
	async fetchAdventureLogs({ commit }) {},
};

const mutations = {};

export default {
	state,
	getters,
	actions,
	mutations,
};
