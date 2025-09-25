<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
    <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <div class="flex flex-col items-center mb-6">
        <span class="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-indigo-600" fill="none" viewBox="0 0 64 64" stroke="currentColor">
            <path d="M32 8L4 24l28 16 28-16-28-16z" fill="#6366f1"/>
            <path d="M12 32v8c0 4.418 8.954 8 20 8s20-3.582 20-8v-8" stroke="#312e81" stroke-width="2" fill="none"/>
            <path d="M32 40v12" stroke="#312e81" stroke-width="2"/>
          </svg>
        </span>
        <h2 class="text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">Welcome Back</h2>
        <p class="text-gray-500 text-sm">Sign in to your account</p>
      </div>
      <div class="flex justify-center gap-6 mb-6">
        <label class="flex items-center cursor-pointer">
          <input type="radio" v-model="role" value="student" class="accent-blue-600" />
          <span class="ml-2 text-gray-700 font-medium">Student</span>
        </label>
        <label class="flex items-center cursor-pointer">
          <input type="radio" v-model="role" value="faculty" class="accent-indigo-600" />
          <span class="ml-2 text-gray-700 font-medium">Faculty</span>
        </label>
      </div>
      <form @submit.prevent="login" class="space-y-4">
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12A4 4 0 1 1 8 12a4 4 0 0 1 8 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14v7m0 0H9m3 0h3" /></svg>
          </span>
          <input v-model="email" type="email" placeholder="Email" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" required />
        </div>
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 11c1.104 0 2-.896 2-2s-.896-2-2-2-2 .896-2 2 .896 2 2 2zm0 0v2m0 4h.01" /></svg>
          </span>
          <input v-model="password" type="password" placeholder="Password" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 transition" required />
        </div>
        <button class="w-full py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition text-lg flex items-center justify-center gap-2" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
          Login
        </button>
      </form>
      <div class="mt-6 text-center">
        <router-link to="/register" class="text-indigo-600 hover:underline font-medium">New user? Register here</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { userState } from '../userState.js';
import usersJson from '../assets/db/users.json';
function getAllUsers() {
  const localUsers = JSON.parse(localStorage.getItem('users') || '[]');
  return [...usersJson, ...localUsers];
}
export default {
  name: 'LoginRegister',
  data() {
    return {
      role: 'student',
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      const users = getAllUsers();
      const user = users.find(u => u.email === this.email && u.password === this.password);
      if (user) {
        userState.user = { id: user.id, name: user.name, email: user.email, role: user.role };
        alert(`Logged in as ${user.name} (${user.role})`);
        this.$router.push('/dashboard');
      } else {
        alert('Invalid credentials');
      }
    }
  }
}
</script>
<style scoped>
.accent-blue-600:checked {
  accent-color: #2563eb;
}
.accent-indigo-600:checked {
  accent-color: #4f46e5;
}
</style>