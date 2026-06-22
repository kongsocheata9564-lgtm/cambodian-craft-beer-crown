<template>
  <div class="min-h-screen bg-[#F8F6F2] p-4">
    <div class="max-w-6xl mx-auto bg-white border shadow-lg rounded-md">

      <!-- HERO -->
      <section class="p-8">

        <h1 class="text-4xl font-black uppercase leading-tight">
          Cambodian Craft Beer
        </h1>

        <h2 class="text-4xl font-black text-blue-700 uppercase mb-6">
          Crown 2025
        </h2>

        <p class="uppercase text-sm mb-1">
          Join us for Cambodia's premier craft beer competition featuring
        </p>

        <p class="text-blue-700 font-bold uppercase mb-8">
          11 Exceptional Breweries
          <span class="text-black font-normal">competing for the crown.</span>
        </p>

        <!-- Event Info -->
        <div class="bg-blue-50 border w-auto p-6 shadow-sm space-y-5 rounded-md shadow-lg">

          <div class="flex gap-4 items-center">
            <i ref="calendarIcon" class="fa-regular fa-calendar-check text-blue-700 text-xl"></i>
            <span class="font-bold uppercase">August 16, 2025</span>
          </div>

          <div class="flex gap-4 items-center">
            <i ref="clockIcon" class="fa-regular fa-clock text-blue-700 text-xl"></i>
            <span class="font-bold uppercase">2:00 PM - 11:30 PM</span>
          </div>

          <div class="flex gap-4 items-center">
            <i ref="locationIcon" class="fa-solid fa-location-dot text-blue-700 text-xl"></i>
            <span class="font-bold uppercase">
              Botanico Craft Beer Garden<br />
              Street 29, Phnom Penh
            </span>
          </div>

        </div>

        <br><br>

        <!-- Vote Button -->
        <a 
          href=""
          class="inline-block bg-blue-700 hover:bg-cyan-600 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-white px-8 py-4 font-bold uppercase rounded-md shadow-lg hover:shadow-xl"
        >
          <i ref="voteIcon" class="fa-solid fa-check-to-slot"></i> Judge Here
        </a>

      </section>
    </div>

    <!-- Cards -->
    <section class="max-w-6xl mx-auto grid gap-[15px] md:grid-cols-3 pt-[30px] pb-[50px]">

      <div class="p-6 border bg-white rounded-md hover:scale-105 transition duration-300 shadow-lg">
        <h3 class="uppercase font-black text-blue-700 text-xl mb-4 flex items-center gap-2">
          <i ref="breweryIcon" class="fa-solid fa-beer-mug-empty text-blue-700"></i>
          Meet the Breweries
        </h3>
        <p class="text-sm mb-4">
          Discover 11 incredible breweries from<br>
          across Cambodia and learn their<br>
          unique stories.
        </p>
        <a href="" class="text-blue-700 font-bold uppercase">Learn More -></a>
      </div>

      <div class="p-6 border bg-white rounded-md hover:scale-105 transition duration-300 shadow-lg">
        <h3 class="uppercase font-black text-blue-700 text-xl mb-4 flex items-center gap-2">
          <i ref="timetableIcon" class="fa-solid fa-music text-blue-700"></i>
          Event Timetable
        </h3>
        <p class="text-sm mb-4">
          Check out the live music, DJ sets, and<br>
          award ceremonies scheduled<br>
          throughout the day.
        </p>
        <a href="" class="text-blue-700 font-bold uppercase">Learn More -></a>
      </div>

      <div class="p-6 border bg-white rounded-md hover:scale-105 transition duration-300 shadow-lg">
        <h3 class="uppercase font-black text-blue-700 text-xl mb-4 flex items-center gap-2">
          <i ref="awardsIcon" class="fa-solid fa-trophy text-blue-700"></i>
          Awards
        </h3>
        <p class="text-sm mb-4">
          Learn about the Main Award, People's<br>
          Choice Award, and Brewer's Choice<br>
          Award.
        </p>
        <a href="" class="text-blue-700 font-bold uppercase">Learn More -></a>
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
    bounce(calendarIcon.value,  2000),  // calendar bounces
    spin(clockIcon.value,       3000),  // clock spins
    shake(locationIcon.value,   2500),  // location shakes
    pulse(voteIcon.value,       1800),  // vote button icon pulses
    swing(breweryIcon.value,    2200),  // beer mug swings
    float(timetableIcon.value,  2000),  // music note floats
    spin(awardsIcon.value,      4000),  // trophy spins slowly
  ]
})

onUnmounted(() => {
  intervals.forEach(clearInterval)
})
</script>