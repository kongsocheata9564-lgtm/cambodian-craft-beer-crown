<template>
  <div class="container mx-auto px-6 py-16">
    <h1 class="text-3xl md:text-4xl text-center font-bold mb-2">Competition Awards</h1>
    <p class="text-gray-700 mb-6 text-center">Three prestigious categories await our winners</p>

    <div class="flex justify-center">
      <div class="bg-white rounded-lg shadow p-6 md:p-10 w-full max-w-4xl">
        <div class="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-start text-center sm:text-left">
          <span class="text-3xl text-yellow-500 p-2 sm:p-4">
            <i class="fa-solid fa-crown"></i>
          </span>
          <h2 class="text-2xl font-semibold sm:mt-5 mb-0 sm:mb-4">Main Award</h2>
        </div>

        <p class="mt-4 sm:mt-2 sm:ml-24 text-gray-700 text-center sm:text-left">
          This award is judged by a group of six international experts, according to the BJCP score sheet in a blind tasting mode. Some of the judges are BJCP certified.
        </p>

        <div class="grid grid-cols-3 gap-3 sm:gap-6 mt-8 sm:mt-10">
          <div class="border-t-2 border-yellow-500 pt-3 text-center">Gold</div>
          <div class="border-t-2 border-gray-400 pt-3 text-center">Silver</div>
          <div class="border-t-2 border-orange-700 pt-3 text-center">Bronze</div>
        </div>
      </div>
    </div>

    <div class="flex justify-center">
      <div class="flex flex-col md:flex-row gap-6 w-full max-w-4xl mt-6">
        <div class="bg-white rounded-lg shadow p-6 flex-1">
          <span class="text-3xl text-blue-500"><i class="fa-regular fa-user"></i></span>
          <h2 class="text-xl font-semibold mb-2 mt-3">
            People's Choice Award
            <br>
            <span class="text-lg text-gray-400">Voted by all guests</span>
          </h2>
          <p class="text-gray-600">This is the award judged by you – all our guests. To judge, please use the judging form on this website and submit one judging per beer.</p>
        </div>

        <div class="bg-white rounded-lg shadow p-6 flex-1">
          <span class="text-3xl text-green-500"><i class="fa-solid fa-gift"></i></span>
          <h2 class="text-xl font-semibold mb-2 mt-3">
            Brewer's Choice Award
            <br>
            <span class="text-lg text-gray-400">Voted by participating brewers</span>
          </h2>
          <p class="text-gray-600">We were honored with the Best New Brewery award in 2022, acknowledging our innovative approach to brewing and our commitment to quality.</p>
        </div>
      </div>
    </div>
  </div>
</template>