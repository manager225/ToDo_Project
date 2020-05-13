import Vue from 'vue'
import Router from 'vue-router'
// import auth from "../store/auth";
import Store from "../store";

Vue.use(Router);
Vue.use(Store);
// Vue.use(auth);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: { layout: 'empty' },
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'register',
      meta: { layout: 'empty' },
      component: () => import('../views/Register.vue')
    },
    {
      path: '/',
      name: 'dashboard',
      meta: { layout: 'main' },
      component: () => import('../views/Dashboard.vue'),
      beforeEnter: AuthGuard
    },
    {
      path: '/projects',
      name: 'projects',
      meta: { layout: 'main' },
      component: () => import('../views/Projects.vue'),
      beforeEnter: AuthGuard
    },
    {
      path: '/team',
      name: 'team',
      meta: { layout: 'main' },
      component: () => import('../views/Team.vue'),
      beforeEnter: AuthGuard
    },

  ]
})

function AuthGuard(from, to, next) {
  if(Store.getters.isUserAuthenticated)
    next();
  else next ('/login')
}