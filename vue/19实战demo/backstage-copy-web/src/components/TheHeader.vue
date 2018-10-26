<template>
    <div class="header">
        <el-dropdown>
            <el-button>
                <img alt="" class="avatar" src="~@/assets/portrait.png" />
                {{name}}
                <i class="el-icon-arrow-down el-icon--right"></i>
            </el-button>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>系统设置</el-dropdown-item>
                <el-dropdown-item>安全退出</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </div>
</template>

<script>
export default {
  name: "TheHeader",
  data() {
    return {
      name: "A1学无涯"
    };
  }
};
</script>

<style lang="scss" scoped>
.header{
  height: 100%;
  width: 100%;
  .el-dropdown {
    float: right;
    margin-right: 50px;
    .el-button {
      padding: 2px 20px 2px 2px;  // 重置button的样式，去除本有的padding
      border-radius: 50px;
      color: #00B5FF;
      font-size: 14px;
      .avatar {
        width: 50px;
        height: 50px;
        margin-right: 6px;
        border-radius: 40px;
        vertical-align: middle
      }
    }
  }
}
</style>
