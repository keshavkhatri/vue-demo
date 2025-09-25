<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();

    // full list:
    // initAccordions();
    // initCarousels();
    // initCollapses();
    // initDials();
    // initDismisses();
    // initDrawers();
    // initDropdowns();
    // initModals();
    // initPopovers();
    // initTabs();
    // initTooltips();
})
</script>

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 py-10 flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">Upcoming Events</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="event in events" :key="event.id" class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition">
          <img :src="event.image" :alt="event.title" class="w-32 h-32 object-cover rounded mb-4 shadow" />
          <div class="flex items-center gap-2 mb-2">
            <span class="bg-pink-100 text-pink-600 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            </span>
            <h3 class="text-xl font-bold">{{ event.title }}</h3>
          </div>
          <p class="text-gray-700 mb-2 text-center">{{ event.description }}</p>
          <span class="text-sm text-gray-500 mb-2">Date: {{ event.date }}</span>
          <router-link to="/announcements" class="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-pink-600 text-white font-semibold shadow hover:from-blue-700 hover:to-pink-700 transition mt-2">See Announcements</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import events from '../assets/db/events.json'
export default {
  name: 'Events',
  data() {
    return {
      events
    }
  }
}
</script>