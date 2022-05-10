import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';
import About from './pages/About.vue';
import './assets/global.css';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      meta: { isAuth: true },
      component: Home,
      alias: ['/home', '/homepage'],
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      beforeEnter(to, from, next) {
        console.log('CreateRouter: beforeEnter');
        next();
      },
    },
    { path: '/:notFound(.*)', redirect: '/' },
  ],
  linkActiveClass: 'active-link',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { left: 0, top: 0 };
  },
});

router.afterEach((to, from, next) => {
  console.log('Global: afterEach');
  next();
});

router.beforeEach((to, from, next) => {
  console.log('Global: beforeEach');
  next();
});

export default router;
