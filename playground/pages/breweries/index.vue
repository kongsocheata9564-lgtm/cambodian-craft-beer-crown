<template>
  <section class="bg-[#F8F6F2] py-6 lg:py-8">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-6 lg:mb-8">
        <h2 class="text-4xl md:text-4xl font-black uppercase tracking-wide text-gray-900" style="font-family: 'Inter', sans-serif;">
          Featured Breweries
        </h2>

        <p class="mt-4 text-lg md:text-lg text-gray-600 max-w-3xl mx-auto" style="font-family: 'Inter', sans-serif;">
          Meet the artisans behind Cambodia's thriving craft beer scene.
        </p>

        <div class="w-28 h-1 bg-amber-700 rounded-full mx-auto mt-5"></div>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

        <div
          v-for="(brewery, index) in breweries"
          :key="brewery.name"
          :data-id="index"
          class="brew-card group bg-white rounded-xl border border-gray-200 hover:shadow-md transition-all duration-300 p-5 flex flex-col w-full"
        >

          <!-- Logo -->
          <div class="flex justify-center mb-4">
            <div class="w-20 h-20 rounded-full overflow-hidden border-2 border-amber-700 bg-white shadow-sm">
              <img
                :src="brewery.image"
                :alt="brewery.name"
                class="w-full h-full object-cover"
              />
            </div>
          </div>

          <!-- Name -->
          <h3
            class="text-center text-xl font-bold text-gray-900 mb-2 leading-tight transition-all duration-700"
            style="font-family: 'Inter', sans-serif;"
            :class="visibleItems.has(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'"
          >
            {{ brewery.name }}
          </h3>

          <!-- Description -->
          <p
            class="text-center text-sm leading-6 text-gray-600 flex-grow line-clamp-3 transition-all duration-700 delay-150"
            style="font-family: 'Inter', sans-serif;"
            :class="visibleItems.has(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'"
          >
            {{ brewery.description }}
          </p>

          <!-- Button -->
          <div
            class="flex justify-center transition-all duration-700 delay-300 mt-auto pt-4"
            :class="visibleItems.has(index)
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 translate-y-6'"
          >
            <a
              v-if="brewery.facebook"
              :href="brewery.facebook"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-all duration-300"
              style="font-family: 'Inter', sans-serif;"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5s2.5 1.12 2.5 2.5S13.38 11.5 12 11.5z"/>
              </svg>
              Visit Facebook Page
            </a>

            <button
              v-else
              disabled
              class="px-4 py-2 rounded-lg bg-gray-300 text-gray-600 text-sm cursor-not-allowed"
              style="font-family: 'Inter', sans-serif;"
            >
              Coming Soon
            </button>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

const breweries = [
  {
    name: "Sak Pub",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fsakpub.png&w=1920&q=75",
    description:
      "SAK PUB Craft Beer & Bites opened its taproom and kitchen in October 2021, serving handcrafted small batch craft beer and providing a welcoming atmosphere to enjoy quality beer and food.",
    facebook: "https://www.facebook.com/SakPubCraftBeerBites",
  },
  {
    name: "Projekt Brew Co.",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fprojectbrews.png&w=1920&q=75",
    description:
      "Projekt Brews is a small microbrewery based in Kampot since 2020, specializing in modern hoppy beers.",
    facebook: "https://www.facebook.com/profile.php?id=100063463360069",
  },
  {
    name: "Botanico Brewing Company",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fbotanico.png&w=1920&q=75",
    description:
      "Located in Phnom Penh, Botanico is one of Cambodia's oldest craft breweries, producing a wide range of beers using locally grown ingredients whenever possible.",
    facebook: "https://www.facebook.com/botanicobrewingco",
  },
  {
    name: "Riel Brewing and Distilling",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Frielbrewing.png&w=1920&q=75",
    description:
      "A pioneering craft brewery in Phnom Penh known for helping establish the local craft beer scene through innovative and high-quality beers.",
    facebook: "https://www.facebook.com/rielbrewing",
  },
  {
    name: "Fuzzy Logic",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Ffuzzylogic.png&w=1920&q=75",
    description:
      "Established in 2014, Fuzzy Logic Brewing Co. is one of Cambodia's craft beer pioneers, producing award-winning beers and beverages enjoyed throughout the country.",
    facebook: "https://www.facebook.com/FuzzyLogicCambodia",
  },
  {
    name: "Chug Lab",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fchuglab.png&w=1920&q=75",
    description:
      "A nano brewery in Phnom Penh focused on modern craft beer, also operating the heavy-metal-themed Chug Lab tap house in BKK3.",
    facebook: "https://www.facebook.com/thechuglab",
  },
  {
    name: "Brew Khnear",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fbrewkhnear.png&w=1920&q=75",
    description:
      "Focused on bringing people together through creative beers brewed with quality ingredients and traditional brewing techniques.",
    facebook: null,
  },
  {
    name: "Funghi Art",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Ffunghiart.png&w=1920&q=75",
    description:
      "Creating new value from Cambodian rice through fermentation technology, producing beer, sake, shochu, and gin.",
    facebook: "https://www.facebook.com/profile.php?id=100069892638809",
  },
  {
    name: "Jaya-Vara Meadery",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fjayavara.png&w=1920&q=75",
    description:
      "Crafting unique meads and beers inspired by traditional honey wine and local Cambodian ingredients.",
    facebook: "https://www.facebook.com/profile.php?id=100080223013722",
  },
  {
    name: "Krama Craft Brewery",
    image: "https://cambodian-craft-beer-crown.psewmad.org/_next/image?url=%2Fimages%2Fkramacraft.png&w=1920&q=75",
    description:
      "A cozy brewery in Siem Reap producing locally inspired beers while offering authentic Cambodian hospitality.",
    facebook: "https://www.facebook.com/profile.php?id=100095224728868",
  },
  {
    name: "Himawari Microbrewery",
    image: "https://cdn.discordapp.com/attachments/1481845287646531667/1517358248485716060/mm11.png?ex=6a35fd7d&is=6a34abfd&hm=35f3f773a8641bf533d0f09681cbdc4970e4939c55d234de7659fac8b9af20ab&",
    description:
      "Cambodia's first hotel-based microbrewery, producing award-winning beers crafted from premium ingredients.",
    facebook: "https://www.facebook.com/HimawariHotelMicrobrewery",
  },
  {
    name: "Bash Brewing",
    image: "https://cdn.discordapp.com/attachments/1481845287646531667/1517358248141787136/mm12.png?ex=6a35fd7d&is=6a34abfd&hm=cd33ab49a5779738d67bcf4f0e6f831ea3646e5f52bbc1c20e059f3d203531f8&",
    description:
      "One of Cambodia's original craft breweries, creating premium all-natural craft beer enjoyed across the Kingdom.",
    facebook: "https://www.facebook.com/bashbrewingkh",
  },
];

// scroll animation state
const visibleItems = ref(new Set());

const observeElements = () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          visibleItems.value.add(Number(entry.target.dataset.id));
        }
      });
    },
    { threshold: 0.2 }
  );

  document.querySelectorAll(".brew-card").forEach((el) => {
    observer.observe(el);
  });
};

onMounted(() => {
  observeElements();
});
</script>