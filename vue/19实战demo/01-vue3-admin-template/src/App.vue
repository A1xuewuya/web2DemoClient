<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  font-size: 14px;
  color: #333;
  min-width: 992px;
  white-space: nowrap; 
  a {
    text-decoration: none;
  }
}
</style>

