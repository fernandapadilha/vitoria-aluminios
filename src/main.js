import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

import './assets/main.css'
import('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

import { createApp } from 'vue'
import { createPinia } from 'pinia';

import App from './App.vue'
import router from './router'

const pinia = createPinia();
const app = createApp(App)


app.use(pinia)
app.use(router)
app.mount('#app')
