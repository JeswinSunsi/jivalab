import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/Home.vue'
import IntroView from '../views/Intro.vue'
import ScanView from '../views/Scan.vue'
import VoiceView from '../views/Voice.vue'
import BodyView from '../views/Body.vue'


const routes = [
  { path: '/', component: IntroView },
  { path: '/home', component: HomeView },
  { path: '/body', component: BodyView },
  { path: '/scan/:disease', component: ScanView },
  { path: '/voice/:disease', component: VoiceView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;