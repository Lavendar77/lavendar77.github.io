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
					As the <b>Lead Software Engineer</b>, I coordinate all development tasks for the successful
					deployment of the applications.`,
				website: 'https://acomart.tv/',
				image: 'acomart',
				completed_at: 'ongoing',
				collaborated: true,
				tools: ['laravel', 'vuejs', 'aws']
			},
			{
				name: 'Afrostream',
				subtitle: 'Catch-up with the latest African films',
				content:
					`AFROSTREAM is a subscription Video-on-Demand service for Afrocentric content to be launched globally.
					You can watch African films online. Also the <b>Lead Software Engineer</b>, I coordinate all
					affairs of the development of the applications.`,
				website: 'https://myafrostream.tv/',
				image: 'myafrostream',
				completed_at: 'ongoing',
				collaborated: true,
				tools: ['laravel', 'vuejs', 'aws']
			},
			{
				name: 'Afrocinema',
				subtitle: 'Access to premium and high quality Afrocentric movies and series.',
				content:
					`AFROSTREAM is the Digital Cinema for Afrocentric Movies and Premium Series via
					your Mobile, PC or Smart TV. `,
				website: 'https://afrocinema.tv/',
				image: 'afrocinema',
				completed_at: 'ongoing',
				collaborated: true,
				tools: ['laravel', 'vuejs', 'aws']
			},
			{
				name: 'AETI Online Training',
				subtitle: 'Online Training Platform',
				content:
					`AETI ONLINE TRAINING is an online training platform which features programmes
					to bridge the learning gaps with engineering services and skills acquisition of mid-career professionals.
					Acted as the <b>Lead Software Developer</b>.`,
				website: 'http://onlinetraining.aetinigeria.com/',
				image: 'aeti',
				completed_at: '2020-09-18',
				collaborated: true,
				tools: ['laravel', 'vuejs', 'vuetify', 'cPanel']
			},
			{
				name: 'SavyCon',
				subtitle: 'Hire a vendor for your project',
				content:
					`SAVYCON is a reliable outsourcing platform with ads features tailored to redefining
					outsourcing in the best way clients and freelancers appreciate. Following strict instructions,
					the application was developed and delivered at the estimated time.`,
				website: 'http://savycon.com/',
				image: 'savycon',
				completed_at: '2019-09-24',
				collaborated: false,
				tools: ['laravel', 'vuejs', 'vultr']
			},
			{
				name: 'NextLaw Africa',
				subtitle: 'Enabling Legal Practitioners in Africa through Technology',
				content:
					`NEXTLAW AFRICA is a legal platform for practitioners across Africa, providing legal services to
					businesses and practitioners. Project is currently onhold, as new developments are ongoing in the
					background. #Anticipate`,
				website: 'https://nextlaw.africa/',
				image: 'nextlaw',
				completed_at: '2019-07-02',
				collaborated: true,
				tools: ['laravel', 'angularjs', 'aws']
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
