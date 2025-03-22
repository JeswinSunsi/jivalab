<script setup>
import IntroView from './components/Intro.vue'
import HomeView from './components/Home.vue'
import VoiceView from './components/Voice.vue'
import ScanView from './components/Scan.vue'
</script>

<template>
  <div class="main">
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  height: 100%;
  width: 100%;
}
</style>
