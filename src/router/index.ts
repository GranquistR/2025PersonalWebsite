import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import ExtrasView from '@/views/ExtrasView.vue'
import PianoKeyPractive from '@/views/PianoKeyPractive.vue'
import ContactView from '@/views/ContactView.vue'

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
      path: '/extras/piano-key-practice',
      name: 'piano-key-practice',
      component: PianoKeyPractive,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route
      name: 'not-found',
      component: NotFoundView,
    },
  ],
})

export default router
