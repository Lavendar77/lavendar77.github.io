import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		tools: [
			{
				name: 'laravel',
				color: '#FF3326'
			},
			{
				name: 'vuejs',
				color: '#41B883'
			},
			{
				name: 'git',
				color: '#E84D31'
			},
			{
				name: 'vuetify',
				color: '#1764BA'
			},
			{
				name: 'flutter',
				color: '#51BFF0'
			},
			{
				name: 'aws',
				color: '#EF931E'
			},
			{
				name: 'vultr',
				color: '#0078F4'
			},
			{
				name: 'cPanel',
				color: '#E55E26'
			}
		]
	},
	mutations: {},
	getters: {
		getTools: (state) => state.tools
	},
	actions: {}
}
