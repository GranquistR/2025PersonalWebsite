<template>
  <div class="mt-8 mb-8">
    <h1 class="text-center text-bold">What have I been up to?</h1>
    <p class="text-xl text-center px-3">
      Here is a little snippet of what I have been up to in my free time.
    </p>
    <ScrollingImages height="30rem" :images="images" />
  </div>
</template>

<script setup lang="ts">
import ScrollingImages from './ScrollingImages.vue'

const images = [
  {
    src: '/public/images//Gallery/ApolloPrint.jpg',
    alt: 'My 3d print of Apollo from Boneworks',
  },
  { src: '/public/images//Gallery/BikeRide.jpg', alt: 'Bike ride with the folks' },
  { src: '/public/images//Gallery/Bingo.jpg', alt: 'Bingo at the Sentry Picnic' },
  {
    src: '/public/images//Gallery/ChalkArt.jpg',
    alt: 'My sister, her husband, and me at a chalk art show',
  },
  { src: '/public/images//Gallery/Climb.jpg', alt: 'Climbing with the Sentry Crew' },
  { src: '/public/images//Gallery/DND.jpg', alt: 'DnD night with the boys' },
  {
    src: '/public/images//Gallery/FirstFlight.jpg',
    alt: 'My first flight with a fullsize-ish quad',
  },
  { src: '/public/images//Gallery/FPVDay.jpg', alt: 'Chill day out flying FPV' },
  { src: '/public/images//Gallery/FPVMe.jpg', alt: 'My first flight with headset' },
  {
    src: '/public/images//Gallery/Graduation.jpg',
    alt: 'Celebrating my graduation with my siblings',
  },
  {
    src: '/public/images//Gallery/HighschoolVisit.jpg',
    alt: 'Visiting highschool after college graduation',
  },
  { src: '/public/images//Gallery/IceCream.jpg', alt: 'McDonalds icecream with mom' },
  { src: '/public/images//Gallery/LittleGuy.jpg', alt: 'Me and a 3d model of my best friend' },
  {
    src: '/public/images//Gallery/LogChute.jpg',
    alt: 'About to ride the logchute at the MOA with mom',
  },
  { src: '/public/images//Gallery/Minis.jpg', alt: 'My 3dprinted and painted minis' },
  { src: '/public/images//Gallery/MyGrinderinoBuild.jpg', alt: 'My 3.5 inch grinderino build' },
  {
    src: '/public/images//Gallery/NoFlowCrew.jpg',
    alt: 'The Northern Flow crew ripping a few packs',
  },
  { src: '/public/images//Gallery/School.jpg', alt: 'My last time being dropped off at stout' },
  { src: '/public/images//Gallery/TrumpTrain.jpg', alt: 'Me and mom at the trump bus' },
  {
    src: '/public/images//Gallery/UnderBridge.jpg',
    alt: 'Under the bridge photoshoot with the sentry crew',
  },
  {
    src: '/public/images//Gallery/Unstuck.jpg',
    alt: 'Celebration after getting my quad stuck in a tree...',
  },
  { src: '/public/images//Gallery/VicRoy.jpg', alt: '#1 Victory Royale' },
  {
    src: '/public/images//Gallery/WeddingSiblings.jpg',
    alt: 'My siblings and I at my cousins wedding',
  },
]
</script>
