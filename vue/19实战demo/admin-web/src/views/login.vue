<template>
    <div>
        <login-header></login-header>
        <el-row :gutter="0"  class="login-container">
            <el-col :span="12" :offset="3" class="login-carousel">
                <login-carousel></login-carousel>
            </el-col>
            <el-col :span="5" :offset="2">
            <!-- <el-col :xs="12" :sm="9" :md="5" lg="4"> -->
                <div class="login-card">
                    <p>管理员登录</p>
                    <el-form ref="form" :rules="rules" :model="form" label-width="50px">
                        <el-form-item label="账户" prop="username">
                            <el-input v-model="form.username" prefix-icon="el-icon-message"  placeholder="请输入管理员账号" clearable></el-input>
                        </el-form-item>
                        <el-form-item label="密码" prop="password">
                            <el-input type="password" v-model="form.password"  prefix-icon="el-icon-tickets" placeholder="请输入管理员密码" clearable></el-input>
                        </el-form-item>
                        <el-row type="flex" justify="center">
                            <el-col :span="24">
                                <el-form-item >
                                    <el-button type="primary" :loading="btnLoginLoading" style="width: 100%" @click="onLogin()">登录</el-button>
                                    <!-- <el-button>重置</el-button> -->
                                </el-form-item>
                            </el-col>
                        </el-row>
                        <el-form-item>
                            <el-button type="text" style="float: right">忘记密码？</el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </el-col>
        </el-row>
        <login-footer></login-footer>
    </div>
</template>

<script>
import LoginHeader from "../components/login/LoginHeader";
import LoginCarousel from "../components/login/LoginCarousel";
import LoginFooter from "../components/login/LoginFooter";

export default {
  name: "login",
  components: {
    "login-header": LoginHeader,
    "login-carousel": LoginCarousel,
    "login-footer": LoginFooter
  },
  data() {
    return {
      btnLoginLoading: false,
      form: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            required: true,
            message: "请输入正确的管理员名称",
            trigger: "blur"
          },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" }
        ],
        password: [
          {
            required: true,
            message: "请输入正确的管理员密码",
            trigger: "blur"
          },
          { min: 6, max: 13, message: "长度在6到13个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onLogin() {
      // 按钮状态渲染
      this.btnLoginLoading = true;
      // 参数校验

      //发送请求
      this.$http
        .post("/login", {
          params: this.form
        })
        .then(response => {
          //   console.log(response);
          this.btnLoginLoading = false;
          this.onLoginCallback(response.data);
        })
        .catch(error => {
          this.btnLoginLoading = false;
          console.log(error);
        });
    },
    onLoginCallback(data) {
      if (0 == data.ret) {
        this.openMsg("success", "登录成功！");
        this.$router.push({name: 'home'})
      } else {
        this.openMsg("error", "登录失败，用户名或密码错误！");
      }
    },
    openMsg(type, msg) {
      this.$message({
        type: type,
        message: msg
      });
    }
  }
};
</script>

<style scoped>
.login-carousel {
  margin-top: 160px;
}

.login-card {
  margin-top: 120px;
  padding: 25px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 1px 1px 5px 5px #eee;
}

.login-card p {
  font-size: 16px;
  color: #409eff;
  margin-bottom: 30px;
}
</style>
