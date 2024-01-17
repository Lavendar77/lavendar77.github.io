<template>
	<div>
		<!-- <div class="text-center bg-warning text-white sticky-top small">Hire me, I need a job 🙏</div> -->
		<div class="header">
			<b-container class="">
				<!-- <h3 class="salute">Hello 👋</h3> -->
				<h1 class="title">
					<!-- <span class="small" style="font-size: 15px;">I am</span> -->
					<br>
					{{ $store.state.name }}
				</h1>
				<h4 class="subtitle mb-5">Full Stack Software Engineer</h4>
				<b-dropdown
					text="Explore My Portfolio"
					split-variant="outline-primary"
					variant="primary"
					class="shadow-none outline-none"
				>
					<b-dropdown-item href="https://drive.google.com/file/d/1iVlP4fNT0XVv_aC8VDaSUeMHqQe9SL0k/view?usp=sharing" target="_blank">
						<google-drive-icon /> Google Drive
					</b-dropdown-item>
					<b-dropdown-item :href="$store.state.linkedin" target="_blank">
						<linkedin-icon /> LinkedIn
					</b-dropdown-item>
					<b-dropdown-item :href="$store.state.github" target="_blank">
						<github-icon /> GitHub
					</b-dropdown-item>
					<b-dropdown-item :href="$store.state.twitter" target="_blank">
						&#x1D54F; <small>(Formerly Twitter)</small>
					</b-dropdown-item>
					<b-dropdown-item :href="'mailto:' + $store.state.email" target="_blank">
						<mail-icon /> Email
					</b-dropdown-item>
					<b-dropdown-item :href="'https://wa.me/' + $store.state.phone + '/?text=Hi.'" target="_blank">
						<whatsapp-icon /> WhatsApp
					</b-dropdown-item>
				</b-dropdown>
			</b-container>
		</div>

		<b-container>
			<div class="section">
				<div class="section-header">
					<div class="section-title">About Me</div>
					<div class="section-subtitle">Ade 😊</div>
				</div>

				<div class="section-content clearfix">
					<b-img-lazy
						thumbnail
						fluid
						src="img/adeyinka.jpg"
						width="160"
						:alt="$store.state.name"
						class="float-right"
					></b-img-lazy>

					<p>
						Professionally, I engage in maximizing my time and effort to learn and build software
						solutions through the various platforms of software engineering. I enjoy coding because I
						see it as an expression of art and critical thinking, from its build to its core.
						I am a down-to-earth person with average social skills, which contribute to
						my livelihood. In just {{ myAge }} of my life, I believe one's passion is most important
						and mastered through how much one learns about one's self —  personality and all. PS,
						I am an INTJ, with a "Melphleg" temperament.
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
								src="/img/passion/dev.jpeg"
								alt="web"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Web Development</h5>
							<p>
								Been engaged with the web for most of my years in software development.
								Laravel is my go-to framework to building efficient web applications; whilst
								Vue.js is just a "view" of life.
							</p>
						</div>

						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="/img/passion/pm.jpeg"
								alt="project"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Project Management</h5>
							<p>
								Managing projects has been one of skills I am proud of over the years.
								With the highest grade in my undergraduate final year project (89%), I am quite
								confident.
							</p>
						</div>
					</b-row>
					<b-row>
						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="/img/passion/mobile.jpeg"
								alt="app"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Mobile App Development</h5>
							<p>
								Began my precious journey into becoming a FlutterDev, and with
								<a
									href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg"
									target="__blank"
								>
									Net Ninja
								</a>'s tutorials, I hope to become fully equipped with knowledge and skill by
								the end of the year.
							</p>
						</div>

						<div class="col-md-6 col-sm-12 my-3 clearfix">
							<b-img-lazy
								thumbnail
								fluid
								src="/img/passion/life.jpeg"
								alt="adventure"
								rounded="top"
								class="float-left"
							></b-img-lazy>

							<h5>Nature & Life</h5>
							<p>Oh! How I love the solitude of a quiet life with nature, with a taste of good
								music and a pack of snacks for my favourite films; keeps my imagination soaring
								high.</p>
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
							<div class="card shadow-sm">
								<b-img-lazy
									:src="'img/projects/' + project.image + '.jpg'"
									:alt="project.name"
									class="card-img-top rounded-0"
								></b-img-lazy>

								<div class="card-body">
									<div class="d-md-flex justify-content-between">
										<div>
											<h4>{{ project.name }}</h4>
											<h6 class="card-subtitle text-muted mb-2">{{ project.subtitle }}</h6>
										</div>
										<div>
											<b-badge
												variant="primary"
												class="float-right"
											>
												{{ project.job_title }}
											</b-badge>
											<br>
											<b-badge
												variant="success"
												class="float-right"
												v-if="project.collaborated"
												style="font-size: 70%;"
											>
												team player
											</b-badge>
										</div>
									</div>

									<div class="mt-2 mb-3">
										<span
											class="mr-2 badge badge-secondary"
											v-for="(tool, index) in project.tools"
											:key="index"
											:style="`background-color: ${getColor(tool)};`"
										>
											{{ tool }}
										</span>
									</div>

									<div class="card-text">
										<p v-html="project.content"></p>

										<div class="duties" v-if="project.duties.length">
											<b-btn
												class="shadow-none"
												variant="secondary"
												size="sm"
												v-b-toggle="project.image + 'duties'"
												block
											>
												<span class="when-open">Close</span><span class="when-closed">Open</span> Responsibilites
											</b-btn>

											<b-collapse :id="project.image + 'duties'" triggers="click">
												<ul>
													<li v-for="(duty, index) in project.duties" :key="index">
														<span v-html="duty"></span>
													</li>
												</ul>
											</b-collapse>
										</div>
									</div>
								</div>

								<div class="card-footer bg-transparent" v-if="project.is_live">
									<b-button
										:href="project.website"
										target="__blank"
										variant="outline-dark"
										class="shadow-none"
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
					<div class="section-subtitle">
						Languages, frameworks and dev. environments I use for best productivity 🔥
					</div>
				</div>
				<div class="section-content">
					<swiper :options="toolsOption">
						<swiper-slide v-for="(tool, i) in tools" :key="i">
							<b-img-lazy v-bind="myTools" :src="getToolImageUrl(tool)" :alt="tool"></b-img-lazy>
						</swiper-slide>
						<div
							class="tools-pagination"
							slot="pagination"
							v-if="tools.length > toolsOption.slidesPerView"
						></div>
					</swiper>
					<h5>Others:</h5>
					<p>
						🏠 Vuex, PestPHP <br>
						🎨 Tailwind, Bootstrap, Photoshop <br>
						🔏 PHP, JavaScript <br>
						👶🏻 GO, Python, Flutter <br>
						🔲 Visual Studio Code <br>
					</p>
				</div>
			</div>
		</b-container>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'

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
		...mapGetters({
			getTools: 'tools/getTools'
		}),
		tools() {
			return this.getTools.map(tool => tool.name)
		},
		myAge() {
			return this.$moment(new Date('1997-03-31')).fromNow(true)
		}
	},
	methods: {
		getToolImageUrl (name) {
			return `img/tools/${name}.jpg`
		},
		getColor(tool) {
			let color = this.getTools.filter(tl => tl.name == tool)

			return color[0]?.color
		}
	},
}
</script>

<style>
.collapsed > .when-open,
.not-collapsed > .when-closed {
  display: none;
}
</style>