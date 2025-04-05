<template>
    <Layout>
        <FileUpload @file-selected="handleFile" />

        <n-button type="success" class="mt-4" :loading="loading" @click="submitFile" :disabled="!file">
            Enviar archivo
        </n-button>

        <ResultsTable v-if="results" :results="results" />
    </Layout>
</template>

<script setup>
import { ref } from 'vue'
import Layout from '@/components/Layout.vue'
import FileUpload from '@/components/FileUpload.vue'
import ResultsTable from '@/components/ResultsTable.vue'
import { simulateCsvUpload } from '@/services/fileService'

const file = ref(null)
const results = ref(null)
const loading = ref(false)

function handleFile(selectedFile) {
    file.value = selectedFile
}

async function submitFile() {
    loading.value = true
    results.value = null

    try {
        const response = await simulateCsvUpload(file.value)

        results.value = {
            updated: response.success_count,
            notUpdated: response.failed_count,
            failed_items: response.failed_items,
            errors: response.failed_items
        }
    } catch (error) {
        console.error(error)
    } finally {
        loading.value = false
    }
}
</script>