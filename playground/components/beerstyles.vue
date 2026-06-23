<template>
  <div>
    <p class="sponsor-fade-in-up text-sm sm:text-base text-gray-500">{{ year }} Theme</p>
    <h2 class="sponsor-fade-in-up font-bold text-xl sm:text-2xl mb-4 sm:mb-5">{{ theme }}</h2>
    <div
      v-for="(style, index) in styles"
      :key="style.name"
      class="sponsor-fade-in-up border-b mb-6 sm:mb-10 pb-2"
    >
      <div class="flex-1">
        <h3 class="text-base sm:text-xl mb-2 font-black">{{ style.name }}</h3>
        <p class="text-sm sm:text-lg flex flex-wrap gap-x-3 gap-y-1">
          <span><span class="font-semibold text-gray-800">Origin:</span> {{ style.origin }}</span>
          <span><span class="font-semibold text-gray-800">ABV:</span> {{ style.abv }}</span>
          <span><span class="font-semibold text-gray-800">IBU:</span> {{ style.ibu }}</span>
        </p>
        <p v-if="openIndex === index" class="text-sm sm:text-lg mt-2">
          {{ style.notesFull }}
        </p>
        <button
          type="button"
          class="text-sky-500 font-semibold mt-1 text-sm sm:text-base"
          @click="toggle(index)"
        >
          {{ openIndex === index ? 'Show less' : 'View detail' }}
        </button>
      </div>
    </div>
  </div>
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
import { ref } from 'vue'

const year = '2026'
const theme = 'Classic European Beers'
const styles = [
  { name: 'Strong Bitter (ESB)', origin: 'England', abv: '4.6% – 6.2%', ibu: '18–25', notesFull: 'An average- to strong-strength English ale featuring a nice balance between leafy, earthy British hops and a solid malt backbone. Expect notes of biscuit, nut, or caramel with a dry, clean finish.' },
  { name: 'English IPA', origin: 'England', abv: '5.0% – 7.5%', ibu: '22–40', notesFull: 'A hoppy, moderately strong British pale ale that leans into herbal, floral, and spicy wood qualities rather than the bright citrus of its American cousin. The malt profile is often more prominent here, presenting toasted, bready, or caramel layers.' },
  { name: 'Witbier', origin: 'Belgium', abv: '4.5% – 5.5%', ibu: '18–30', notesFull: 'A remarkably refreshing, pale wheat ale brewed with coriander and curaçao orange peel. It is intentionally hazy from unmalted wheat and yeast, offering a bright, citrusy, and subtly spicy flavor profile.' },
  { name: 'Saison', origin: 'Belgium', abv: '3.5% – 9.5%', ibu: '18–25', notesFull: 'An artisanal, highly carbonated Belgian farmhouse ale with a distinctive dry, fruity, and peppery character. It balances complex esters and phenols with a prominent hop bitterness and an incredibly crisp finish.' },
  { name: 'Weissbier', origin: 'Germany', abv: '4.3% – 5.6%', ibu: '18–25', notesFull: 'A traditional South German wheat beer famous for its cloudy appearance and dramatic yeast-driven aromas of banana and clove. It has low bitterness, high carbonation, and a fluffy, creamy mouthfeel.' },
  { name: 'German Pils', origin: 'Germany', abv: '4.4% – 5.2%', ibu: '18–25', notesFull: 'A crisp, clean, and highly attenuated gold-colored lager that highlights noble German hops like Hallertau or Tettnanger. It features a distinctive, snappy floral aroma and a firm, lingering bitterness.' },
  { name: 'Munich Dunkel', origin: 'Germany', abv: '4.5% – 5.6%', ibu: '18–25', notesFull: 'A classic, deeply comforting dark lager from Bavaria that celebrates rich, bready, and toasty Munich malts. It tastes of bread crusts, nuts, or mild chocolate without ever feeling heavy, overly sweet, or roasted like a stout.' },
]
const openIndex = ref(null)
function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index
}
</script>