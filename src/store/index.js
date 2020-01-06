import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		name: 'Adeyinka Adefolurin'
	},
	mutations: {
	},
	getters: {
		getName (state) {
			return state.name
		}
	},
	actions: {
	},
	modules: {
	}
})
