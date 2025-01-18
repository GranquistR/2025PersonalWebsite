<template>
  <div class="mx-8">
    <h1 class="text-5xl font-bold my-0">
      <div>Piano Key Practice</div>
    </h1>
    <div class="flex-auto">
      <label for="reset-time" class="font-bold block mb-2 ml-2">Reset Time </label>
      <InputNumber
        id="reset-time"
        v-model="resetTime"
        inputId="mile"
        suffix=" Seconds"
        :min="1"
        :max="100"
      />
    </div>

    <div class="flex flex-column justify-content-center text-center p-8">
      <div class="text-8xl font-bold">{{ chosenNote }}</div>
      <div class="text-5xl">{{ chosenHand }}</div>
    </div>

    <ProgressBar :value="(timeLeft / resetTime) * 100" class="mx-8">{{ timeLeft }}s</ProgressBar>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import ProgressBar from 'primevue/progressbar'
import InputNumber from 'primevue/inputnumber'

const resetTime = ref(8)
const timeLeft = ref(resetTime.value)

const notes = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
const hands = ['left', 'right']

const chosenNote = ref('A')
const chosenHand = ref('left')

function randomize() {
  chosenNote.value = notes[Math.floor(Math.random() * notes.length)]
  chosenHand.value = hands[Math.floor(Math.random() * hands.length)]
}

onMounted(() => {
  setInterval(() => {
    timeLeft.value--
    if (timeLeft.value === -1) {
      timeLeft.value = resetTime.value
      randomize()
    }
  }, 1000)
})

watch(resetTime, () => {
  timeLeft.value = resetTime.value
})
</script>
