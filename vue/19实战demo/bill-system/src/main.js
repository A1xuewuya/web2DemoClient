import Vue from "vue";
import router from "./router";
import store from "./store";

import "./plugins/element.js";
// import echarts from "echarts"; 全局引入echarts

import App from "./App.vue";

Vue.config.productionTip = false;
// Vue.prototype.$echarts = echarts;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
