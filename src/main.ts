import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { delay } from './Util';
import PlayerManager from './modules/PlayerModule/PlayerManager';
import router from './router';

(async () => {
  createApp(App).use(router).mount('#app');
})();
