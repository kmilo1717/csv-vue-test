import { createRouter, createWebHistory } from 'vue-router'
import UploadPage from '@/pages/UploadPage.vue'

const routes = [
  {
    path: '/',
    name: 'upload',
    component: UploadPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
