<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Hero Section -->
    <section class="relative bg-blue-900 text-white py-16 px-4 flex flex-col items-center justify-center">
      <img src="/src/assets/vue.svg" alt="College Logo" class="w-24 h-24 mb-4 rounded-full border-4 border-white shadow-lg" />
      <h1 class="text-5xl font-extrabold mb-2 text-center">Modern College of Science & Technology</h1>
      <p class="text-xl mb-6 text-center">Empowering students for a brighter future</p>
      <div class="flex gap-4">
        <router-link to="/register" class="px-6 py-3 rounded bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 transition">Apply Now</router-link>
        <router-link to="/courses" class="px-6 py-3 rounded bg-white text-blue-900 font-bold hover:bg-blue-100 transition">Explore Courses</router-link>
        <router-link to="/contact" class="px-6 py-3 rounded bg-blue-700 text-white font-bold hover:bg-blue-800 transition">Contact Us</router-link>
      </div>
      <img src="https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=1200&q=80" alt="Campus" class="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />
    </section>

    <!-- About Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-4">About Our College</h2>
      <p class="mb-6 text-lg text-gray-700">Modern College of Science & Technology is dedicated to providing world-class education, innovative research, and a vibrant campus life. Our faculty are leaders in their fields, and our students are prepared to excel in a rapidly changing world.</p>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold mb-2">Top Courses</h3>
          <ul class="list-disc ml-5 text-gray-600">
            <li>Computer Science</li>
            <li>Engineering</li>
            <li>Business Administration</li>
            <li>Mathematics</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold mb-2">Expert Faculty</h3>
          <ul class="list-disc ml-5 text-gray-600">
            <li>PhD Professors</li>
            <li>Industry Leaders</li>
            <li>Dedicated Mentors</li>
          </ul>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h3 class="text-xl font-semibold mb-2">Campus Life</h3>
          <ul class="list-disc ml-5 text-gray-600">
            <li>Clubs & Societies</li>
            <li>Sports Facilities</li>
            <li>Annual Events</li>
            <li>Student Support</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Professors Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Meet Our Professors</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Dr. Smith" class="w-20 h-20 rounded-full mb-4" />
          <h4 class="text-lg font-bold mb-1">Dr. Smith</h4>
          <p class="text-gray-600 mb-2">Computer Science</p>
          <p class="text-sm text-gray-500">PhD, MIT. 15+ years teaching experience. Published author.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Dr. Jane" class="w-20 h-20 rounded-full mb-4" />
          <h4 class="text-lg font-bold mb-1">Dr. Jane</h4>
          <p class="text-gray-600 mb-2">Mathematics</p>
          <p class="text-sm text-gray-500">PhD, Stanford. Renowned researcher. Student mentor.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="Prof. Lee" class="w-20 h-20 rounded-full mb-4" />
          <h4 class="text-lg font-bold mb-1">Prof. Lee</h4>
          <p class="text-gray-600 mb-2">Engineering</p>
          <p class="text-sm text-gray-500">MTech, IIT. Industry expert. Innovation leader.</p>
        </div>
      </div>
    </section>

    <!-- Visitor Tours Section -->
    <section class="container mx-auto py-16 px-4 bg-blue-50 rounded-lg">
      <h2 class="text-3xl font-bold mb-4 text-center">Visitor Tours</h2>
      <p class="mb-6 text-lg text-gray-700 text-center">Experience our campus first-hand! Join our guided tours to explore facilities, meet faculty, and interact with students.</p>
      <div class="flex justify-center gap-6">
        <a href="#" class="px-6 py-3 rounded bg-blue-600 text-white font-bold hover:bg-blue-700 transition">Book a Tour</a>
        <a href="#" class="px-6 py-3 rounded bg-yellow-400 text-blue-900 font-bold hover:bg-yellow-500 transition">Virtual Tour</a>
      </div>
    </section>

    <!-- Educational Resources Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Educational Resources</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h4 class="text-lg font-bold mb-2">Library</h4>
          <p class="text-gray-700">Access thousands of books, journals, and digital resources.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h4 class="text-lg font-bold mb-2">Online Learning</h4>
          <p class="text-gray-700">Interactive courses and e-learning modules for all students.</p>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h4 class="text-lg font-bold mb-2">Research Labs</h4>
          <p class="text-gray-700">State-of-the-art labs for hands-on learning and innovation.</p>
        </div>
      </div>
    </section>

    <!-- Popular Courses Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Popular Courses</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div class="bg-blue-100 rounded-lg p-6 text-center">
          <h4 class="text-lg font-bold mb-2">BSc Computer Science</h4>
          <p class="text-gray-700">Learn programming, AI, and software engineering.</p>
        </div>
        <div class="bg-yellow-100 rounded-lg p-6 text-center">
          <h4 class="text-lg font-bold mb-2">BBA Business Administration</h4>
          <p class="text-gray-700">Master management, marketing, and entrepreneurship.</p>
        </div>
        <div class="bg-green-100 rounded-lg p-6 text-center">
          <h4 class="text-lg font-bold mb-2">BTech Engineering</h4>
          <p class="text-gray-700">Explore mechanical, civil, and electrical engineering.</p>
        </div>
        <div class="bg-pink-100 rounded-lg p-6 text-center">
          <h4 class="text-lg font-bold mb-2">MSc Mathematics</h4>
          <p class="text-gray-700">Advanced math, statistics, and data science.</p>
        </div>
      </div>
    </section>

    <!-- Student Testimonials Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Student Testimonials</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Student 1" class="w-16 h-16 rounded-full mb-4" />
          <p class="text-gray-700 italic mb-2">“The faculty here are amazing and always ready to help. I feel prepared for my career!”</p>
          <span class="font-bold text-blue-900">Priya Sharma, BSc CS</span>
        </div>
        <div class="bg-white rounded-lg shadow p-6 flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/22.jpg" alt="Student 2" class="w-16 h-16 rounded-full mb-4" />
          <p class="text-gray-700 italic mb-2">“Campus life is vibrant and full of opportunities. I love being a part of this college!”</p>
          <span class="font-bold text-blue-900">Rahul Verma, BTech</span>
        </div>
      </div>
    </section>

    <!-- News & Updates Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">News & Updates</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow p-6">
          <h4 class="text-lg font-bold mb-2">New Research Lab Inaugurated</h4>
          <p class="text-gray-700">Our new AI research lab is now open for students and faculty.</p>
          <span class="text-sm text-gray-500">Sept 20, 2025</span>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h4 class="text-lg font-bold mb-2">Annual Tech Fest Announced</h4>
          <p class="text-gray-700">Join us for the biggest tech event of the year on Nov 15.</p>
          <span class="text-sm text-gray-500">Sept 25, 2025</span>
        </div>
        <div class="bg-white rounded-lg shadow p-6">
          <h4 class="text-lg font-bold mb-2">Admissions Open</h4>
          <p class="text-gray-700">Apply now for the 2025-26 academic year. Limited seats available!</p>
          <span class="text-sm text-gray-500">Sept 10, 2025</span>
        </div>
      </div>
    </section>

    <!-- Gallery Section -->
    <section class="container mx-auto py-16 px-4">
      <h2 class="text-3xl font-bold mb-8 text-center">Campus Gallery</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Gallery 1" class="rounded-lg shadow" />
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Gallery 2" class="rounded-lg shadow" />
        <img src="https://images.unsplash.com/photo-1517520287167-4bbf64a00d66?auto=format&fit=crop&w=400&q=80" alt="Gallery 3" class="rounded-lg shadow" />
        <img src="https://images.unsplash.com/photo-1454023492550-5696f8ff10e1?auto=format&fit=crop&w=400&q=80" alt="Gallery 4" class="rounded-lg shadow" />
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="container mx-auto py-16 px-4 text-center">
      <h2 class="text-3xl font-bold mb-4">Ready to join us?</h2>
      <p class="mb-6 text-lg text-gray-700">Become a part of our vibrant community and start your journey today.</p>
      <router-link to="/register" class="px-8 py-4 rounded bg-blue-600 text-white font-bold text-xl hover:bg-blue-700 transition">Register Now</router-link>
    </section>
  </div>
</template>
<script>
import { userState } from '../userState.js';
export default {
  name: 'Home',
  setup() {
    return { userState };
  }
}
</script>
<style scoped>
/* Custom styles for Home page sections */
</style>