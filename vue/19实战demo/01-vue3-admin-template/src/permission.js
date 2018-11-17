import router from "./router";
import store from "./store/index";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./utils/auth";
import { Message } from "element-ui";

// 不重定向白名单
const whiteList = ["/login", "/401", "/404"];

router.beforeEach((to, from, next) => {
  console.log("---全局路由导航---");
  NProgress.start(); // 开启进度条加载

  if (getToken()) {
    // 如果是已经登录状态
    // console.log(getToken());
    if (to.path == "/login") {
      next({ path: "home" });
      NProgress.done();
    } else {
      if (store.getters.roles.length === 0) {
        store
          .dispatch("GetInfo")
          .then(
            //拉取用户信息
            res => {
              next();
            }
          )
          .catch(error => {
            console.log(error);
            store.dispatch("FedLogOut").then(() => {
              Message.error(
                error || "Verification failed , please login again!!!"
              );
              next(`/login?redirect=${to.path}`);
            });
          });
      } else {
        next();
      }
    }
  } else {
    // 如果没有登录状态或过期
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next(`/login?redirect=${to.path}`);
    }
    NProgress.done();
  }
});

router.afterEach((to, from, next) => {
  console.log("---后置钩子---");
  NProgress.done();
});
