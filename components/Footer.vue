<template>
    <footer class="border border-gray-300 py-6">
      <div class="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <!-- Logo & Description -->
        <div class="mb-4 md:mb-0 text-center md:text-left">
          <h2 class="text-2xl font-bold">JobX</h2>
          <p class="text-sm text-gray-400">Your trusted platform for job seekers & employers.</p>
        </div>
  
        <!-- Navigation Links -->
        <div class="flex space-x-6 text-sm">
          <a href="#" class="hover:text-blue-400 transition">About Us</a>
          <a href="#" class="hover:text-blue-400 transition">Jobs</a>
          <a href="#" class="hover:text-blue-400 transition">Contact</a>
          <a href="#" class="hover:text-blue-400 transition">Privacy Policy</a>
        </div>
  
        <!-- Social Media Icons -->
        <div class="flex space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-facebook"></i></a>
          <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-twitter"></i></a>
          <a href="#" class="hover:text-blue-400 transition"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
  
      <!-- Copyright Section -->
      <div class="text-center text-gray-500 text-sm mt-4">
        © {{ new Date().getFullYear() }} JobX. All rights reserved.
      </div>
    </footer>
  </template>
  
  <script setup>
  </script>
  
  