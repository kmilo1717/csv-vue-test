<template>
    <div v-if="errors.length" class="mt-4">
      <p class="text-lg font-semibold text-red-600 mb-2">Detalles de errores:</p>
      <ul class="list-disc pl-6 text-sm text-gray-800">
        <li v-for="(error, index) in errors" :key="index">
          Línea {{ error.line }}: {{ error.message }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  defineProps({
    errors: {
      type: Array,
      required: true
    }
  })
  </script>
  