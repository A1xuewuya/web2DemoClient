<template>
    <!-- <div id="main-login"> -->
        <el-row :gutter="0">
            <el-col :span="6" :offset="9" class="msg-login">
                <div>
                    <h3>后台管理系统登录</h3>
                    <el-form ref="form" :model="form" label-width="80px">
                        <el-form-item label="用户名">
                            <el-input v-model="form.username"></el-input>
                        </el-form-item>
                        <el-form-item label="密码">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                        <el-row :gutter="0">
                            <el-col :span="12" :offset="8">
                                <el-button type="primary" @click="onSubmit">登录</el-button>
                                <el-button type="primary">重置</el-button>
                            </el-col>
                        </el-row>
                    </el-form>
                </div>
            </el-col>
        </el-row>
    <!-- </div> -->
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
      onSubmit() {
          console.log(this.form)
      }
  }
};
</script>

<style scoped>
.msg-login {
  margin-top: 10%;
  padding: 30px;
  background-color: #f2f6fc;
  border-radius: 4px;
}

.msg-login h3 {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  color: #409eff;
  text-align: center;
  margin-bottom: 30px;
}
</style>
