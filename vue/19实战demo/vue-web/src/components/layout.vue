<template>
    <el-container>
        <el-header>
                <el-row :gutter="20">
                    <el-col :span="6" :offset="3">
                        <div class="header-logo">
                            <img src="../assets/logo.png" alt="">
                        </div>
                    </el-col>
                    <el-col :span="6" :offset="6">
                        <div class="header-menu">
                            <a >登录</a>
                            &nbsp;|&nbsp;
                            <a >注册</a>
                            &nbsp;|&nbsp;
                            <a >关于</a>
                        </div>
                    </el-col>
                </el-row>
        </el-header>
        <el-main>
            <!-- <keep-live> -->
                <router-view></router-view>
            <!-- </keep-live> -->
        </el-main>
        <el-footer class="footer-copy">
            <el-row>
                <el-col :span="24">
                    <div>
                        &copy; 2018 nzcstudy.top
                    </div>
                </el-col>
            </el-row>
        </el-footer>
    </el-container>    
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped>
header {
  background-color: #343a40;
}

.header-logo{
    height: 60px;
}
.header-logo img{
    width: 30px;
    margin-top: 15px;
}

.header-menu{
    height: 60px;
    line-height: 60px;
    color: #eee;
    float: right;
}

.footer-copy {
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  color: #999;
  background-color: #eee;
}
</style>

