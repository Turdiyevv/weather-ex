import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import http from "@/plugins/axios.js";

const app = createApp(App);

app.config.globalProperties.$http = http;

app.use(createPinia());
app.mount('#app');
