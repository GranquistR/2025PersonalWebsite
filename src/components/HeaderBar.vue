<template>
  <div
    class="flex justify-content-around align-items-center align-content-center pt-2 pb-1 fixed w-full"
    :style="{
      backdropFilter: atTop ? 'none' : 'blur(8px)',
      borderBottom: atTop ? 'none' : 'solid 1px #3f3f46',
    }"
  >
    <div>
      <MainLogo />
    </div>
    <div class="gap-3 hidden lg:flex xl:flex">
      <Button v-for="link in links" :label="link.label" severity="secondary" variant="text" />
    </div>
    <div class="flex gap-3">
      <Button icon="pi pi-search" severity="secondary" variant="outlined" rounded />
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
      <Button icon="pi pi-bars" @click="menuVisible = true" variant="outlined" />
    </div>
  </div>
  <div class="spacer"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import MainLogo from '../components/MainLogo.vue'
import { Button } from 'primevue'
import { Drawer } from 'primevue'
import { onScroll } from '@/utils/onScroll'

const menuVisible = ref(false)
const atTop = ref(true)

const links = ref([
  { label: 'Home', url: '/' },
  { label: 'About Me', url: '/about' },
  { label: 'Projects', url: '/projects' },
  { label: 'Work Experience', url: '/work-experience' },
  { label: 'Tools', url: '/tools' },
  { label: 'Contact', url: '/contact' },
])

onScroll(() => {
  atTop.value = window.scrollY == 0
})
</script>

<style scoped>
.spacer {
  height: 4rem;
}
</style>
