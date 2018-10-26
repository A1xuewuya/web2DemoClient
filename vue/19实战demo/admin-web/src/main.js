import Vue from "vue";
import router from "./router";
import store from "./store";

import "./plugins/element.js";
import Axios from "axios";

import App from "./App.vue";

// 配置请求信息
var $http = Axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: "80000", //请求超时时间
  headers: {
    "X-custom-header": "foobar" // header传值，例如 Authorization
  }
});
Vue.prototype.$http = $http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
