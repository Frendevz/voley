import { createApp } from 'vue';
import App from './App.vue';
import { delay } from './Util';
import PlayerManager from './modules/PlayerModule/PlayerManager';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import './style.css';
import Antd from 'ant-design-vue';

//@ts-ignore
window.pm = PlayerManager;

(async () => {
  createApp(App).use(router).use(Antd).mount('#app');
})();
