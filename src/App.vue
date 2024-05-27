<script setup>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiLinkedin, mdiGithub, mdiGitlab, mdiMail, mdiWhatsapp } from '@mdi/js'
import { useProfileStore } from './stores/profile'
import { onBeforeUnmount, onMounted, ref, watch } from 'vue'

const profile = useProfileStore()

const swRefreshing = ref(false)
const swRegistration = ref(null)
const swUpdateExists = ref(false)

const swUpdateAvailable = (event) => {
  swRegistration.value = event.detail
  swUpdateExists.value = true
}

const swRefreshApp = () => {
  swUpdateExists.value = false

  // Make sure we only send a 'skip waiting' message if the SW is waiting
  if (!swRegistration.value || !swRegistration.value.waiting) {
    return
  }

  // send message to SW to skip the waiting and activate the new SW
  swRegistration.value.waiting.postMessage({ type: 'SKIP_WAITING' })
}

watch(swUpdateExists, async (value) => {
  if (value) {
    alert('New app version detected! Install now!')
  }
})

onMounted(() => {
  // Listen for our custom event from the SW registration
  document.addEventListener('swUpdated', swUpdateAvailable, {
    once: true
  })

  // Prevent multiple refreshes
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (swRefreshing.value) {
      return
    }

    swRefreshing.value = true

    // Here the actual reload of the page occurs
    window.location.reload()
  })
})

onBeforeUnmount(() => {
  // Clean up the event listener
  document.removeEventListener('swUpdated', swUpdateAvailable)
})
</script>

<template>
  <RouterView />

  <div class="container text-center section">
    <h5>Connect via</h5>
    <div class="btn-group btn-group-lg" role="group" aria-label="Connection Channels">
      <a :href="profile.linkedin" target="__blank" class="btn btn-link text-decoration-none">
        <svg-icon type="mdi" :path="mdiLinkedin"></svg-icon>
      </a>
      <a :href="profile.github" target="__blank" class="btn btn-link text-decoration-none">
        <svg-icon type="mdi" :path="mdiGithub"></svg-icon>
      </a>
      <a :href="profile.gitlab" target="__blank" class="btn btn-link text-decoration-none">
        <svg-icon type="mdi" :path="mdiGitlab"></svg-icon>
      </a>
      <a :href="profile.twitter" target="__blank" class="btn btn-link text-decoration-none">
        &#x1D54F;
      </a>
      <a
        :href="`mailto:${profile.email}`"
        target="__blank"
        class="btn btn-link text-decoration-none"
      >
        <svg-icon type="mdi" :path="mdiMail"></svg-icon>
      </a>
      <a
        :href="`https://wa.me/${profile.phone}/?text=Hi.%20I%20would%20like%20to%20hire%20you%20for%20a%20job.`"
        target="__blank"
        class="btn btn-link"
      >
        <svg-icon type="mdi" :path="mdiWhatsapp"></svg-icon>
      </a>
    </div>
  </div>

  <footer class="">
    <div class="text-center">
      Thanks for the review<br />
      <!-- <b-button
        :href="`https://wa.me/${profile.phone}/?text=Hi.%20I%20would%20like%20to%20hire%20you%20for%20a%20job.`"
        size="lg"
        variant="outline-default"
      >
        Hire me! 🤓
      </b-button> -->
    </div>
  </footer>
</template>
