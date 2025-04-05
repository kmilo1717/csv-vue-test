<template>
    <div class="mb-4">
      <n-upload
        :max="1"
        accept=".csv"
        :custom-request="() => {}"
        :on-change="handleChange"
        :default-upload="false"
      >
        <n-button type="primary">Seleccionar Archivo CSV</n-button>
      </n-upload>
      <p v-if="fileName" class="mt-2 text-sm text-gray-600">Archivo: {{ fileName }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['file-selected'])
  
  const fileName = ref(null)
  
  const handleChange = (options) => {
    const file = options.file.file
    if (file && file.name.endsWith('.csv')) {
      fileName.value = file.name
      emit('file-selected', file)
    } else {
      fileName.value = null
    }
  }
  </script>
  