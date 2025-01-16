<template>
  <div
    class="flex justify-content-around align-items-center align-content-center pt-2 pb-1 fixed w-full"
    :style="{
      backdropFilter: atTop ? 'none' : 'blur(8px)',
      borderBottom: atTop ? 'none' : 'solid 1px #3f3f46',
    }"
  >
    <div class="header-offset">
      <MainLogo />
    </div>
    <div class="gap-3 hidden lg:flex xl:flex">
      <Button
        v-for="link in links"
        :label="link.label"
        severity="secondary"
        variant="text"
        :icon="link.icon"
      />
    </div>
    <div class="flex gap-3 header-offset">
      <!-- <Button icon="pi pi-search" severity="contrast" variant="outlined" rounded /> -->
      <DarkModeToggle class="hidden lg:block xl:block" />
      <Drawer v-model:visible="menuVisible" position="right" class="w-full lg:w-30rem xl:w-30rem">
        <!-- <template #header>
          
        </template>
        <div class="flex flex-column gap-3">
          <Button v-for="link in links" :label="link.label" severity="secondary" />
        </div> -->
        <template #container="{ closeCallback }">
          <div class="w-full flex justify-content-center align-items-center flex-wrap mt-3 gap-3">
            <MainLogo />
            <DarkModeToggle />
            <Button
              icon="pi pi-times"
              rounded
              outlined
              severity="contrast"
              @click="closeCallback"
            />
          </div>

          <div class="flex flex-column gap-3 m-3 justify-content-start">
            <Button
              v-for="link in links"
              :label="link.label"
              severity="secondary"
              outlined
              :icon="link.icon"
            />
          </div>
        </template>
      </Drawer>
      <Button icon="pi pi-bars" @click="menuVisible = true" />
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
import DarkModeToggle from './DarkModeToggle.vue'

const menuVisible = ref(false)
const atTop = ref(true)

const links = ref([
  { label: 'Home', url: '/', icon: 'pi pi-home' },
  { label: 'About Me', url: '/about', icon: 'pi pi-user' },
  { label: 'Projects', url: '/projects', icon: 'pi pi-folder' },
  { label: 'Work Experience', url: '/work-experience', icon: 'pi pi-briefcase' },
  { label: 'Tools', url: '/tools', icon: 'pi pi-cog' },
  { label: 'Contact', url: '/contact', icon: 'pi pi-envelope' },
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
