import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// Control HTML pages meta title
import VuePageTitle from 'vue-page-title' 
Vue.use(VuePageTitle, {
	suffix: ' — ' + store.getters.getName,
	router
})

// Font-Awesome
Vue.component('v-icon', require('vue-awesome'))

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
