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
    src: '/images/Gallery/ApolloPrint.jpg',
    alt: 'My 3d print of Apollo from Boneworks',
  },
  { src: '/images/Gallery/BikeRide.jpg', alt: 'Bike ride with the folks' },
  { src: '/images/Gallery/Bingo.jpg', alt: 'Bingo at the Sentry Picnic' },
  {
    src: '/images/Gallery/ChalkArt.jpg',
    alt: 'My sister, her husband, and me at a chalk art show',
  },
  { src: '/images/Gallery/Climb.jpg', alt: 'Climbing with the Sentry Crew' },
  { src: '/images/Gallery/DND.jpg', alt: 'DnD night with the boys' },
  {
    src: '/images/Gallery/FirstFlight.jpg',
    alt: 'My first flight with a fullsize-ish quad',
  },
  { src: '/images/Gallery/FPVDay.jpg', alt: 'Chill day out flying FPV' },
  { src: '/images/Gallery/FPVMe.jpg', alt: 'My first flight with headset' },
  {
    src: '/images/Gallery/Graduation.jpg',
    alt: 'Celebrating my graduation with my siblings',
  },
  {
    src: '/images/Gallery/HighschoolVisit.jpg',
    alt: 'Visiting highschool after college graduation',
  },
  { src: '/images/Gallery/IceCream.jpg', alt: 'McDonalds icecream with mom' },
  { src: '/images/Gallery/LittleGuy.jpg', alt: 'Me and a 3d model of my best friend' },
  {
    src: '/images/Gallery/LogChute.jpg',
    alt: 'About to ride the logchute at the MOA with mom',
  },
  { src: '/images/Gallery/Minis.jpg', alt: 'My 3dprinted and painted minis' },
  { src: '/images/Gallery/MyGrinderinoBuild.jpg', alt: 'My 3.5 inch grinderino build' },
  {
    src: '/images/Gallery/NoFlowCrew.jpg',
    alt: 'The Northern Flow crew ripping a few packs',
  },
  { src: '/images/Gallery/School.jpg', alt: 'My last time being dropped off at stout' },
  { src: '/images/Gallery/TrumpTrain.jpg', alt: 'Me and mom at the trump bus' },
  {
    src: '/images/Gallery/UnderBridge.jpg',
    alt: 'Under the bridge photoshoot with the sentry crew',
  },
  {
    src: '/images/Gallery/Unstuck.jpg',
    alt: 'Celebration after getting my quad stuck in a tree...',
  },
  { src: '/images/Gallery/VicRoy.jpg', alt: '#1 Victory Royale' },
  {
    src: '/images/Gallery/WeddingSiblings.jpg',
    alt: 'My siblings and I at my cousins wedding',
  },
]
</script>
