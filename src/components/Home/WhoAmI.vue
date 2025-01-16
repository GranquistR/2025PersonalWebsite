<template>
  <div class="who-am-i mt-8 mb-5">
    <h1 class="text-center text-bold">Who Am I?</h1>
    <p class="text-xl text-center px-3">
      I am a results-driven Software Developer with two years of professional experience in
      full-stack web and batch development.
    </p>

    <div class="flex flex-wrap justify-content-center align-items-center gap-3">
      <Panel class="w-full max-w-25rem h-13rem" v-for="(panel, index) in panels" :key="index">
        <template #header>
          <div class="flex flex-column gap-3">
            <i :class="panel.icon + ' text-2xl'" :style="{ color: panel.color }"></i>
            <div class="font-semibold text-lg">
              {{ panel.title }}
            </div>
          </div>
        </template>
        {{ panel.content }}
      </Panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Panel } from 'primevue'

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
