import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		projects: [
			{
				name: 'ACOMART',
				subtitle: 'The Africa Content Marketplace',
				content: 
					`ACOMART is a platform dedicated to the global equitable promotion and acceleration of Afrocentric content.
					We are home to the ever Virtual Screening Room for African films and series content buyers can explore
					the vast catalogue and make informed content acquisition decisions.`,
				website: 'https://acomart.tv/',
				image: 'acomart',
				completed_at: 'ongoing',
				collaborated: true
			},
			{
				name: 'Afrostream',
				subtitle: 'Catch-up with the latest African films',
				content: 
					`AFROSTREAM is a subscription Video-on-Demand service for Afrocentric content to be launched globally.
					You can watch African films online.`,
				website: 'https://myafrostream.tv/',
				image: 'myafrostream',
				completed_at: 'ongoing',
				collaborated: true
			},
			{
				name: 'AETI Online Training Platform',
				subtitle: 'Online Training Platform',
				content: 
					`Our programmes are affordable to bridge the learning gaps, between the academia and what is required
					by Industry, engineering services and supporting skill acquisition of mid-career professionals.`,
				website: 'http://onlinetraining.aetinigeria.com/',
				image: 'aeti',
				completed_at: '2020-08-18',
				collaborated: false
			},
			{
				name: 'SavyCon',
				subtitle: 'Hire a vendor for your project',
				content: 
					`Savycon.com is a reliable outsourcing platform with ads features tailored to redefining 
					outsourcing in the best way clients and freelancers appreciate.`,
				website: 'http://savycon.com/',
				image: 'savycon',
				completed_at: '2019-09-24',
				collaborated: false
			},
			{
				name: 'NextLaw Africa',
				subtitle: 'Enabling Legal Practitioners in Africa through Technology',
				content: 
					`NextLaw is a legal platform for practitioners across Africa, enabling them through technology.
					They provide legal services to businesses and practitioners.`,
				website: 'https://nextlaw.africa/',
				image: 'nextlaw',
				completed_at: '2019-07-02',
				collaborated: true
			},
			// {
			// 	name: 'Dream Builders International',
			// 	subtitle: 'Real Estate Platform',
			// 	content: 
			// 		`Dream Builders International is a real estate company that provides the best service when it
			// 		comes to rentage, buying and selling of property online.`,
			// 	website: null,
			// 	image: 'dreambuildersinter',
			// 	completed_at: '2019-05-14',
			// 	collaborated: false
			// },
			// {
			// 	name: 'MartAdef Inc.',
			// 	subtitle: 'Sample Website',
			// 	content: 'This is one of the very first websites I designed actually, using Mobirise.',
			// 	website: 'http://martadefinc.000webhostapp.com/',
			// 	image: 'martadef',
			// 	completed_at: '2018-01-01',
			// 	collaborated: false
			// }
		],
	},
	mutations: {},
	getters: {
		getProjects (state) {
			return state.projects.sort((a, b) => {
				return b.completed_at.localeCompare(a.completed_at)
			})
		}
	},
	actions: {}
}
