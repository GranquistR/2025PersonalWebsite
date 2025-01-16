<template>
  <div class="logo-text flex flex-row items-center" @click="deleteText()">
    < {{ logoText }}
    <span :class="{ 'blinking-cursor': isBlinking, hidden: !isBlinking }"></span>
    />
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue'
import { onMounted, onUnmounted, ref } from 'vue'

const stepIndex = ref(0)
const isBlinking = ref(false)
const logoText = ref('Ryan Granquist')

const originalLogoText = 'Ryan Granquist'
const newLogoText = 'MY PORTFOLIO'

function deleteText() {
  const randomTime = Math.floor(Math.random() * 300)
  setTimeout(() => {
    logoText.value = logoText.value.substring(0, logoText.value.length - 1)
    if (logoText.value.length > 0) {
      deleteText()
    }
  }, randomTime)
}

function addText(text: string) {
  const randomTime = Math.floor(Math.random() * 300)
  setTimeout(() => {
    logoText.value += text[logoText.value.length]
    if (logoText.value.length < text.length) {
      addText(text)
    }
  }, randomTime)
}

const cycleSteps = [
  () => {
    isBlinking.value = true
  },
  deleteText,
  () => {
    addText(newLogoText)
  },
  () => {
    isBlinking.value = false
  },
  () => {
    isBlinking.value = true
  },
  deleteText,
  () => {
    addText(originalLogoText)
  },
  () => {
    isBlinking.value = false
  },
]

function executeStep() {
  cycleSteps[stepIndex.value]()
  stepIndex.value = (stepIndex.value + 1) % cycleSteps.length
  setTimeout(executeStep, 5000)
}

onMounted(() => {
  setTimeout(executeStep, 10000)
  setInterval(executeStep, 50000)
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
