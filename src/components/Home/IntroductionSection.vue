<template>
    <div
      class="welcome-box flex flex-column lg:flex-row xl:flex-row justify-content-center align-items-center"
    >
      <img
        src="/src/assets/images/SelfPortrait.jpg"
        alt="Me at a wedding in Arizona"
        class="image lg:mr-8 xl:mr-8 mb-5 lg:mb-0 xl:mb-0"
      />
      <div class="flex flex-column justify-content-center align-items-center lg:ml-8 xl:ml-8">
        <p class="m-0">Hello, I'm,</p>
        <h1 class="m-0">Ryan Granquist</h1>
        <h3 class="m-0">Software Developer</h3>
        <div class="flex gap-3 mt-3">
          <Button label="Resume" icon="pi pi-download" outlined severity="contrast" rounded />
          <Button label="Contact" icon="pi pi-envelope" severity="contrast" rounded />
        </div>
      </div>
    </div>
  </template>
  <script setup lang="ts">
  import { Button } from 'primevue'
  </script>
  
  <style scoped>
  .image {
    border-radius: 50%;
    height: 25rem;
    width: 25rem;
    /* prevent image stretch */
    object-fit: cover;
  }
  
  .welcome-box {
    margin-top: 15vh;
  }
  </style>
  