// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import axios from 'axios'

import App from './App'

// 设置axios
axios.defaults.headers.common['token'] = "aaafdsfsdfdgfdgdfgdfgrhfbvc"
axios.defaults.headers.post['Content-type'] = "application/json"
Vue.prototype.$axios = axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
