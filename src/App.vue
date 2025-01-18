<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/Header/HeaderBar.vue'
import RusselPopup from './components/Home/RusselPopup.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <div id="app">
    <HeaderBar />
    <div class="content">
      <RouterView />
    </div>
    <FooterBar />
    <RusselPopup />
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content {
  flex: 1;
}
</style>
