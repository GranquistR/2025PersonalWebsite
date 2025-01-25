<template>
  <RouterLink to="/" class="unstyled-link">
    <div class="logo-text flex flex-row items-center w-19rem">
      &lt; {{ text }}
      <!-- <span :class="{ 'blinking-cursor': isBlinking, hidden: !isBlinking }"></span> -->
      /&gt;
    </div>
  </RouterLink>
</template>

<script setup lang="ts">
//import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

defineProps<{
  text: string
}>()

// const stepIndex = ref(0)
// const isBlinking = ref(false)
// const logoText = ref('Ryan Granquist')

// const originalLogoText = 'Ryan Granquist'
// const newLogoText = 'MY PORTFOLIO'
// const animationDelay = 100 // Delay in milliseconds

// function deleteText(): Promise<void> {
//   console.debug('Deleting text: ', logoText.value)
//   return new Promise((resolve) => {
//     let lastTime = performance.now()
//     function step(currentTime: number) {
//       if (currentTime - lastTime >= animationDelay) {
//         logoText.value = logoText.value.substring(0, logoText.value.length - 1)
//         lastTime = currentTime
//       }
//       if (logoText.value.length > 0) {
//         requestAnimationFrame(step)
//       } else {
//         resolve()
//       }
//     }
//     requestAnimationFrame(step)
//   })
// }

// function addText(text: string): Promise<void> {
//   console.debug('Adding text: ', logoText.value)
//   return new Promise((resolve) => {
//     let lastTime = performance.now()
//     function step(currentTime: number) {
//       if (currentTime - lastTime >= animationDelay) {
//         logoText.value += text[logoText.value.length]
//         lastTime = currentTime
//       }
//       if (logoText.value.length < text.length) {
//         requestAnimationFrame(step)
//       } else {
//         resolve()
//       }
//     }
//     requestAnimationFrame(step)
//   })
// }

// const cycleSteps: (() => Promise<void>)[] = [
//   () => {
//     isBlinking.value = true
//     return Promise.resolve()
//   },
//   () => {
//     deleteText()
//     return Promise.resolve()
//   },
//   () => {
//     addText(newLogoText)
//     return Promise.resolve()
//   },
//   () => {
//     isBlinking.value = false
//     return Promise.resolve()
//   },
//   () => {
//     isBlinking.value = true
//     return Promise.resolve()
//   },
//   () => {
//     deleteText()
//     return Promise.resolve()
//   },
//   () => {
//     addText(originalLogoText)
//     return Promise.resolve()
//   },
//   () => {
//     isBlinking.value = false
//     return Promise.resolve()
//   },
// ]

// function executeStep() {
//   if (stepIndex.value < cycleSteps.length) {
//     cycleSteps[stepIndex.value]().then(() => {
//       stepIndex.value++
//       if (stepIndex.value == 4) {
//         setTimeout(executeStep, 30000)
//         console.debug('Waiting for 30 seconds step: ', stepIndex.value)
//       } else {
//         setTimeout(executeStep, 5000)
//         console.debug('Waiting for 5 seconds step: ', stepIndex.value)
//       }
//     })
//   } else {
//     stepIndex.value = 0
//     setTimeout(executeStep, 10000)
//     console.debug('Waiting for 10 seconds step: ', stepIndex.value)
//   }
// }

// onMounted(() => {
//   setTimeout(executeStep, 20000)
//   console.debug('Waiting for 20 seconds step: ', stepIndex.value)
// })
</script>

<style scoped>
.logo-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--p-primary-color);
  margin-left: 0.5rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-family: 'Poppins', sans-serif;
  cursor: pointer;
  transition: color 0.3s;
}

.blinking-cursor {
  width: 2px;
  height: 30px;
  background-color: gray;
  display: inline-block;
  position: relative;
  margin-right: 6px;
  animation: blink 1s infinite;
}

.unstyled-link {
  text-decoration: none;
  color: inherit;
}

@keyframes blink {
  0%,
  49% {
    opacity: 1;
  }
  50%,
  100% {
    opacity: 0;
  }
}
</style>
