import Vue from 'vue'
import Vuex from 'vuex'
import projects from './projects'
import tools from './tools'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		name: 'Adeyinka Adefolurin',
		phone: '2348135303377',
		email: 'folurinyinka@gmail.com',
		linkedin: '',
		twitter: 'https://twitter.com/_fykay',
		github: 'https://github.com/lavendar77',
		skype: 'https://join.skype.com/invite/kYlvM0lNPBwf'
	},
	mutations: {
	},
	getters: {},
	actions: {
	},
	modules: {
		'projects': projects,
		'tools': tools,
	}
})
