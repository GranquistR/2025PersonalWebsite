<template>
  <Divider />
  <div class="flex flex-wrap justify-content-evenly p-4 mb-6">
    <div class="text-xl py-4">
      Site Links
      <div class="links w-min">
        <RouterLink :to="link.url" v-for="link in links" :key="link.label">
          <Button class="w-10rem" text severity="secondary" :label="link.label" />
        </RouterLink>
      </div>
    </div>
    <div class="text-xl py-4">
      Made with
      <div class="flex flex-wrap mt-3 gap-5">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
          alt="Vue.js"
          class="h-5rem"
        />
        <img
          src="https://i2.wp.com/www.primefaces.org/wp-content/uploads/2019/12/primevue-logo.png?fit=300%2C300&ssl=1"
          alt="PrimeVue"
          class="h-5rem"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png"
          alt="Typescript"
          class="h-5rem"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/800px-Visual_Studio_Code_1.35_icon.svg.png"
          alt="Visual Studio Code"
          class="h-5rem"
        />
      </div>
    </div>
    <div class="text-xl py-4">
      Connect

      <div class="flex flex-column m-3">
        <a href="https://github.com/GranquistR" target="_blank">
          <Button icon="pi pi-github" text severity="secondary" label="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/ryangranquist/" target="_blank">
          <Button icon="pi pi-linkedin" text severity="secondary" label="LinkedIn" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider'
import { Button } from 'primevue'
import { getLinks } from '@/utils/getLinks'
import { RouterLink } from 'vue-router'

const links = getLinks()
</script>

<style scoped>
.links {
  text-wrap: nowrap;
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 5rem;
}

.p-button {
  justify-content: flex-start;
}
</style>
