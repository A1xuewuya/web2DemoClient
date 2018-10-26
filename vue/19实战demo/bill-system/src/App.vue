<template>
  <div id="app">
      <item-header></item-header>
      <sidebar></sidebar>
      <div class="content">
          <transition name="move" mode="out-in">
              <router-view></router-view>
          </transition>
      </div>
  </div>
</template>

<script>
import Header from "@/components/public/header";
import Sidebar from "@/components/public/sidebar";

export default {
  name: "app",
  components: {
    "item-header": Header,
    sidebar: Sidebar
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
  color: #606266;
}
.content{
    background: none repeat scroll 0 0 #F9FAFC;
    position: absolute;
    left: 200px;
    right: 0;
    top: 60px;
    bottom: 0;
    width: auto;
    padding: 20px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow-y: scroll
}
</style>
