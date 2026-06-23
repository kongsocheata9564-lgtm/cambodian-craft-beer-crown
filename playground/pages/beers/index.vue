<template>
  <section class="bg-[#F8F6F2] flex justify-center py-3">
    <div class="rounded-2xl sm:pb-10 sm:px-8 md:px-16 lg:px-24 xl:px-[40px] pb-0 xl:pb-10 xl:mb-3 bg-white max-w-7xl w-full shadow-sm">
      <div class="flex justify-center pt-10">
        <h1 class="sponsor-fade-in-up font-black text-2xl sm:text-3xl md:text-4xl text-center text-gray-900">
          BEER STYLES
        </h1>
      </div>
      <div class="flex justify-center pb-3">
        <p class="sponsor-fade-in-up text-base sm:text-lg md:text-xl text-center text-gray-600 max-w-3xl">
          This competition is part 1 of an annual three-year series — the Trilogy.
          <br class="hidden sm:block">
          Each year features a different theme. Only styles matching the current
          year's theme are eligible for entry.
        </p>
      </div>
      <div class="flex flex-col py-5 xl:px-40 sm:pl-5">
        <beerstyles />
      </div>
      <div class="xl:px-40 sm:px-5">
        <beerButton/>
      </div>
    </div>
  </section>
</template>
<style scoped>
@keyframes sponsorFadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.sponsor-fade-in-up {
  animation: sponsorFadeInUp 0.6s ease-out;
}

</style>

<script setup>
import beerstyles from '~/components/beerstyles.vue'
import beerButton from '~/components/beerButton.vue';
</script>