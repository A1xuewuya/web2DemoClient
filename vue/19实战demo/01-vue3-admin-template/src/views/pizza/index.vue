<template>
    <div>
        <el-menu mode="horizontal"
        background-color="#232323" 
        text-color="#fff"
        active-text-color="#ffd04b"
        >
            <el-menu-item index="menu" >首页</el-menu-item>
            <el-menu-item index="home">系统菜单</el-menu-item>
            <el-menu-item index="admin">处理中心</el-menu-item>
            <el-menu-item index="4">技术储备</el-menu-item>
            <el-menu-item index="5">
                <a href="https://www.baidu.com" target="_blank">百度一下</a>
            </el-menu-item>
            <el-menu-item index="5-">
                <a href="https://www.nzcstudy.com" target="_blank">域名网站</a>
            </el-menu-item>
            <el-submenu index="6">
                <template slot="title">我的工作台</template>
                <el-menu-item index="6-1">账户中心</el-menu-item>
                <el-menu-item index="6-2">平台测试</el-menu-item>
                <el-menu-item index="6-3">区块链</el-menu-item>
            </el-submenu>
        </el-menu>
        <div class="content">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
  name: "pizza",
  data() {
    return {
      activeName: "first"
    };
  }
};
</script>

<style lang="scss" scoped>
.content{
    padding: 15px;
}
</style>
