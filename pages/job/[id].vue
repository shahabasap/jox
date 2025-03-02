<script setup>
import { useRoute } from 'vue-router';
import { ref, onMounted } from 'vue';

// Get route parameters
const route = useRoute();
const jobId = route.params.id;

// Reactive job data
const job = ref(null);
const error = ref(null);

// Fetch job data when the component is mounted
onMounted(async () => {
  try {
    const { data, error: fetchError } = await useFetch(`/api/jobs/${jobId}`);

    if (fetchError.value) {
      console.error("Error fetching product:", fetchError.value);
      error.value = fetchError.value;
    } else {
      
      job.value = data.value.job;
    }
  } catch (err) {
    console.error("Unexpected error:", err);
    error.value = err;
  }
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen bg-gray-100 p-5">
    <div 
      v-if="job" 
      class="w-full max-w-2xl bg-white shadow-lg rounded-lg p-6 md:p-8 space-y-4"
    >
      <!-- Job Title -->
      <h1 class="text-3xl font-bold text-gray-800">{{ job.title }}</h1>
      
      <!-- Company Info -->
      <p class="text-lg text-gray-600 flex items-center gap-2">
        <span class="text-blue-500">🏢</span> {{ job.company }}
      </p>

      <!-- Job Category & Salary -->
      <div class="flex flex-wrap gap-4 text-gray-700 mt-2">
        <p class="flex items-center gap-2">
          <span class="text-green-500">📌</span> <strong>Category:</strong> {{ job.category }}
        </p>
        <p class="flex items-center gap-2">
          <span class="text-yellow-500">💰</span> <strong>Salary:</strong> {{ job.salary }}
        </p>
      </div>

      <!-- Job Description -->
      <p class="text-gray-700 mt-4 leading-relaxed border-t pt-4">
        {{ job.description }}
      </p>
    </div>

    <!-- No Job Found -->
    <div v-else class="text-center text-gray-500 text-lg">
      <p class="bg-white p-6 shadow-md rounded-md">
        🚀 Job not found. Please try again.
      </p>
    </div>
  </div>
</template>
