import Vue from 'vue';
import Router from 'vue-router';

import List from '@/components/List'
import Add from '@/components/Add'

Vue.use(Router)
 
export default new Router({
  routes: [
          {
        path: '/list',
        name: 'List',
        component: List
      },
      {
        path: '/add',
        name: 'Add',
        component: Add
      }
  ]
})