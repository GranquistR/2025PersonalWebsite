<template>
  <Divider />
  <div class="flex flex-wrap justify-content-evenly p-8 mb-6">
    <div class="text-xl">
      Site Links
      <div class="links w-min">
        <Button
          class="w-10rem"
          text
          severity="secondary"
          v-for="link in links"
          :key="link.label"
          :label="link.label"
        />
      </div>
    </div>
    <div class="text-xl">
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
    <div class="text-xl">Connect

<div class="flex flex-column m-3">
    <Button
        icon="pi pi-github"
        text
        severity="secondary"
        label="GitHub"
    </Button>
    <Button
        icon="pi pi-linkedin"
        text
        severity="secondary"
        label="LinkedIn"
    </Button>

</div>

    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider'
import { Button } from 'primevue'
import { getLinks } from '@/utils/getLinks'

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
