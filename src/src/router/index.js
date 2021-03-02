import Vue from 'vue';
import Router from 'vue-router';
import Auth from '@/libs/Auth';
import Dashboard from '@/components/home/Dashboard';
import User from '@/router/user';
import Login from '@/components/user/Login';

Vue.use(Router);

const routes = [{
  path: '/',
  name: 'home',
  component: Dashboard,
},
{
  path: '/login',
  name: 'Login',
  component: Login,
}, ...User];

/*
  eslint-disable object-shorthand
*/
const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else if (Auth.hasToken()) {
    next();
  } else {
    next({
      path: '/login',
      query: {
        redirect: to.path,
      },
    });
  }
});

export default router;
