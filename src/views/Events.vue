

<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-50 to-blue-100 py-10 flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">Upcoming Events</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="event in events" :key="event.id" class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition">
          <img :src="event.image" :alt="event.title" class="w-32 h-32 object-cover rounded mb-4 shadow" />
          <div class="flex items-center gap-2 mb-2">
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