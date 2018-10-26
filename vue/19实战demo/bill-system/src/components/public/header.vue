<template>
    <div class="header">
        <div class="brand">区块链后台管理系统</div>
        <div class="user-menu">
            <el-dropdown placement="bottom">
                <span class="el-dropdown-link">
                    <img class="avatar" src="~@/assets/avatar.jpeg" alt="">
                </span>
                <el-dropdown-menu slot="dropdown" >
                    <el-dropdown-item>账号设置</el-dropdown-item>
                    <el-dropdown-item>我的主页</el-dropdown-item>
                    <el-dropdown-item>安全退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </div>
</template>

<script>
export default {
  name: "item-header",
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
.header{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #232323;
    color: white;
}
.brand{
    margin-left: 20px;
    font-size: 15px;
    font-weight: bold;
    float: left;
}
.user-menu{
    float: right;
    height: 60px;
    width: 60px;
    margin-right: 60px;
}
.avatar{
    width: 50px;
    height: 50px;
    border-radius: 100%;
    vertical-align: middle;
}

</style>


