// 官方插件
import Vue from 'vue'
import router from './router'
import store from './store'

// 第三方插件
import './plugins/element.js'

// 导入组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
