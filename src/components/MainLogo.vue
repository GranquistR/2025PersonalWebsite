<template>
  <div class="flex flex-row align-items-center">
    <div class="logo-text">
      <div class="logo-offset">RG</div>
    </div>
    <div class="text ml-4">Portfolio</div>
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue'
</script>

<style scoped>
.logo-text {
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--p-primary-color);
  line-height: 1;
  border-bottom: 5px solid var(--p-primary-color);
}

.text {
  font-size: 1.3rem;
  font-weight: bold;
  color: var(--p-primary-color);
}
</style>
