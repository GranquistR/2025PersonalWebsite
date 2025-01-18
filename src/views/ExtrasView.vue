<template>
  <h1 class="text-5xl font-bold my-0 ml-8">Extras</h1>

  <div class="flex flex-wrap justify-content-center gap-3">
    <InfoPanel v-for="panel in panels" :key="panel.title" :panelDetails="panel">
      <div class="mt-3">
        <RouterLink :to="'extras' + panel.url">
          <Button label="View" icon="pi pi-eye" />
        </RouterLink>
      </div>
    </InfoPanel>
  </div>
</template>

<script setup lang="ts">
import InfoPanel from '@/components/InfoPanel.vue'
import Button from 'primevue/button'
import { RouterLink } from 'vue-router'
const panels = [
  {
    title: 'Piano Key Practice',
    content: 'Gives a random note and hand to play on the piano',
    icon: 'pi pi-headphones',
    color: 'Coral',
    url: '/piano-key-practice',
  },
]
</script>
