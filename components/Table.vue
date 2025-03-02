<template>
  <table class="border-collapse border border-gray-400 w-full overflow-hidden">
    <thead>
      <tr class="bg-gray-200">
        <th 
          v-for="(header, index) in filteredHeaders" 
          :key="index" 
          class="border border-gray-400 px-4 py-2"
        >
          {{ header }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr 
        v-for="(row, rowIndex) in data" 
        :key="rowIndex"
        class="cursor-pointer hover:bg-gray-100"
        @click="navigateToJob(row._id)"
      >
        <td 
          v-for="(key, colIndex) in filteredHeaders" 
          :key="colIndex" 
          class="border border-gray-400 px-4 py-2"
        >
          {{ row[key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";

const props = defineProps({
  data: {
    type: Array,
    required: true,
  },
  headers: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

// Exclude `_id` from headers
const filteredHeaders = computed(() => 
  props.headers.filter(header => header !== "_id")
);

// Function to navigate to job details
const navigateToJob = (id) => {
  if (id) {
    router.push(`/job/${id}`);
  }
};
</script>
