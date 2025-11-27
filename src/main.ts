import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import { LazyDirective } from '@/directives/lazy'
import { componentPlugin } from './components/index'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.directive('img-lazy', LazyDirective)
app.use(componentPlugin)
app.mount('#app')


