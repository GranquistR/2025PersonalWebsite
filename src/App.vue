<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/HeaderBar.vue'
import RusselPopup from './components/RusselPopup.vue'
</script>

<template>
  <HeaderBar />
  <RouterView />
  <RusselPopup />
</template>
