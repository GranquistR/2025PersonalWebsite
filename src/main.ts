import './assets/main.css'

//Vue 3
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

//PrimeVue
import PrimeVue from 'primevue/config'
import 'primeicons/primeicons.css'
import Aura from '@primevue/themes/aura'
import ToastService from 'primevue/toastservice'
import Tooltip from 'primevue/tooltip'

//PrimeFlex
import 'primeflex/primeflex.css'

createApp(App)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: '.dark-mode-toggle',
      },
    },
  })
  .use(router)
  .use(ToastService)
  .directive('tooltip', Tooltip)
  .mount('#app')

//Set the primary color of the theme
import { updatePreset } from '@primevue/themes'
updatePreset({
  semantic: {
    primary: {
      50: '#fffbeb',
      100: '#fef3c7',
      200: '#fde68a',
      300: '#fcd34d',
      400: '#fbbf24',
      500: '#f59e0b',
      600: '#d97706',
      700: '#b45309',
      800: '#92400e',
      900: '#78350f',
      950: '#451a03',
    },
  },
})
