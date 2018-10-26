import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/Dday",
      component: resolve => require(["@/views/dday"], resolve) //懒加载
    },
    {
      path: "/Tday",
      component: resolve => require(["@/views/tday"], resolve)
    },
    {
      path: "/Basicfrom",
      component: resolve => require(["@/views/basicform"], resolve)
    },
    {
      path: "/Upflie",
      component: resolve => require(["@/views/upfile"], resolve)
    },
    {
      path: "/Ccurve",
      component: resolve => require(["@/views/chartcurve"], resolve)
    },
    {
      path: "/Ccolumn",
      component: resolve => require(["@/views/chartcolumn"], resolve)
    },
    {
      path: "/Cpie",
      component: resolve => require(["@/views/chartpie"], resolve)
    },
    {
      path: "/Cannular",
      component: resolve => require(["@/views/chartannular"], resolve)
    },
    {
      path: "/Cblend",
      component: resolve => require(["@/views/chartblend"], resolve)
    },
    {
      path: "/tableplugin",
      component: resolve => require(["@/views/tableplugin"], resolve)
    }
  ]
});
