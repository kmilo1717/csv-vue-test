<template>
    <div class="min-h-screen bg-gray-100 text-gray-800">
      <header class="bg-white shadow sticky top-0 z-50">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 class="text-2xl font-bold text-gray-700">
            CSV Uploader
          </h1>
          <n-space>
            <n-button tertiary>
              Ayuda
            </n-button>
          </n-space>
        </div>
      </header>
  
      <main class="max-w-4xl mx-auto mt-8 p-6 bg-white shadow-md rounded-2xl">
        <slot />
      </main>
  
      <footer class="text-center text-sm text-gray-500 mt-12 pb-6">
        Hecho por Camilo
      </footer>
    </div>
  </template>
  
  <script setup>
  import { NButton, NSpace } from 'naive-ui'
  </script>
  
  <style scoped>
  </style>
  