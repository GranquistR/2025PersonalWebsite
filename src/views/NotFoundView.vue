<template>
  <div class="not-found flex flex-row justify-content-center align-items-center gap-6">
    <img src="/images/mr-bean-lost.gif" alt="404" class="w-3 hidden lg:block xl:block" />
    <div class="flex max-w-20rem flex-column justify-content-start">
      <h1 class="text-6xl">OOPS! PAGE <br />NOT FOUND</h1>
      <p class="text-xl">
        This page does not exist. Please contact me if you think this may be a mistake.
      </p>
      <RouterLink to="/">
        <Button
          type="button"
          label="Take Me Home"
          icon="pi pi-home"
          class="p-button-raised p-button-rounded"
        />
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Button } from 'primevue'
</script>

<style scoped>
.not-found {
  height: 57vh;
}
</style>
