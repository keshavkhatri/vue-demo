<template>
  <div class="min-h-screen bg-gradient-to-br from-yellow-50 to-blue-100 py-10 flex items-center justify-center">
    <div class="w-full max-w-6xl mx-auto">
      <h2 class="text-4xl font-extrabold text-gray-800 mb-8 text-center tracking-tight">Faculty Directory</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="faculty in facultyList" :key="faculty.id" class="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center hover:shadow-2xl hover:-translate-y-1 transition">
          <img :src="faculty.image" :alt="faculty.name" class="w-24 h-24 object-cover rounded-full mb-4 shadow" />
          <div class="flex items-center gap-2 mb-2">
            <h3 class="text-xl font-bold">{{ faculty.name }}</h3>
          </div>
          <p class="text-gray-700 mb-2 text-center">Department: {{ faculty.department }}</p>
          <span class="text-sm text-gray-500 mb-2">Email: {{ faculty.email }}</span>
          <router-link to="/courses" class="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-yellow-500 text-white font-semibold shadow hover:from-blue-700 hover:to-yellow-600 transition mt-2">View Courses</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import facultyList from '../assets/db/faculty.json'
export default {
  name: 'FacultyDirectory',
  data() {
    return {
      facultyList
    }
  }
}
</script>
