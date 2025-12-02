import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { LazyDirective } from '@/directives/lazy'
import { componentPlugin } from './components/index'


const app = createApp(App)
const pinia = createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(router)
app.directive('img-lazy', LazyDirective)
app.use(componentPlugin)
app.mount('#app')


