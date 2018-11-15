// 导入官方依赖
import Vue from "vue";
import router from "./router";
import store from "./store/index";
// 导入第三方依赖
import "./plugins/element.js";
import "normalize.css";
// 导入视图组件
import App from "./App.vue";
// 导入自定义初始化方法
import init from "@/utils/init";

// 全局配置
Vue.config.productionTip = false;

// 自定义初始化
init();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
