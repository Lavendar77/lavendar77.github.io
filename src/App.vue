<template>
	<div id="app">
		<router-view/>

		<div class="container text-center section">
			<h5>Connect via</h5>
			<b-button-group>
				<b-button :href="$store.state.skype" target="__blank" variant="info">Skype</b-button>
				<b-button :href="$store.state.linkedin" target="__blank" variant="primary">LinkedIn</b-button>
				<b-button :href="$store.state.twitter" target="__blank" variant="success">Twitter</b-button>
				<b-button :href="'mailto:' + $store.state.email" target="__blank" variant="danger">Email</b-button>
				<b-button :href="$store.state.github" target="__blank" variant="">GitHub</b-button>
			</b-button-group>
		</div>

		<!-- Footer -->
		<footer class="text-muted">
			<div class="text-center">
				Thanks for the review<br>
				<b-button :href="'https://wa.me/' + $store.state.phone + '/?text=Hi.%20I%20would%20like%20to%20hire%20you%20for%20a%20job.'" size="sm" variant="outline-default">Hire me! 🤓</b-button>
			</div>
		</footer>
	</div>
</template>
