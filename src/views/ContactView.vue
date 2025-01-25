<template>
  <div class="flex flex-row justify-content-center align-items-stretch flex-wrap gap-3 mt-4">
    <InfoPanel
      :panel-details="{
        title: 'Send me an email',
        content: 'Takes you to your email client to send me an email',
        icon: 'pi pi-envelope',
        color: 'MediumSeaGreen',
      }"
    >
      <div class="flex flex-column m-3 gap-3">
        <a href="mailto:rmg61103@gmail.com" target="_blank">
          <Button label="rmg61103@gmail.com" severity="primary" icon="pi pi-envelope" />
        </a>
      </div>
    </InfoPanel>
    <InfoPanel
      :panel-details="{
        title: 'My Socials',
        content: 'Take a look and see what I have been up to!',
        icon: 'pi pi-link',
        color: 'Coral',
      }"
    >
      <div class="flex flex-column m-3 gap-3">
        <a href="https://github.com/GranquistR" target="_blank">
          <Button icon="pi pi-github" severity="primary" label="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/ryangranquist/" target="_blank">
          <Button icon="pi pi-linkedin" severity="primary" label="LinkedIn" />
        </a>
      </div>
    </InfoPanel>
  </div>
</template>
<script setup lang="ts">
import InfoPanel from '@/components/InfoPanel.vue'
import Button from 'primevue/button'
</script>
