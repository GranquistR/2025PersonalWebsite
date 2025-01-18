<template>
  <div class="logo-text flex flex-row items-center w-19rem" @click="deleteText()">
    &lt; {{ logoText }}
    <span :class="{ 'blinking-cursor': isBlinking, hidden: !isBlinking }"></span>
    /&gt;
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const stepIndex = ref(0)
const isBlinking = ref(false)
const logoText = ref('Ryan Granquist')

const originalLogoText = 'Ryan Granquist'
const newLogoText = 'MY PORTFOLIO'

function deleteText(): Promise<void> {
  return new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 300)
    setTimeout(() => {
      logoText.value = logoText.value.substring(0, logoText.value.length - 1)
      if (logoText.value.length > 0) {
        deleteText().then(resolve)
      }
    }, randomTime)
  })
}

function addText(text: string): Promise<void> {
  return new Promise((resolve) => {
    const randomTime = Math.floor(Math.random() * 300)
    setTimeout(() => {
      logoText.value += text[logoText.value.length]
      if (logoText.value.length < text.length) {
        addText(text).then(resolve)
      } else {
        resolve()
      }
    }, randomTime)
  })
}

const cycleSteps: (() => Promise<void>)[] = [
  () => {
    isBlinking.value = true
    return Promise.resolve()
  },
  () => {
    deleteText()
    return Promise.resolve()
  },
  () => {
    return addText(newLogoText)
  },
  () => {
    isBlinking.value = false
    return Promise.resolve()
  },
  () => {
    isBlinking.value = true
    return Promise.resolve()
  },
  () => {
    deleteText()
    return Promise.resolve()
  },
  () => {
    return addText(originalLogoText)
  },
  () => {
    isBlinking.value = false
    return Promise.resolve()
  },
]

function executeStep() {
  if (stepIndex.value < cycleSteps.length) {
    cycleSteps[stepIndex.value]().then(() => {
      stepIndex.value++
      if (stepIndex.value == 4) {
        setTimeout(executeStep, 30000)
      } else {
        setTimeout(executeStep, 5000)
      }
    })
  } else {
    stepIndex.value = 0
    setTimeout(executeStep, 10000)
  }
}

onMounted(() => {
  setTimeout(executeStep, 20000)
})
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
