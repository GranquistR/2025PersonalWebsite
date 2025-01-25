<template>
  <div class="image flex" :style="{ bottom: atBottom ? (imageHover ? '-30%' : '-60%') : '-90%' }">
    <img
      src="/images/RusselPopup.png"
      alt="Russel, my beloved..."
      @mouseover="imageHover = true"
      @mouseleave="imageHover = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onScroll } from '@/utils/onScroll'

const atBottom = ref(false)
const imageHover = ref(false)

onScroll(() => {
  atBottom.value = window.scrollY == document.documentElement.scrollHeight - window.innerHeight
})
</script>

<style scoped>
.image {
  position: fixed;
  right: 0;
  transition: bottom 0.3s ease-in-out;
}
</style>
