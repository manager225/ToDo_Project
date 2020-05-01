import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

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
      name: 'home',
      meta: { layout: 'main' },
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/categories',
      name: 'categories',
      meta: { layout: 'main' },
      component: () => import('../views/Projects.vue')
    },
    {
      path: '/detail/:id',
      name: 'detail',
      meta: { layout: 'main' },
      component: () => import('../views/Team.vue')
    },

  ]
})

// import Vue from 'vue'
// import VueRouter from 'vue-router'
// import Dashboard from '../views/Dashboard.vue'
// import Projects from '../views/Projects.vue'
// import Team from '../views/Team.vue'
// import Login from '../views/Login'
// import Register from '../views/Register'
//
// Vue.use(VueRouter);
//
// const routes = [
// {
//   path: '/',
//   name: 'dashboard',
//   component: Dashboard
// },
//
// {
//   path: '/projects',
//   name: 'projects',
//   component: Projects
// },
//
// {
//   path: '/team',
//   name: 'team',
//   component: Team
// },
//   {
//   path: '/login',
//   name: 'login',
//   component: Login
// },
// {
//   path: '/register',
//   name: 'register',
//   component: Register
// },
//
// ];
//
// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// });
//
// export default router

