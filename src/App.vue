<template>
	<div id="app">
		<router-view/>

		<div class="container text-center section">
			<h5>Connect via</h5>
			<b-button-group size="lg">
				<b-button :href="$store.state.linkedin" target="__blank" variant="outline">
					<linkedin-icon />
				</b-button>
				<b-button :href="$store.state.twitter" target="__blank" variant="outline">
					<twitter-icon />
				</b-button>
				<b-button :href="'mailto:' + $store.state.email" target="__blank" variant="outline">
					<mail-icon />
				</b-button>
			</b-button-group>
		</div>

		<!-- Footer -->
		<footer class="text-muted">
			<div class="text-center">
				Thanks for the review<br>
				<b-button
					:href="`https://wa.me/${myPhone}/?text=Hi.%20I%20would%20like%20to%20hire%20you%20for%20a%20job.`"
					size="lg"
					variant="outline-default"
				>
					Hire me! 🤓
				</b-button>
			</div>
		</footer>
	</div>
</template>

<script>
import swUpdate from '@/mixins/service-worker-update'
import { mapState } from 'vuex'

export default {
	name: 'App',
	mixins: [swUpdate],
	computed: {
		...mapState({
			myPhone: (state) => state.phone
		})
	},
	watch: {
		swUpdateExists(val) {
			if (val) {
				this.$snack.success({
					text: 'New content is available!',
					button: 'Update',
					action: this.swRefreshApp
				})
			}
		}
	}
}
</script>
