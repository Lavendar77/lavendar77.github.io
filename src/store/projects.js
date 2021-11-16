import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		projects: [
			{
				name: 'Connect Nigeria',
				subtitle: 'Find any business-related information easily',
				content:
					`Connectnigeria.com makes information easily accessible for everyone.
					It provides the fastest, easiest and most innovative way for you to find information about
					businesses, real estate, automobiles, jobs, events, travel, sports, entertainment, health,
					education, technology and lots more.`,
				website: 'https://connectnigeria.com/',
				image: 'connectnigeria',
				completed_at: 'ongoing',
				collaborated: true,
				tools: ['laravel', 'aws', 'meilisearch'],
				is_live: true
			},
			{
				name: 'PAYALAT',
				subtitle: 'Send & Receive Payments',
				content:
					`PAYALAT is a modern payment platform that support African Businesses to Accept Payments
					offline and online via, Cards, Bank accounts, Mobile Wallets, USSD, MasterPass QR, VISA QR,
					agent network and other alternative payment methods.`,
				website: 'https://payalat.com/',
				image: 'payalat',
				completed_at: '2021-07-31',
				collaborated: true,
				tools: ['symfony', 'aws'],
				is_live: true
			},
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
				tools: ['laravel', 'vuejs', 'aws'],
				is_live: true
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
				tools: ['laravel', 'vuejs', 'aws'],
				is_live: true
			},
			{
				name: 'Afrocinema',
				subtitle: 'Access to premium and high quality Afrocentric movies and series.',
				content:
					`AFROCINEMA is the digital Cinema for Afrocentric Movies and Premium Series via
					your Mobile, PC or Smart TV. Also the <b>Lead Software Engineer</b>, I coordinate all
					affairs of the development of the applications.`,
				website: 'https://afrocinema.tv/',
				image: 'afrocinema',
				completed_at: 'ongoing',
				collaborated: true,
				tools: ['laravel', 'vuejs', 'aws'],
				is_live: true
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
				tools: ['laravel', 'vuejs', 'vuetify', 'cPanel'],
				is_live: true
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
				tools: ['laravel', 'vuejs', 'vultr'],
				is_live: true
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
				tools: ['laravel', 'angularjs', 'aws'],
				is_live: false
			},
			{
				name: 'Dream Builders International',
				subtitle: 'Real Estate Platform',
				content:
					`Dream Builders International is a real estate company that provides the best service when it
					comes to rentage, buying and selling of property online.`,
				website: null,
				image: 'dreambuildersinter',
				completed_at: '2019-05-14',
				collaborated: false,
				tools: ['laravel', 'cPanel', 'vuejs'],
				is_live: false
			},
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
