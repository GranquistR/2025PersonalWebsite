<template>
  <div class="scroller" :style="{ height: height }">
    <div class="scroller-inner" :style="{ height: height }" ref="scrollerInner">
      <div class="image-container" v-for="(image, index) in images.concat(images)" :key="index">
        <img :src="image.src" :alt="image.alt" :style="{ height: height }" @load="onImageLoad" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
  height: string
  images: { src: string; alt: string }[]
}>()

const scrollerInner = ref<HTMLElement | null>(null)
let imagesLoaded = 0

const onImageLoad = () => {
  imagesLoaded++
  if (imagesLoaded === props.images.length * 2) {
    startAnimation()
  }
}

const startAnimation = () => {
  if (scrollerInner.value) {
    scrollerInner.value.style.animation = 'scroll ' + props.images.length * 5 + 's linear infinite'
  }
}
</script>

<style scoped>
.scroller {
  overflow: hidden;
  position: relative;
  width: 100%;
}

.scroller-inner {
  display: flex;
  overflow: show;
  width: fit-content;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>

<style>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
