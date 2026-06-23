<script setup>
import BertiePNHlogo from "/imgs/BertiePNHlogo-3.png";
import botanico from "/imgs/botanico.png";
import CBACLOGOfa from "/imgs/CBACLOGOfa-color.png";
import CopyofLogoThaiTaneng1 from "/imgs/CopyofLogoThaiTaneng1.png";
import SKAI_Tech from "/imgs/SKAI_Tech.png";
import CopyofLogoYakimaChiefHops from "/imgs/CopyofLogoYakimaChiefHops.png";

const data = [
  { title: "BERTIE", img: BertiePNHlogo, body_text: "Official event partner." },
  { title: "BOTANICO", img: botanico, body_text: "Premium beer supplier." },
  { title: "THAI TAN", img: CopyofLogoThaiTaneng1, body_text: "Community supporter." },
  { title: "YAKIMA CHIEF", img: CBACLOGOfa, body_text: "Community sponsor." },
  { title: "CRAFT MALT CO", img: CopyofLogoYakimaChiefHops, body_text: "Official ingredient partner." },
  { title: "SKAI TECH", img: SKAI_Tech, body_text: "Venue partner." },
];
</script>

<template>
  <div
    v-for="(datas, index) in data"
    :key="datas.title + index"
    class="sponsor-fade-in-up flex flex-col w-full max-w-[280px] sm:max-w-[300px] mx-auto overflow-hidden rounded-lg bg-white border border-gray-200 duration-[350ms] hover:-translate-y-1.5"
  >
    <div class="flex justify-center items-center w-full px-4 sm:px-5 pt-4 pb-1">
      <img
        :src="datas.img"
        alt="logo will be coming soon"
        class="h-[90px] w-auto max-w-[140px] object-contain sm:h-[140px] sm:max-w-[190px]"
      />
    </div>
    <h2 class="px-2 pt-2 text-center font-bold text-base leading-[1.4] text-sky-500 sm:text-xl">
      {{ datas.title }}
    </h2>
    <p class="px-4 pb-5 text-center text-sm break-words whitespace-normal sm:text-[1.0625rem]">
      {{ datas.body_text }}
    </p>
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