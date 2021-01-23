import Vue from 'vue'
import App from './App.vue'
import store from './store';
import router from './router';

import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/scss/app.scss'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  router,
  components: {
    App,
  },
  template: '<App/>',
})