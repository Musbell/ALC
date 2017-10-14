import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
// import Placeholder from '../components/placeholder.vue'
import Form from '../components/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/',
    //   name: 'Placeholder',
    //   component: Placeholder
    // },
    {
      path: '/',
      name: 'Form',
      component: Form
    }
  ],
  mode: 'history',
  base: __dirname
})
