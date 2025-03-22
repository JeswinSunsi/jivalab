import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import IntroView from '../views/Intro.vue'
import ScanView from '../views/Scan.vue'
import VoiceView from '../views/Voice.vue'


const routes = [
  { path: '/', component: IntroView },
  { path: '/home', component: HomeView },
  { path: '/scan', component: ScanView },
  { path: '/voice', component: VoiceView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;