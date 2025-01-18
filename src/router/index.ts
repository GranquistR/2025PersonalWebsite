import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ExtrasView from '@/views/ExtrasView.vue'
import YoutubeDownloaderView from '@/views/YoutubeDownloaderView.vue'
import PianoKeyPractive from '@/views/PianoKeyPractive.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
    {
      path: '/experience',
      name: 'experience',
      component: ExperienceView,
    },
    {
      path: '/extras',
      name: 'extras',
      component: ExtrasView,
    },
    {
      path: '/extras/youtube-downloader',
      name: 'youtube-downloader',
      component: YoutubeDownloaderView,
    },
    {
      path: '/extras/piano-key-practice',
      name: 'piano-key-practice',
      component: PianoKeyPractive,
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
