<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">Latest Announcements</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="announcement in announcements" :key="announcement.id" class="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-blue-100 text-blue-600 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M12 20a8 8 0 100-16 8 8 0 000 16z" /></svg>
            </span>
            <h3 class="text-lg font-bold">{{ announcement.title }}</h3>
          </div>
          <p class="text-gray-700 mb-4">{{ announcement.content }}</p>
          <span class="text-xs text-gray-400 self-end">{{ announcement.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import announcements from '../assets/db/announcements.json'
export default {
  name: 'Announcements',
  data() {
    return {
      announcements
    }
  }
}
</script>
