import Vue from "vue";
import Router from "vue-router";
import _import from "@/utils/import";
const Layout = _import("layout/Layout");

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/login",
    name: "login",
    hidden: true,
    component: _import("login/index")
  },
  {
    path: "/",
    component: Layout,
    name: "Dashboard",
    redirect: "/dashboard",
    hidden: true,
    children: [
      {
        path: "dashboard",
        component: _import("dashboard/index")
      }
    ]
  },
  {
    path: "/pizza",
    name: "pizza",
    component: _import("pizza/index"),
    redirect: "/pizza/menu",
    children: [
      {
        path: "/pizza/menu",
        name: "menu",
        component: _import("pizza/menu")
      },
      {
        path: "/pizza/home",
        name: "home",
        component: _import("pizza/home")
      },
      {
        path: "/pizza/admin",
        name: "admin",
        component: _import("pizza/admin")
      }
    ]
  },
  {
    path: "/401",
    component: _import("error/401"),
    hidden: true
  },
  {
    path: "/404",
    component: _import("error/404"),
    hidden: true
  },
  {
    path: "*",
    redirect: "/404"
  }
];

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  // return 期望滚动到哪个的位置
  // 在屏幕上展示y轴100像素的位置
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
});
