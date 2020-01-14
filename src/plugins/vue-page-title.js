import Vue from 'vue'
import store from '../store'
import router from '../router'

import VuePageTitle from 'vue-page-title'

Vue.use(VuePageTitle, {
	suffix: ' — ' + store.state.name,
	router
})
