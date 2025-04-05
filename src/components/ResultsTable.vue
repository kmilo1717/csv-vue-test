<template>
    <FailedItemsTable v-if="results?.failed_items?.length" :failedItems="results.failed_items" />

    <div class="mt-6">
        <p class="text-xl font-bold mb-4 text-gray-700">Resultados</p>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <n-card size="small" class="border border-green-200 bg-green-50">
                <div class="flex items-center gap-2 text-green-700">
                    <CheckCircle class="w-5 h-5" />
                    <span class="font-semibold">Actualizados:</span>
                    <span class="ml-auto">{{ results.updated }}</span>
                </div>
            </n-card>

            <n-card size="small" class="border border-yellow-200 bg-yellow-50">
                <div class="flex items-center gap-2 text-yellow-700">
                    <AlertCircle class="w-5 h-5" />
                    <span class="font-semibold">No actualizados:</span>
                    <span class="ml-auto">{{ results.notUpdated }}</span>
                </div>
            </n-card>

            <n-card size="small" class="border border-red-200 bg-red-50">
                <div class="flex items-center gap-2 text-red-700">
                    <XCircle class="w-5 h-5" />
                    <span class="font-semibold">Errores:</span>
                    <span class="ml-auto">{{ results.errors.length }}</span>
                </div>
            </n-card>
        </div>
    </div>
</template>

<script setup>
import { NCard } from 'naive-ui'
import { CheckCircle, XCircle, AlertCircle } from 'lucide-vue-next'
import FailedItemsTable from './FailedItemsTable.vue'

defineProps({
  results: {
    type: Object,
    required: true
  }
})

</script>