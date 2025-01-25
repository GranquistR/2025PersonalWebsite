<template>
  <h1 class="text-5xl font-bold my-0 ml-8">Projects</h1>

  <div v-for="(project, index) in projects" :key="project.title">
    <div
      :class="{
        'flex flex-column lg:flex-row xl:flex-row gap-5 align-items-center justify-content-center m-3':
          index % 2 !== 1,
        'flex flex-column lg:flex-row-reverse xl:flex-row-reverse gap-5 align-items-center justify-content-center m-3':
          index % 2 !== 0,
      }"
    >
      <img :src="project.image" alt="project.title" class="w-full lg:w-5 xl:w-5" />
      <div>
        <h1 class="text-5xl font-bold flex align-items-center gap-3 mb-0">
          {{ project.title }}
          <a :href="project.url" target="_blank">
            <Button text icon="pi pi-github text-4xl" severity="contrast" rounded />
          </a>
        </h1>
        <p>{{ project.date }}</p>
        <p
          class="descriptions"
          v-for="(description, index) in project.descriptionSections"
          :key="index"
        >
          {{ description }}
        </p>
      </div>
    </div>
    <Divider v-if="index !== projects.length - 1" />
  </div>
</template>

<script setup lang="ts">
import { Button } from 'primevue'
import { Divider } from 'primevue'
const projects = [
  {
    title: 'PixelPainter',
    descriptionSections: [
      `PixelPainter is a web-based pixel art editor designed for creating and sharing pixel art. Built with Vue.js
    and .NET Core, the application leverages GitHub Actions for a seamless CI/CD pipeline. Users can securely log in using their
    Google accounts to create and manage their artwork.`,

      `Artworks can be uploaded as either public, allowing them to be showcased in the gallery for all users to view, or private,
    ensuring they are visible only to the creator. Users can engage with the community by liking and commenting on art pieces,
    replying to comments, and managing their own contributions, including likes, comments, and uploaded art.`,

      `I pitched and led this project during my final semester at the University of Wisconsin-Stout as part two of Dr. Thomas's
       Software two-part Engineering Practicum course. Collaborating with a team of five other developers, we worked together to
       create this project over the course of the semester. Easily the project I am most proud of.`,
    ],
    date: 'Sep 2024 - Dec 2024',
    image: '/public/images/PixelPainter.png',
    url: 'https://github.com/GranquistR/Pixel-Painter',
  },
  {
    title: 'SpaceBox',
    descriptionSections: [
      `SpaceBox is a web application that allows users to design and model their own 2D solar systems. Using Pixi.js, users can
      easily drag and drop planets into space, customizing each one by selecting options such as planet type, size, color, and
      the presence of rings.`,

      `Once created, users can upload their solar systems to share with others on the platform. Users have full control over
      their creations, including the ability to edit, delete, and view the solar systems of other users. `,

      `I pitched and led this project during the first part of Dr. Thomas's two-part Software Engineering Practicum course.
      This experience allowed me to share my passion for Vue.js and .NET web development with my team while guiding the
      project to success.`,
    ],
    date: 'Jan 2024 - May 2024',
    image: '/public/images/SpaceBox.png',
    url: 'https://github.com/GranquistR/SolarSystemManager',
  },
]
</script>

<style scoped>
.descriptions {
  max-width: 50rem;
}
img {
  border: solid 1px #3f3f46;
  border-radius: 10px;
}
</style>
