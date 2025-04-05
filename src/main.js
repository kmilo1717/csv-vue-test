import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import naive from 'naive-ui'
import '@/assets/tailwind.css'
import router from './router'



const app = createApp(App)
app.use(naive)
app.use(router)
app.mount('#app')
