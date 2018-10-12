// 默认导入官方插件
import Vue from 'vue'
import router from './router'
import store from './store'

// 使用element Ui框架插件
import './plugins/element.js'

//导入项目视图组件
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
