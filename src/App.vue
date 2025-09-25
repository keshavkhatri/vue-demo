<template>
  <div class="min-h-screen bg-gray-50">
    <nav class="bg-white shadow mb-6">
      <div class="container mx-auto px-4 py-4 flex flex-wrap gap-4 items-center">
        <router-link to="/" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Home</router-link>
        <template v-if="!userState.user">
          <router-link to="/login" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Login/Register</router-link>
        </template>
        <router-link to="/dashboard" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Dashboard</router-link>
        <router-link to="/courses" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Courses</router-link>
        <router-link to="/faculty-directory" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Faculty Directory</router-link>
        <router-link to="/events" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Events</router-link>
        <router-link to="/announcements" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Announcements</router-link>
        <template v-if="userState.user">
          <router-link to="/messages" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Messages</router-link>
          <router-link to="/edit-profile" class="px-3 py-2 rounded text-blue-600 hover:bg-blue-100 hover:text-blue-800 transition">Edit Profile</router-link>
        </template>
        <span class="ml-auto text-gray-700 font-semibold">
          <template v-if="userState.user">
            Logged in as: {{ userState.user.name }} ({{ userState.user.role }})
            <button @click="logout" class="ml-4 px-3 py-2 rounded bg-red-500 text-white hover:bg-red-600 transition">Logout</button>
          </template>
          <template v-else>
            Guest
          </template>
        </span>
      </div>
    </nav>
    <main class="container mx-auto px-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { userState } from './userState.js';
import { useRouter } from 'vue-router';
const router = useRouter();
function logout() {
  userState.user = null;
  router.push('/');
}
</script>

<style scoped>
/* No custom nav-link class needed, all styling is in the template */
</style>
