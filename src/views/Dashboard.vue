<template>
  <div class="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
    <div class="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-2xl">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-4 text-center tracking-tight">Dashboard</h2>
      <p class="text-lg text-gray-500 mb-8 text-center">Welcome! Access your courses, events, and messages below.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <router-link to="/courses" class="flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
          Courses
        </router-link>
        <router-link to="/events" class="flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
          Events
        </router-link>
        <router-link to="/messages" class="flex flex-col items-center justify-center p-8 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8a9 9 0 100-18 9 9 0 000 18z" /></svg>
          Messages
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Dashboard'
}
</script>
<style scoped>
/* All styling is in the template */
</style>