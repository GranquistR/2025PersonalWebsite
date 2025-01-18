<template>
  <Panel :class="['w-full', 'max-w-25rem']">
    <template #header>
      <div class="flex flex-column gap-3">
        <i :class="panelDetails.icon + ' text-2xl'" :style="{ color: panelDetails.color }"></i>
        <div class="font-semibold text-lg">
          {{ panelDetails.title }}
        </div>
      </div>
    </template>
    {{ panelDetails.content }}
    <slot></slot>
  </Panel>
</template>
<script setup lang="ts">
import Panel from 'primevue/panel'
defineProps<{
  panelDetails: {
    title: string
    content: string
    icon: string
    color: string
  }
}>()
</script>
