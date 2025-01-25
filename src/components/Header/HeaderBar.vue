<template>
  <div
    class="flex justify-content-around align-items-center align-content-center fixed w-full z-1"
    :style="{
      backdropFilter: atTop ? 'none' : 'blur(8px)',
      borderBottom: atTop ? 'none' : 'solid 1px #3f3f46',
    }"
  >
    <div class="header-offset">
      <MainLogo text="Ryan Granquist" />
    </div>
    <div class="gap-3 hidden lg:flex xl:flex">
      <RouterLink :to="link.url" v-for="link in links" :key="link.label">
        <Button :label="link.label" severity="secondary" variant="text" :icon="link.icon" />
      </RouterLink>
    </div>
    <div class="flex gap-3 header-offset">
      <!-- <Button icon="pi pi-search" severity="contrast" variant="outlined" rounded /> -->
      <DarkModeToggle class="hidden lg:flex xl:flex" />
      <Drawer v-model:visible="menuVisible" position="right" class="w-full lg:w-30rem xl:w-30rem">
        <!-- <template #header>

        </template>
        <div class="flex flex-column gap-3">
          <Button v-for="link in links" :label="link.label" severity="secondary" />
        </div> -->
        <template #container="{ closeCallback }">
          <div class="w-full flex justify-content-center align-items-center flex-wrap mt-3 gap-3">
            <MainLogo text="Portfolio" />
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
            <RouterLink
              :to="link.url"
              v-for="link in links"
              :key="link.label"
              @click="closeCallback"
            >
              <Button
                :label="link.label"
                severity="secondary"
                outlined
                :icon="link.icon"
                class="w-full"
              />
            </RouterLink>
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
import MainLogo from './MainLogo.vue'
import { Button } from 'primevue'
import { Drawer } from 'primevue'
import { onScroll } from '@/utils/onScroll'
import { getLinks } from '@/utils/getLinks'
import DarkModeToggle from './DarkModeToggle.vue'

const menuVisible = ref(false)
const atTop = ref(true)

const links = getLinks()

onScroll(() => {
  atTop.value = window.scrollY == 0
})
</script>

<style scoped>
.spacer {
  height: 4rem;
}
</style>
