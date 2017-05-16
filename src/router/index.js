import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Forms from '@/components/Form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms
    },
  ]
})
