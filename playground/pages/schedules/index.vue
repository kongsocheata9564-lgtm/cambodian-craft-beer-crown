<template>
  <section class="bg-[#F8F6F2] py-6 lg:py-8">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

      <!-- Header -->
      <div class="text-center mb-6 lg:mb-8">
        <h2 class="text-4xl md:text-4xl font-black uppercase tracking-wide text-gray-900" style="font-family: 'Inter', sans-serif;">
          Event Timeline
        </h2>
        <div class="w-28 h-1 bg-orange-600 rounded-full mx-auto mt-5"></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          v-for="(item, index) in schedule"
          :key="item.heading"
          class="relative flex items-stretch gap-5 pb-5 cursor-pointer group"
          @click="selectedIndex = selectedIndex === index ? null : index"
        >
          <!-- icon column -->
          <div class="relative flex flex-col items-center flex-shrink-0 self-stretch">
            <span
              class="w-12 h-12 rounded-2xl text-white flex items-center justify-center shadow-sm z-10 transition-colors duration-200"
              :class="selectedIndex === index ? 'bg-orange-500' : 'bg-blue-700 group-hover:bg-orange-500'"
            >
              <component :is="item.icon" class="w-5 h-5" />
            </span>
            <span
              v-if="index !== schedule.length - 1"
              class="absolute top-12 bottom-0 w-0.5 bg-orange-300"
            ></span>
          </div>

          <!-- card -->
          <div
            class="flex-1 bg-white rounded-xl shadow-sm px-5 py-4 transition-all duration-200"
            :class="selectedIndex === index
              ? 'border-2 border-orange-500 shadow-md'
              : 'border-2 border-transparent group-hover:border-orange-400'"
          >
            <div class="flex items-start justify-between gap-3">
              <div>
                <span
                  class="mb-1 inline-block w-fit rounded px-2 py-0.5 text-xs font-semibold uppercase tracking-wide transition-colors duration-200"
                  :class="selectedIndex === index
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-teal-100 text-teal-700'"
                  style="font-family: 'Inter', sans-serif;"
                >
                  {{ item.tag }}
                </span>
                <h3 class="text-base sm:text-lg font-bold text-gray-900" style="font-family: 'Inter', sans-serif;">
                  {{ item.heading }}
                </h3>
              </div>
              <span
                class="flex-shrink-0 text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-1 rounded-full whitespace-nowrap"
                style="font-family: 'Inter', sans-serif;"
              >
                {{ item.time }}
              </span>
            </div>
            <p class="mt-1 text-sm text-gray-500" style="font-family: 'Inter', sans-serif;">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { h, ref } from "vue";

const selectedIndex = ref(null);

const IconClock = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
    h("circle", { cx: "12", cy: "12", r: "9" }),
    h("path", { d: "M12 7v5l3 3" }),
  ]);

const IconMic = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
    h("rect", { x: "9", y: "2", width: "6", height: "11", rx: "3" }),
    h("path", { d: "M5 10a7 7 0 0 0 14 0" }),
    h("path", { d: "M12 17v4" }),
    h("path", { d: "M9 21h6" }),
  ]);

const IconBeer = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
    h("path", { d: "M6 9h9v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2z" }),
    h("path", { d: "M15 11h2a2 2 0 0 1 0 4h-2" }),
    h("path", { d: "M6 9V5a2 2 0 0 1 2-2h4l1 2h1a1 1 0 0 1 1 1v3" }),
  ]);

const IconMusic = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
    h("path", { d: "M9 18V5l11-2v13" }),
    h("circle", { cx: "6", cy: "18", r: "3" }),
    h("circle", { cx: "17", cy: "16", r: "3" }),
  ]);

const IconTrophy = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
    h("path", { d: "M8 21h8" }),
    h("path", { d: "M12 17v4" }),
    h("path", { d: "M7 4h10v5a5 5 0 0 1-10 0z" }),
    h("path", { d: "M7 5H4a2 2 0 0 0 2 4" }),
    h("path", { d: "M17 5h3a2 2 0 0 1-2 4" }),
  ]);

const IconFlag = () =>
  h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round" }, [
    h("path", { d: "M5 3v18" }),
    h("path", { d: "M5 4h13l-3 4 3 4H5" }),
  ]);

const schedule = [
  {
    heading: "Festival Entry",
    time: "2:00 PM",
    tag: "Opening",
    description: "Check-in and collect your tasting glass.",
    icon: IconClock,
  },
  {
    heading: "Introduction by the MC",
    time: "2:15 PM",
    tag: "Opening",
    description: "Welcome and house rules for the day.",
    icon: IconMic,
  },
  {
    heading: "Brewery Booths Open",
    time: "2:30 PM",
    tag: "Tasting",
    description: "Sample beers from every featured brewery on site.",
    icon: IconBeer,
  },
  {
    heading: "Main Stage Performance",
    time: "4:00 PM",
    tag: "Live Music",
    description: "Local bands take the stage for the afternoon set.",
    icon: IconMusic,
  },
  {
    heading: "Crowd Favorite Awarded",
    time: "6:30 PM",
    tag: "Awards",
    description: "Votes are tallied and the winning brewery is crowned.",
    icon: IconTrophy,
  },
  {
    heading: "Closing Set & Last Call",
    time: "7:00 PM",
    tag: "Live Music",
    description: "Final pours before the festival gates close.",
    icon: IconMusic,
  },
  {
    heading: "Event Ends",
    time: "9:00 PM",
    tag: "Closing",
    description: "Thanks for joining us — see you next year.",
    icon: IconFlag,
  },
];
</script>