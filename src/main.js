import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { IonicVue } from '@ionic/vue';
import axios from 'axios';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';

axios.defaults.baseURL = 'https://amizax.com/api/v1/'

const app = createApp(App)
app.use(store)
app.component("modal", {template: "#modal-template"})
app.use(router)
app.use(IonicVue)
app.use(VueSweetalert2);
app.mount('#app')
