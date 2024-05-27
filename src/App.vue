<script setup>
  import SvgIcon from '@jamescoyle/vue-icon';
  import { mdiLinkedin, mdiGithub, mdiGitlab, mdiMail, mdiWhatsapp } from '@mdi/js';
  import { useProfileStore } from './stores/profile';

  const profile = useProfileStore();
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
      <a :href="`mailto:${profile.email}`" target="__blank" class="btn btn-link text-decoration-none">
        <svg-icon type="mdi" :path="mdiMail"></svg-icon>
      </a>
      <a :href="`https://wa.me/${profile.phone}/?text=Hi.%20I%20would%20like%20to%20hire%20you%20for%20a%20job.`" target="__blank" class="btn btn-link">
        <svg-icon type="mdi" :path="mdiWhatsapp"></svg-icon>
      </a>
    </div>
  </div>

  <footer class="">
    <div class="text-center">
      Thanks for the review<br>
      <!-- <b-button
        :href="`https://wa.me/${profile.phone}/?text=Hi.%20I%20would%20like%20to%20hire%20you%20for%20a%20job.`"
        size="lg"
        variant="outline-default"
      >
        Hire me! 🤓
      </b-button> -->
    </div>
  </footer>
</template>./stores/profile
