<template>
    <div class="mt-8">
        <p class="text-lg font-bold mb-4 text-red-700">Errores de registros</p>

        <div class="overflow-x-auto">
            <n-data-table :columns="columns" :data="tableData" :pagination="false"
                class="shadow rounded-lg min-w-[600px]" size="small" bordered />
        </div>
    </div>
</template>

<script setup>
import { NDataTable } from 'naive-ui'
import { computed } from 'vue'

const props = defineProps({
    failedItems: {
        type: Array,
        required: true
    }
})

const columns = [
    {
        title: 'Nombre',
        key: 'name'
    },
    {
        title: 'Correo',
        key: 'email'
    },
    {
        title: 'Empresa',
        key: 'company'
    },
    {
        title: 'Errores',
        key: 'errors',
        render(row) {
            return row.errors.join(', ')
        }
    }
]

const tableData = computed(() =>
    props.failedItems.map((item) => ({
        name: `${item.data.FirstName} ${item.data.LastName}`,
        email: item.data.Email,
        company: item.data.Company,
        errors: item.errors
    }))
)
</script>