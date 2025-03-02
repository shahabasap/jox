<script setup lang="ts">
const id = useId()
// Fetch jobs data
const { data: jobsData, error: jobsError } = await useFetch('/api/jobs');

// Fetch categories data
const { data: categoriesData, error: categoriesError } = await useFetch('/api/getCategories');

// Handle errors
if (jobsError.value) {
  console.error('Error fetching jobs:', jobsError.value);
}
if (categoriesError.value) {
  console.error('Error fetching categories:', categoriesError.value);
}

const jobs = ref(jobsData.value?.jobs || []);
const categories = ref(categoriesData.value?.categories || []);
const searchQuery = ref("");
const selectedCategory = ref("");


// Extract headers for the jobs table
let headers: string[] = [];
try {
  if (Array.isArray(jobs.value) && jobs.value.length > 0) {
    headers = Object.keys(jobs.value[0]);   }
} catch (error) {
  console.error("Error extracting headers:", error);
}
console.log("header",headers)
const fetchFilteredJobs = async () => {
  try {
    const response = await useFetch('/api/filterJobs', {
      method: 'POST',
      body: {
        search: searchQuery.value,
        category: selectedCategory.value
      }
    });

    if (response.data.value?.jobs) {
      jobs.value= response.data.value.jobs
    }
  } catch (error) {
    console.error("Error filtering jobs:", error);
  }
};
watch([searchQuery, selectedCategory], fetchFilteredJobs);
</script>

<template>
  <div class="w-full px-7 min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-3xl font-bold text-center my-4">Job Listings</h1>
    <div class="flex justify-between items-center mb-4 gap-3.5">
      <div>
           <!-- Search Bar -->
  <input 
      v-model="searchQuery" 
      type="text" 
      placeholder="Search jobs..." 
      class=" p-2 border rounded w-full"
    />
      </div>
    <div>
       <!-- Categories Dropdown -->
    <select name="categories" v-model="selectedCategory" id="categories" class="  p-2 border rounded">
      <option value="">Select a category</option>
      <option v-for="(category,index) in categories" :key="index" :value="category">
        {{ category }}
      </option>
    </select>
    </div>
   
    </div>
 

    <!-- Jobs Table -->
    <Table :data="jobs" :headers="headers" />
  </div>
</template>