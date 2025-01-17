<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderBar from './components/Header/HeaderBar.vue'
import RusselPopup from './components/Home/RusselPopup.vue'
import FooterBar from '@/components/FooterBar.vue'
</script>

<template>
  <HeaderBar />
  <RouterView />
  <FooterBar />

  <RusselPopup />
</template>
