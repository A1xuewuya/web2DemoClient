// 导入官方依赖
import Vue from 'vue'
import router from './router'
import store from './store'

// 导入第三方依赖
import $ from 'jquery'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'

// 导入vue视图文件
import App from './App.vue'

// 全局基本配置
// window.$ = window.jQuery = $
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
