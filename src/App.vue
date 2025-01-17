<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HeaderBar from './components/Header/HeaderBar.vue'
import RusselPopup from './components/Home/RusselPopup.vue'
</script>

<template>
  <HeaderBar />
  <RouterView />
  <RusselPopup />
</template>
