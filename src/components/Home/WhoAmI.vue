<template>
  <div class="who-am-i mt-8 mb-5">
    <h1 class="text-center text-bold">Who Am I?</h1>
    <p class="text-xl text-center px-3">
      I am a results-driven Software Developer with two years of professional experience in
      full-stack web and batch development.
    </p>

    <div class="flex align-items-stretch flex-wrap justify-content-center gap-3">
      <InfoPanel v-for="panel in panels" :key="panel.title" :panelDetails="panel" />
    </div>
  </div>
</template>

<script setup lang="ts">
import InfoPanel from '@/components/InfoPanel.vue'
const panels = [
  {
    title: '6 Professional Projects',
    content:
      'In my professional work experience, I have worked on six diverse projects, including web and batch applications.',
    icon: 'pi pi-briefcase',
    color: 'CornflowerBlue',
  },
  {
    title: '3 School Projects',
    content:
      'During my studies, I led three semester-long projects developing web applications with teams of 5-6 developers.',
    icon: 'pi pi-book',
    color: 'Coral',
  },
  {
    title: 'Countless Personal Projects',
    content:
      'I have worked on countless personal projects, including developing this very website.',
    icon: 'pi pi-github',
    color: 'MediumSeaGreen',
  },
]
</script>

<style scoped>
h3 {
  color: var(--p-surface-300);
}

.card-border {
  border: solid 1px var(--p-button-outlined-secondary-border-color);
}
</style>
