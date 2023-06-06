import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { IonicVue } from '@ionic/vue';
import styles from './index.css'
import axios from 'axios';

axios.defaults.baseURL = 'https://www.amizax.com/api/v1/'

const app = createApp(App)
app.use(store)
app.component("modal", {template: "#modal-template"})
app.use(router)
app.use(IonicVue)
app.mount('#app')
