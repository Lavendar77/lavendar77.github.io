<template>
	<div>
		<div class="header">
			<b-container>
				<h3 class="salute">Hello!</h3>
				<h1 class="title">I am {{ $store.state.name }}</h1>
				<h4 class="subtitle mb-5">Full Stack Software Engineer 😇</h4>
				<b-btn
					variant="outline-dark"
					to="https://drive.google.com/file/d/1iVlP4fNT0XVv_aC8VDaSUeMHqQe9SL0k/view?usp=sharing"
					v-b-popover.hover.right="'via Google Drive'" 
					title="View/Download CV"
				>
					Download My CV
				</b-btn>
			</b-container>
		</div>

		<b-container>
			<div class="section">
				<div class="section-header">
					<div class="section-title">About Me</div>
					<div class="section-subtitle">Local man 😊</div>
				</div>

				<div class="section-content clearfix">
					<b-img-lazy
						thumbnail
						fluid
						src="img/adeyinka.jpg"
						width="150"
						height="150"
						:alt="$store.state.name"
						rounded="top"
						class="float-right"
					></b-img-lazy>

					<p>
						Professionally, I engage in maximizing my time and effort to learning and building software solutions through the various platforms of software engineering. I enjoy coding because I see it as an expression of art and critical thinking, from its build to its core.
						Personally, I am a down-to-earth person with average social skills, which contribute to my livelihood of a quiet life with nature. In just {{ myAge }} of my life, I believe one's passion is most important and mastered through how much one learns about one's self — personality and all. PS, I am an INTJ, with a "Melphleg" temperament.
					</p>
				</div>
			</div>

			<!-- My passion -->
			<div class="section">
				<div class="section-header">
					<div class="section-title">My Passion</div>
					<div class="section-subtitle">What I love to do 👨🏻‍💻</div>
				</div>
				<div class="section-content">
					<b-row>
						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="https://picsum.photos/id/0/160/160"
								alt="web"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Web Development</h5>
							<p>
								Been engaged with the web for most of my years in software development. Laravel is my go-to framework to building efficient web applications; whilst Vue.js is just a "view" of life.
							</p>
						</div>
						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="https://picsum.photos/id/160/160/160"
								alt="app"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Mobile App Development</h5>
							<p>
								Began my precious journey into becoming a FlutterDev in 2019, and with <a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg" target="__blank">Net Ninja</a>'s tutorials, I hope to become fully equipped with knowledge and skill by the end of the year.
							</p>
						</div>
					</b-row>
					<b-row>
						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="https://picsum.photos/id/119/160/160"
								alt="project"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Project Management</h5>
							<p>
								Managing projects has been one of skills I am proud of over the years. With the highest grade in my undergraduate final year project (89%), I am quite confident.
							</p>
						</div>
						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="https://picsum.photos/id/1025/160/160"
								alt="adventure"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Nature & Movies</h5>
							<p>Oh! How I love the solitude of a quiet life with nature... and a box of snacks at hand; keeps my imagination soaring high. I simply enjoy the life of charity and love.</p>
						</div>
					</b-row>
				</div>
			</div>

			<!-- My projects -->
			<div class="section">
				<div class="section-header">
					<div class="section-title">My Projects</div>
					<div class="section-subtitle">Work that I have done and collaborated on 😎</div>
				</div>
				<div class="section-content">
					<b-row>
						<div
							class="col-md-6 col-sm-12 my-3"
							v-for="(project, index) in $store.getters['projects/getProjects']"
							:key="index"
						>
							<div class="card mb-2">
								<b-img-lazy
									:src="'img/projects/' + project.image + '.jpg'"
									:alt="project.name"
									class="card-img-top"
								></b-img-lazy>

								<div class="card-body">
									<h4 class="card-title clearfix">
										{{ project.name }}
										<small
											v-if="project.collaborated"
											class="float-right badge badge-success"
											style="font-size: 10px;"
										>
											team player
										</small>
									</h4>
									<h6 class="card-subtitle text-muted mb-2">{{ project.subtitle }}</h6>
									<div class="card-text">
										<p>
											{{ project.content }}
										</p>
									</div>

									<b-button
										v-if="project.website"
										:href="project.website"
										target="__blank"
										variant="outline-dark"
									>
										Visit Site
									</b-button>
								</div>
							</div>
						</div>
					</b-row>
				</div>
			</div>

			<!-- My favourite tools -->
			<div class="section">
				<div class="section-header">
					<div class="section-title">My Favourite Tools</div>
					<div class="section-subtitle">Languages, frameworks and dev. environments I use for best productivity 🔥</div>
				</div>
				<div class="section-content">
					<swiper :options="toolsOption">
						<swiper-slide v-for="(tool, i) in $store.getters['tools/getTools']" :key="i">
							<b-img-lazy v-bind="myTools" :src="getToolImageUrl(tool)" alt="tool"></b-img-lazy>
						</swiper-slide>
						<div
							class="tools-pagination"
							slot="pagination"
							v-if="$store.getters['tools/getTools'].length > toolsOption.slidesPerView"
						></div>
					</swiper>
					<h5>Others:</h5>
					<p>
						🏠 Vuex <br>
						🔲 Sublime Text <br>
						🎨 Bootstrap, Photoshop <br>
						🔏 PHP, JavaScript <br>
						👶🏻 Flutter
					</p>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data () {
			return {
				myTools: {
					center: true,
					fluidGrow: true,
					blank: true,
					blankColor: '#bbb',
					width: 600,
					height: 400,
					class: 'my-5'
				},
				toolsOption: {
					slidesPerView: 4,
					spaceBetween: 50,
					pagination: {
						el: '.tools-pagination',
						clickable: true
					}
				},
			}
		},
		computed: {
			myAge() {
				return this.$moment(new Date('1997-03-31')).fromNow(true)
			}
		},
		methods: {
			getToolImageUrl (name) {
				return `img/tools/${name}.jpg`
			},
		},
	}
</script>
