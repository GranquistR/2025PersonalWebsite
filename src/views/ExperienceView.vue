<template>
  <h1 class="text-5xl font-bold my-0 ml-8">Experience</h1>
  <div class="realign-center">
    <Timeline :value="experiences">
      <template #marker="slotProps">
        <i :class="slotProps.item.icon"></i>
      </template>
      <!-- <template #opposite="slotProps">
        <small class="text-surface-500 dark:text-surface-400">{{ slotProps.item.date }}</small>
      </template> -->
      <template #content="slotProps">
        <Card class="mb-8 center-card">
          <template #title>
            <div class="text-2xl font-bold">
              {{ slotProps.item.title }} <span class="text-lg font-semibold">--</span>
              {{ slotProps.item.company }}
            </div>
          </template>
          <template #subtitle>
            <span class="border-right-1 pr-2 mr-1">
              {{ slotProps.item.location }}
            </span>
            {{ slotProps.item.date }}
          </template>
          <template #content>
            <ul>
              <li v-for="(description, index) in slotProps.item.descriptions" :key="index">
                {{ description }}
              </li>
            </ul>
          </template>
        </Card>
      </template>
    </Timeline>
  </div>
</template>
<script setup lang="ts">
import Timeline from 'primevue/timeline'
import Card from 'primevue/card'
const experiences = [
  {
    title: 'Associate Software Developer',
    company: 'Sentry Insurance',
    date: 'June 2023 - Dec 2024',
    location: 'Stevens Point, WI',
    descriptions: [
      'Performed full-stack development for web and batch applications, ensuring high-quality software solutions.',
      'Rewrote legacy applications from VB .NET Framework to C# .NET Core, modernizing codebases for enhanced performance and maintainability.',
      'Converted legacy VBHTML web pages to Vue 3, improving front-end scalability and user experience.',
      'Independently migrated and deployed three critical batch applications from .NET Framework to .NET Core, optimizing system efficiency and reliability while keeping functionality.',
    ],
    icon: 'pi pi-briefcase',
  },
  {
    title: 'Helpdesk Technician',
    company: 'University of Wisconsin-Stout',
    date: 'Jan 2023 - Aug 2023',
    location: 'Menomonie, WI',
    descriptions: [
      'Delivered comprehensive technical support and troubleshooting for students and staff, ensuring prompt resolution of hardware and software issues.',
      'Provided assistance in person at the physical help desk, over the phone, and through on-site visits to offices, maintaining a high standard of customer service.',
      'Diagnosed and resolved diverse technical issues, contributing to improved IT efficiency and user satisfaction.',
    ],
    icon: 'pi pi-desktop',
  },
  {
    title: 'Lifeguard',
    company: 'YMCA',
    date: 'Jun 2019 - June 2021',
    location: 'Shoreview, MN',
    descriptions: [
      'Maintained constant vigilance over swimmers, enforcing safety rules and responding to emergencies to ensure a safe swimming environment.',
      'Provided first aid and CPR as needed, demonstrating quick thinking and effective communication skills in high-pressure situations.',
      'Collaborated with team members to ensure the pool area was clean and organized, contributing to a positive experience for all patrons.',
    ],
    icon: 'pi pi-plus',
  },
]
</script>

<style scoped></style>

<style>
.p-timeline-event-opposite {
  flex: none !important;
}
</style>
