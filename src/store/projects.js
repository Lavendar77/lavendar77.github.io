import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
	namespaced: true,
	state: {
		projects: [
			{
				name: 'SavyCon',
				subtitle: 'Hire a vendor for your project',
				content: 'Savycon.com is a reliable outsourcing platform with ads features tailored to redefining outsourcing in the best way clients and freelancers appreciate.',
				website: 'http://savycon.com/',
				image: 'savycon',
				completed_at: '2019-09-24'
			},
			{
				name: 'NextLaw Africa',
				subtitle: 'Enabling Legal Practitioners in Africa through Technology',
				content: 'NextLaw is a legal platform for practitioners across Africa, enabling them through technology. They provide legal services to businesses and practitioners.',
				website: 'http://nextlaw.africa/',
				image: 'nextlaw',
				completed_at: '2019-07-02'
			},
			{
				name: 'Dream Builders International',
				subtitle: 'Real Estate Platform',
				content: 'Dream Builders International is a real estate company that provides the best service when it comes to rentage, buying and selling of property online.',
				website: 'http://dreambuildersinter.com/',
				image: 'dreambuildersinter',
				completed_at: '2019-05-14'
			},
			{
				name: 'MartAdef Inc.',
				subtitle: 'Organization Website',
				content: 'MartAdef Inc. shows my indepth service portfolio. It kind of showcases all of my rendered services to its core and how well I have been able to improve my skills.',
				website: 'http://martadefinc.000webhostapp.com/',
				image: 'martadef',
				completed_at: '2018-01-01'
			}
		],
	},
	mutations: {},
	getters: {
		getProjects (state) {
			return state.projects.sort((a, b) => {
				var x = a.completed_at.toLowerCase();
				var y = b.completed_at.toLowerCase();
				if (x < y) {return 1;}
				if (x > y) {return -1;}
				return 0;
			})
		}
	},
	actions: {}
}
