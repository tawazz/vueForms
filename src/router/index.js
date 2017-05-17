import Vue from 'vue'
import Router from 'vue-router'
import Forms from '@/components/Form'

Vue.use(Router)

export default new Router({
  'mode': 'history',
  routes: [{
    path: '/',
    name: 'forms',
    component: Forms
  }, ]
})
