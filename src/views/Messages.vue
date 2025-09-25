<template>
  <div class="min-h-screen bg-gradient-to-br from-purple-50 to-blue-100 py-10 flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">Messages & Notifications</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="msg in messages" :key="msg.id" class="bg-white rounded-2xl shadow-lg p-8 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 transition">
          <div class="flex items-center gap-3 mb-4">
            <span class="bg-purple-100 text-purple-600 rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" /></svg>
            </span>
            <h3 class="text-lg font-bold">{{ msg.title }}</h3>
          </div>
          <p class="text-gray-700 mb-2">{{ msg.content }}</p>
          <span class="text-sm text-gray-500 mb-2">From: {{ msg.from }}</span>
          <span class="text-xs text-gray-400 self-end">{{ msg.date }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import messages from '../assets/db/messages.json'
export default {
  name: 'Messages',
  data() {
    return {
      messages
    }
  }
}
</script>
