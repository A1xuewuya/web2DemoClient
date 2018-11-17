import Vue from "vue";
import Router from "vue-router";
import _import from "@/utils/import";
const Layout = _import("layout/Layout");

Vue.use(Router);

export const constantRouterMap = [
  {
    path: "/",
    name: "root",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "login",
    component: _import("login/index")
  },
  {
    path: "/home",
    name: "home",
    component: _import("home/index")
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

/*
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
  */
