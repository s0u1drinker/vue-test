import Vue from 'vue'
import { Plugin } from 'vue-fragment'
import App from './App'
import store from './store'

Vue.use(Plugin)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  components: { App },
  store,
  template: '<App/>'
})
