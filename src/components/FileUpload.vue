<template>
    <div class="flex justify-center">
      <n-upload
        :max="1"
        accept=".csv"
        :on-change="handleChange"
        :default-upload="false"
        show-file-list
        class="w-full max-w-md border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-primary transition cursor-pointer"
      >
        <div class="flex flex-col items-center justify-center text-center space-y-2">
          <div class="text-gray-600">
            <strong>Haz clic</strong> o <strong>arrastra</strong> un archivo CSV aquí
          </div>
          <n-button type="primary" size="small">Seleccionar Archivo CSV</n-button>
        </div>
      </n-upload>
    </div>
  
    <p v-if="fileName" class="mt-2 text-sm text-center text-gray-600">Archivo: {{ fileName }}</p>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const emit = defineEmits(['file-selected'])
  const fileName = ref(null)
  
  const handleChange = ({ file }) => {
    const realFile = file.file
    if (realFile && realFile.name.endsWith('.csv')) {
      fileName.value = realFile.name
      emit('file-selected', realFile)
    } else {
      fileName.value = null
    }
  }
  </script>
  