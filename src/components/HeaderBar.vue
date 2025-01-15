<template>
  <div class="flex justify-content-around flex-wrap my-3">
    <div class="equal-width">
      <MainLogo />
    </div>
    <div class="flex gap-3">
      <Button label="Home" severity="secondary" variant="text" />
      <Button label="About Me" severity="secondary" variant="text" />
      <Button label="Projects" severity="secondary" variant="text" />
      <Button label="Work Experience" severity="secondary" variant="text" />
      <Button label="Tools" severity="secondary" variant="text" />
      <Button label="Contact" severity="secondary" variant="text" />
    </div>
    <div class="equal-width">
      <Button icon="pi pi-search" severity="secondary" variant="text" />
      <Button icon="pi pi-bars" class="ml-2" />
    </div>
  </div>
</template>
<script setup lang="ts">
import MainLogo from '../components/MainLogo.vue'
import { Button } from 'primevue'
</script>

<style scoped>
.equal-width {
  width: 100px;
}
</style>
