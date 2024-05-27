import { defineStore } from 'pinia'

export const useToolStore = defineStore('tools', {
	state: () => {
		return {
			tools: [
				{
					name: 'laravel',
					color: '#FF3326'
				},
				{
					name: 'aws',
					color: '#EF931E'
				},
				{
					name: 'vuejs',
					color: '#41B883'
				},
				{
					name: 'GCP',
					color: '#4284f3'
				},
				{
					name: 'git',
					color: '#E84D31'
				},
				{
					name: 'digitalocean',
					color: '#0368ff'
				},
				{
					name: 'vuetify',
					color: '#1764BA'
				},
				{
					name: 'meilisearch',
					color: '#e5175d'
				},
				{
					name: 'symfony',
					color: '#000000'
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
		}
	}
})
