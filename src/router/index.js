import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Main from '../components/main.vue'
import Form from '../components/form.vue'
import Login from '../components/login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
     path: '/app',
      name: 'App',
      component: Main,
      children: [
        {
          path: '/students',
          name: 'Students',
          component: Form,
        }
      ]
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    }
  ],
  mode: 'history',
  base: __dirname
})
