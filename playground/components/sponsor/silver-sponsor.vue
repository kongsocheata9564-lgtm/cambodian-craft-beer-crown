<script setup>
const BertiePNHlogo = "https://www.logoai.com/uploads/output/2025/04/19/0c61fa6a79a7055a4dfd9b288e882c41.jpg";
const botanico = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX58uEonNWKuDb6ie9ArhIDYlifEffjHqvQyj7HL4KEQ&s=10";
const CopyofLogoThaiTaneng1 = "https://i.pinimg.com/564x/cf/e8/9b/cfe89b81d77a4eed574eee4bd7aa677d.jpg";

const data = [
  { title: "BERTIE", img: BertiePNHlogo, body_text: "Official event partner." },
  { title: "BOTANICO", img: botanico, body_text: "Premium beer supplier." },
  { title: "THAI TAN", img: CopyofLogoThaiTaneng1, body_text: "Community supporter." },

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