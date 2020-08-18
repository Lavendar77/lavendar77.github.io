import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		tools: ['laravel', 'vuejs', 'git', 'vuetify', 'flutter', 'aws', 'vultr']
	},
	mutations: {},
	getters: {
		getTools: (state) => state.tools
	},
	actions: {}
}
