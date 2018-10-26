<template>
    <div class="login-header">
        <el-menu class=".login-header-navbar" mode="horizontal" text-color="#fff" 
        active-text-color="#409eff" background-color="#262626" @select="handleNavbarSelect">
            <el-menu-item index="1">
                <i class="el-icon-tickets"></i>
                <span>网站首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-location"></i>
                <span>测试</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">我的工作台</template>
                <el-menu-item index="3-1">选项一</el-menu-item>
                <el-menu-item index="3-2">选项二</el-menu-item>
                <el-menu-item index="3-3">选项三</el-menu-item>
            </el-submenu>
            <el-menu-item index="4">
                <i class="el-icon-message"></i>
                <span>测试</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
  methods: {
    handleNavbarSelect(key, keyPath) {
      console.log(key);
    }
  }
};
</script>


<style scoped>
</style>

