import Router from 'vue-router'
import Home from '@/components/Home'
import Table from '@/components/Table'
import Form from '@/components/Form'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    }
  ],
  mode: 'history'
})
