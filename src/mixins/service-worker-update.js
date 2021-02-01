export default {
	name: 'ServiceWorkerMixin',
	data() {
		return {
			// refresh variables
			swRefreshing: false,
			swRegistration: null,
			swUpdateExists: false
		}
	},
	methods: {
		// Store the SW registration so we can send it a message
		// We use `swUpdateExists` to control whatever alert, toast, dialog, etc we want to use
		// To alert the user there is an update they need to refresh for
		swUpdateAvailable(event) {
			this.swRegistration = event.detail
			this.swUpdateExists = true
		},
		// Called when the user accepts the update
		swRefreshApp() {
			this.swUpdateExists = false

			// Make sure we only send a 'skip waiting' message if the SW is waiting
			if (!this.swRegistration || !this.swRegistration.waiting) {
				return
			}

			// send message to SW to skip the waiting and activate the new SW
			this.swRegistration.waiting.postMessage({ type: 'SKIP_WAITING' })
		}
	},
	created() {
		// Listen for our custom event from the SW registration
		document.addEventListener('swUpdated', this.swUpdateAvailable, {
			once: true
		})

		// Prevent multiple refreshes
		navigator.serviceWorker.addEventListener('controllerchange', () => {
			if (this.swRefreshing) {
				return
			}

			this.swRefreshing = true

			// Here the actual reload of the page occurs
			window.location.reload()
		})
	}
}
