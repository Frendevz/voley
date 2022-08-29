import { createWebHistory, createRouter } from 'vue-router';
import Home from '../pages/Home.vue';
import Players from '../pages/Players/Players.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/players',
    name: 'Players',
    component: Players,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
