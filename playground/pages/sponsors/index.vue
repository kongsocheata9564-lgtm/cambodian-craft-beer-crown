<template>
    <section class="bg-[#F8F6F2] flex justify-center pt-3">
    <div class="border-2xl px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[40px] bg-white max-w-7xl">
        <div class="flex justify-center pt-10">
            <h1 class="font-black text-2xl sm:text-3xl md:text-4xl text-center">
                OUR SPONSOR
            </h1>
        </div>
        <div class="flex justify-center pb-3">
            <p class="text-base sm:text-lg md:text-xl text-center">
                We thank our generous sponsors who make the
                <br class="hidden sm:block">
                Cambodian Craft Beer Crown 2025 possible.
            </p>
        </div>

        <div class="block px-2 sm:px-5">

            <div>
                <h2 class="text-lg sm:text-xl font-bold py-5" style="color: #FFE600;">
                    Gold Sponsor
                </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                <goldSponsor />
            </div>

            <div class="mt-8">
                <h2 class="text-lg sm:text-xl font-bold" style="color: #938484;">
                    Silver Sponsor
                </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                <goldSponsor />
            </div>

            <div class="mt-8">
                <h2 class="text-lg sm:text-xl font-bold" style="color: #000000;">
                    Regular Partners
                </h2>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
                <goldSponsor />
            </div>

        </div>
    </div>
    </section> 
</template>

<script setup>
import goldSponsor from '~/components/sponsor/gold-sponsor.vue';
// import silverSponsor from '~/components/sponsor/silver-sponsor.vue';
// import regularPartners from '~/components/sponsor/regular-partners.vue';
</script>