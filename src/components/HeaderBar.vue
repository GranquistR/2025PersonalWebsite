<template>
  <div class="flex justify-content-around flex-wrap my-3">
    <div>
      <MainLogo />
    </div>
    <div class="gap-3 hidden lg:flex xl:flex">
      <Button v-for="link in links" :label="link.label" severity="secondary" variant="text" />
    </div>
    <div>
      <Button icon="pi pi-search" severity="secondary" variant="text" />
      <Drawer v-model:visible="menuVisible" position="right" class="w-full lg:w-min xl:w-min">
        <template #header>
          <div class="w-full flex justify-content-center flex-wrap">
            <MainLogo />
          </div>
        </template>
        <div class="flex flex-column gap-3">
          <Button v-for="link in links" :label="link.label" severity="secondary" />
        </div>
      </Drawer>
      <Button icon="pi pi-bars" @click="menuVisible = true" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MainLogo from '../components/MainLogo.vue'
import { Button } from 'primevue'
import { Drawer } from 'primevue'

const menuVisible = ref(false)

const links = ref([
  { label: 'Home', url: '/' },
  { label: 'About Me', url: '/about' },
  { label: 'Projects', url: '/projects' },
  { label: 'Work Experience', url: '/work-experience' },
  { label: 'Tools', url: '/tools' },
  { label: 'Contact', url: '/contact' },
])
</script>
