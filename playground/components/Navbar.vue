<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <header class="bg-white shadow relative z-50">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <!-- Hamburger button (mobile only) - comes first visually on mobile -->
      <button
        class="order-1 md:order-2 md:hidden bg-[#1DA4BF] text-white w-10 h-10 rounded-lg flex items-center justify-center"
        @click="menuOpen = !menuOpen"
      >
        <i :class="menuOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'" class="text-lg"></i>
      </button>

      <h1 class="order-2 md:order-1 font-bold text-xl flex items-center">
        <img src="https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.07e4da29.png&w=48&q=75" alt="Cambodian Craft Beer Crown" class="h-12 md:h-16 inline-block mr-2">
        <img src="https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.a6493b4b.png&w=48&q=75" alt="Cambodian Craft Beer Crown" class="h-12 md:h-16 inline-block">
      </h1>

      <!-- Desktop nav -->
      <nav class="order-3 hidden md:flex gap-8 text-lg">
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold text-[#1DA4BF]" to="/">
          <p class="inline-block"><i class="fa-solid fa-house"></i></p>
          <span class="ml-3">Home</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold text-[#1DA4BF]" to="/breweries">
          <p class="inline-block"><i class="fa-solid fa-beer-mug-empty"></i></p>
          <span class="ml-3">Breweries</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold text-[#1DA4BF]" to="/schedules">
          <p class="inline-block"><i class="fa-solid fa-calendar-days"></i></p>
          <span class="ml-3">Schedules</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold text-[#1DA4BF]" to="/beers">
          <p class="inline-block"><i class="fa-brands fa-untappd"></i></p>
          <span class="ml-3">Beers</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold text-[#1DA4BF]" to="/awards">
          <p class="inline-block"><i class="fa-solid fa-award"></i></p>
          <span class="ml-3">Awards</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold text-[#1DA4BF]" to="/sponsors">
          <p class="inline-block"><i class="fa-solid fa-globe"></i></p>
          <span class="ml-3">Sponsors</span>
        </NuxtLink>
      </nav>

      <!-- Desktop vote button -->
      <button class="order-4 hidden md:inline-block bg-orange-400 text-white px-6 py-2 rounded-lg hover:bg-orange-400 hover:scale-105 transition-all duration-200">
        <i class="fa-regular fa-calendar-check"></i>
        <h2 class="inline-block ml-2 text-xl">Judge</h2>
      </button>
    </div>

    <!-- Mobile dropdown menu -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="md:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-2xl mx-4 mt-1 overflow-hidden"
      >

        <nav class="flex flex-col p-2">
          <NuxtLink
            v-for="item in navItems"
            :key="item.to"
            :to="item.to"
            class="flex items-center gap-3 px-4 py-3 rounded-lg text-gray-700 font-medium hover:bg-gray-100"
            active-class="bg-[#1DA4BF] text-white"
            @click="menuOpen = false"
          >
            <i :class="item.icon" class="w-5 text-center"></i>
            <span>{{ item.label }}</span>
          </NuxtLink>

          <button
            class="flex items-center gap-3 px-4 py-3 rounded-lg bg-orange-400 text-white font-medium mt-1"
            @click="menuOpen = false"
          >
            <i class="fa-regular fa-calendar-check w-5 text-center"></i>
            <span>Judge</span>
          </button>
        </nav>

        <div class="flex justify-center gap-6 py-4 border-t">
          <a href="#" class="text-gray-500 hover:text-[#1DA4BF]"><i class="fa-brands fa-linkedin text-xl"></i></a>
          <a href="#" class="text-gray-500 hover:text-[#1DA4BF]"><i class="fa-brands fa-github text-xl"></i></a>
          <a href="#" class="text-gray-500 hover:text-[#1DA4BF]"><i class="fa-solid fa-globe text-xl"></i></a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)

const navItems = [
  { label: 'Home', to: '/', icon: 'fa-solid fa-house' },
  { label: 'Breweries', to: '/breweries', icon: 'fa-solid fa-beer-mug-empty' },
  { label: 'Schedules', to: '/schedules', icon: 'fa-solid fa-calendar-days' },
  { label: 'Beers', to: '/beers', icon: 'fa-brands fa-untappd' },
  { label: 'Awards', to: '/awards', icon: 'fa-solid fa-award' },
  { label: 'Sponsors', to: '/sponsors', icon: 'fa-solid fa-globe' },
]
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>