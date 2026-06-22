<template>
  <div class="min-h-screen bg-[#F8F6F2] p-4">
    <div class="max-w-6xl mx-auto bg-white border shadow-lg rounded-md">

      <!-- HERO -->
      <section class="p-8">

        <h1 class="text-4xl font-black uppercase leading-tight">
          Cambodian Craft Beer
        </h1>

        <h2 class="text-4xl font-black text-sky-500 uppercase mb-6">
          Crown 2025
        </h2>

        <p class="uppercase text-sm mb-1">
          Join us for Cambodia's premier craft beer competition featuring
        </p>

        <p class="text-sky-500 font-bold uppercase mb-8">
          11 Exceptional Breweries
          <span class="text-black font-normal">competing for the crown.</span>
        </p>

       <!-- Event Info -->
<div class="bg-gradient-to-br from-blue-50 to-white border border-blue-100 p-6 rounded-2xl shadow-md space-y-4">

  <!-- Date -->
  <div class="flex items-center gap-4 group">
    <div class="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      <i ref="calendarIcon" class="fa-regular fa-calendar-check text-white text-lg"></i>
    </div>
    <div>
      <p class="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-0.5">Date</p>
      <p class="font-black uppercase text-gray-800 tracking-wide">August 16, 2025</p>
    </div>
  </div>

  <div class="border-t border-blue-100"></div>

  <!-- Time -->
  <div class="flex items-center gap-4 group">
    <div class="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      <i ref="clockIcon" class="fa-regular fa-clock text-white text-lg"></i>
    </div>
    <div>
      <p class="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-0.5"> Time </p>
      <p class="font-black uppercase text-gray-800 tracking-wide"> 2:00 PM -- 11:30 PM </p>
    </div>
  </div>

  <div class="border-t border-blue-100"></div>

  <!-- Location -->
  <div class="flex items-center gap-4 group">
    <div class="w-12 h-12 rounded-xl bg-sky-500 flex items-center justify-center shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
      <i ref="locationIcon" class="fa-solid fa-location-dot text-white text-lg"></i>
    </div>
    <div>
      <p class="text-xs text-blue-400 uppercase tracking-widest font-semibold mb-0.5"> Venue </p>
      <p class="font-black uppercase text-gray-800 tracking-wide leading-snug">
        Botanico Craft Beer Garden <br>
        <span class="font-normal text-gray-500 normal-case text-sm"> Street 29, Phnom Penh </span>
      </p>
    </div>
  </div>

</div>

        <br><br>

        <!-- Vote Button -->
        <a 
          href="https://docs.google.com/forms/d/e/1FAIpQLScEjueBWitDWygOZkaHDnkADWIHhYdgZ-lH_u3EvKM2RzL1AA/viewform"
          target="blank" class="inline-block bg-sky-500 hover:bg-sky-600 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-white px-8 py-4 font-bold uppercase rounded-md shadow-lg hover:shadow-xl"
        >
          <i ref="voteIcon" class="fa-solid fa-check-to-slot"></i> Judge Here
        </a>

      </section>
    </div>

    <!-- Cards -->
    <section class="max-w-6xl mx-auto grid gap-[15px] md:grid-cols-3 pt-[30px] pb-[50px]">

      <div class="p-6 border bg-white rounded-md hover:scale-105 transition duration-300 shadow-lg">
        <h3 class="uppercase font-black text-sky-500 text-xl mb-4 flex items-center gap-2">
          <i ref="breweryIcon" class="fa-solid fa-beer-mug-empty text-sky-500"></i>
          Meet the Breweries
        </h3>
        <p class="text-sm mb-4">
          Discover 11 incredible breweries from<br>
          across Cambodia and learn their<br>
          unique stories.
        </p>
        <a href="./breweries" class="text-sky-500 font-bold uppercase hover:text-sky-600"> Learn More -> </a>
      </div>

      <div class="p-6 border bg-white rounded-md hover:scale-105 transition duration-300 shadow-lg">
        <h3 class="uppercase font-black text-sky-500 text-xl mb-4 flex items-center gap-2">
          <i ref="timetableIcon" class="fa-solid fa-music text-sky-500"></i>
          Event Timetable
        </h3>
        <p class="text-sm mb-4">
          Check out the live music, DJ sets, and<br>
          award ceremonies scheduled<br>
          throughout the day.
        </p>
        <a href="./breweries" class="text-sky-500 font-bold uppercase hover:text-sky-600"> Learn More -> </a>
      </div>

      <div class="p-6 border bg-white rounded-md hover:scale-105 transition duration-300 shadow-lg">
        <h3 class="uppercase font-black text-sky-500 text-xl mb-4 flex items-center gap-2">
          <i ref="awardsIcon" class="fa-solid fa-trophy text-sky-500"></i>
          Awards
        </h3>
        <p class="text-sm mb-4">
          Learn about the Main Award, People's<br>
          Choice Award, and Brewer's Choice<br>
          Award.
        </p>
        <a href="./breweries" class="text-sky-500 font-bold uppercase hover:text-sky-600"> Learn More -> </a>
      </div>

    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const calendarIcon  = ref(null)
const clockIcon     = ref(null)
const locationIcon  = ref(null)
const voteIcon      = ref(null)
const breweryIcon   = ref(null)
const timetableIcon = ref(null)
const awardsIcon    = ref(null)

// --- animation helpers ---

// bounces up and down
function bounce(el, intervalMs = 2000) {
  return setInterval(() => {
    el.style.transition = 'transform 0.3s ease'
    el.style.transform  = 'translateY(-6px)'
    setTimeout(() => { el.style.transform = 'translateY(0)' }, 300)
  }, intervalMs)
}

// spins 360°
function spin(el, intervalMs = 3000) {
  return setInterval(() => {
    el.style.transition = 'transform 0.6s ease'
    el.style.transform  = 'rotate(360deg)'
    setTimeout(() => {
      el.style.transition = 'none'
      el.style.transform  = 'rotate(0deg)'
    }, 650)
  }, intervalMs)
}

// shakes left and right
function shake(el, intervalMs = 2500) {
  return setInterval(() => {
    const keyframes = [
      { transform: 'translateX(0)'    },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)'  },
      { transform: 'translateX(-5px)' },
      { transform: 'translateX(5px)'  },
      { transform: 'translateX(0)'    },
    ]
    el.animate(keyframes, { duration: 400, easing: 'ease' })
  }, intervalMs)
}

// pulses (scale up and back)
function pulse(el, intervalMs = 1800) {
  return setInterval(() => {
    el.style.transition = 'transform 0.3s ease'
    el.style.transform  = 'scale(1.4)'
    setTimeout(() => { el.style.transform = 'scale(1)' }, 300)
  }, intervalMs)
}

// swings like a pendulum
function swing(el, intervalMs = 2200) {
  return setInterval(() => {
    const keyframes = [
      { transform: 'rotate(0deg)'   },
      { transform: 'rotate(-20deg)' },
      { transform: 'rotate(20deg)'  },
      { transform: 'rotate(-10deg)' },
      { transform: 'rotate(10deg)'  },
      { transform: 'rotate(0deg)'   },
    ]
    el.animate(keyframes, { duration: 500, easing: 'ease-in-out' })
  }, intervalMs)
}

// floats smoothly up and down
function float(el, intervalMs = 2000) {
  return setInterval(() => {
    const keyframes = [
      { transform: 'translateY(0px)'  },
      { transform: 'translateY(-8px)' },
      { transform: 'translateY(0px)'  },
    ]
    el.animate(keyframes, { duration: 1000, easing: 'ease-in-out' })
  }, intervalMs)
}

let intervals = []

onMounted(() => {
  intervals = [
    bounce(calendarIcon.value,  2000),
    spin(clockIcon.value,       3000),
    shake(locationIcon.value,   2500),
    pulse(voteIcon.value,       1800),
    swing(breweryIcon.value,    2200),
    float(timetableIcon.value,  2000),
    spin(awardsIcon.value,      4000),
  ]
})

onUnmounted(() => {
  intervals.forEach(clearInterval)
})
</script>