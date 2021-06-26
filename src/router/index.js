import Vue from 'vue';
import VueRouter from 'vue-router';
import Landing from '../views/Landing.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Landing',
    component: Landing,
  },
  {
    path: '/explore-bavatars',
    name: 'Explore Bavatars',
    component: () => import('../views/Explore.vue'),
  },
  {
    path: '/privacy-and-policy',
    name: 'Privacy',
    component: () => import('../views/Privacy.vue'),
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: () => import('../views/Contributors.vue'),
  },
  {
    path: '/add',
    name: 'Add Bavatar',
    component: () => import('../views/Add/Terms.vue'),
  },
  {
    path: '/add-review',
    name: 'Review Bavatar',
    props: true,
    params: true,
    component: () => import('../views/Add/Review.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
