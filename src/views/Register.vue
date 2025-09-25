<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-100">
    <div class="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-md">
      <div class="flex flex-col items-center mb-6">
        <span class="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="w-16 h-16 text-green-600" fill="none" viewBox="0 0 64 64" stroke="currentColor">
            <path d="M32 8L4 24l28 16 28-16-28-16z" fill="#22c55e"/>
            <path d="M12 32v8c0 4.418 8.954 8 20 8s20-3.582 20-8v-8" stroke="#166534" stroke-width="2" fill="none"/>
            <path d="M32 40v12" stroke="#166534" stroke-width="2"/>
          </svg>
        </span>
        <h2 class="text-3xl font-extrabold text-gray-800 mb-1 tracking-tight">Create Account</h2>
        <p class="text-gray-500 text-sm">Register to join the college portal</p>
      </div>
      <form @submit.prevent="register" class="space-y-4">
        <div class="flex justify-center gap-6 mb-4">
          <label class="flex items-center cursor-pointer">
            <input type="radio" v-model="role" value="student" class="accent-green-600" />
            <span class="ml-2 text-gray-700 font-medium">Student</span>
          </label>
          <label class="flex items-center cursor-pointer">
            <input type="radio" v-model="role" value="faculty" class="accent-blue-600" />
            <span class="ml-2 text-gray-700 font-medium">Faculty</span>
          </label>
        </div>
        <div class="relative">
          <span class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </span>
          <input v-model="name" type="text" placeholder="Full Name" class="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition" required />
        </div>
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
        <button class="w-full py-2 rounded-lg bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold shadow-lg hover:from-green-700 hover:to-blue-700 transition text-lg flex items-center justify-center gap-2" type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M12 5l7 7-7 7" /></svg>
          Register
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import { userState } from '../userState.js';
export default {
  name: 'Register',
  data() {
    return {
      role: 'student',
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // Save new user to localStorage
      const localUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const newUser = { id: Date.now(), name: this.name, email: this.email, password: this.password, role: this.role };
      localUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(localUsers));
      userState.user = { id: newUser.id, name: newUser.name, email: newUser.email, role: newUser.role };
      alert(`Registered as ${this.name} (${this.role})`);
      this.$router.push('/dashboard');
    }
  }
}
</script>
<style scoped>
.accent-green-600:checked {
  accent-color: #22c55e;
}
.accent-blue-600:checked {
  accent-color: #2563eb;
}
</style>