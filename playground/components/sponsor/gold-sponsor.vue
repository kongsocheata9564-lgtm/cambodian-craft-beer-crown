<script setup>
import BertiePNHlogo from "/imgs/BertiePNHlogo-3.png";
import botanico from "/imgs/botanico.png";
import CBACLOGOfa from "/imgs/CBACLOGOfa-color.png";
import CopyofLogoThaiTaneng1 from "/imgs/CopyofLogoThaiTaneng1.png";
import SKAI_Tech from "/imgs/SKAI_Tech.png";
import CopyofLogoYakimaChiefHops from "/imgs/CopyofLogoYakimaChiefHops.png";

const data = [
  {
    title: "BERTIE",
    img: BertiePNHlogo,
    body_text: "Official event partner.",
  },
  {
    title: "BOTANICO",
    img: botanico,
    body_text: "Premium beer supplier.",
  },
  {
    title: "THAI TAN",
    img: CopyofLogoThaiTaneng1,
    body_text: "Community supporter.",
  },
  {
    title: "YAKIMA CHIEF",
    img: CBACLOGOfa,
    body_text: "Community sponsor.",
  },
  {
    title: "CRAFT MALT CO",
    img: CopyofLogoYakimaChiefHops,
    body_text: "Official ingredient partner.",
  },
  {
    title: "SKAI TECH", 
    img: SKAI_Tech,
    body_text: "Venue partner.",
  },
];
</script>

<template>
  <div v-for="datas in data" :key="datas" class="sponsor-fade-in-up flex flex-col max-w-[300px] overflow-hidden rounded-lg bg-white shadow-xl duration-[350ms] hover:-translate-y-1.5 hover:shadow-2xl">
    <div class="flex justify-center items-center w-full px-5 pt-4 pb-1">
      <img :src="datas.img" alt="logo will be coming soon" class="h-[110px] w-auto max-w-[160px] object-contain sm:h-[140px] sm:max-w-[190px]"/>
    </div>
    <h2 class="px-2 pt-2 text-center font-bold text-[1.0625rem] leading-[1.4] text-[#1100ff] sm:text-xl">
      {{ datas.title }}
    </h2>
    <p class="px-4 pb-5 text-center text-[0.9rem] break-words whitespace-normal sm:text-[1.0625rem]">
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