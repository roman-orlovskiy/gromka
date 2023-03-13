import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createRouter, createWebHashHistory } from 'vue-router';
import vClickOutside from 'click-outside-vue3';
import routes from './routes';
import App from './App.vue';
import './assets/scss/main.scss';

const app = createApp(App);
const pinia = createPinia();

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

app.use(pinia);
app.use(router);
app.use(vClickOutside);

app.mount('#app');
