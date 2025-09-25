<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-50 to-blue-100">
    <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <div class="flex flex-col items-center mb-6">
        <span class="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-yellow-500" fill="none" viewBox="0 0 64 64" stroke="currentColor">
            <circle cx="32" cy="24" r="16" fill="#facc15"/>
            <rect x="16" y="40" width="32" height="12" rx="6" fill="#fde68a"/>
            <rect x="24" y="52" width="16" height="4" rx="2" fill="#fbbf24"/>
          </svg>
        </span>
        <h2 class="text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">Edit Profile</h2>
        <p class="text-gray-500 text-sm">Update your personal information</p>
      </div>
      <form @submit.prevent="save" class="space-y-4">
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </span>
          <input v-model="name" type="text" placeholder="Full Name" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition" required />
        </div>
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7m0 0H9m3 0h3" /></svg>
          </span>
          <input v-model="email" type="email" placeholder="Email" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" required />
        </div>
        <button class="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-500 to-blue-600 text-white font-semibold shadow-lg hover:from-yellow-600 hover:to-blue-700 transition text-lg flex items-center justify-center gap-2" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
          Save Changes
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { userState } from '../userState.js';
export default {
  name: 'EditProfile',
  data() {
    return {
      name: '',
      email: ''
    }
  },
  mounted() {
    if (userState.user) {
      this.name = userState.user.name;
      this.email = userState.user.email;
    }
  },
  methods: {
    save() {
      if (userState.user) {
        userState.user.name = this.name;
        userState.user.email = this.email;
        alert('Profile updated!');
      }
    }
  }
}
</script>
<style scoped>
/* All styling is in the template */
</style>