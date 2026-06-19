<template>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
  <header class="bg-white shadow mt-0">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">

      <h1 class="font-bold text-xl">
        <img src="https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.07e4da29.png&w=48&q=75" alt="Cambodian Craft Beer Crown" class="h-16 inline-block mr-2">
        <img src="https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo2.a6493b4b.png&w=48&q=75" alt="Cambodian Craft Beer Crown" class="h-16 inline-block">
      </h1>

      <nav class="flex gap-8 text-lg ">
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold" to="/">
            <span class="">Home</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold" to="/breweries">
            <span class="">Breweries</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold" to="/schedules">
            <span class="">Schedules</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold" to="/beers">
            <span class="">Beers</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold" to="/awards">
            <span class="">Awards</span>
        </NuxtLink>
        <NuxtLink class="border-b-2 border-transparent hover:border-[#1DA4BF]" active-class="font-bold" to="/sponsors">
            <span class="">Sponsors</span>
        </NuxtLink>
      </nav>

      <button class="bg-[#1DA4BF] text-white px-6 py-2 rounded-lg hover:bg-[#1DA4BF] hover:scale-105 transition-all duration-200">
        <i class="fa-regular fa-calendar-check"></i>
        <h2 class="inline-block ml-2 text-xl">Votes</h2>
      </button>

    </div>
  </header>
</template>