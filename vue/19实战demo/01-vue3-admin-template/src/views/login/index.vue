<template>
    <div class="login-container">
        <!-- 导航栏区域 -->
        <el-menu 
        mode="horizontal"
        background-color="#343a40"
        text-color="#fff"
        active-text-color="#19e8ff">
            <el-menu-item index="0">
                <div class="brand">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
                    &nbsp;
                    <a href="http://www.nzcstudy.top" target="_blank">E21无人超市</a>
                </div>
            </el-menu-item>
            <el-submenu index="2" style="float:right">
                <template slot="title" >语言选择</template>
                <el-menu-item index="2-2">中文</el-menu-item>
                <el-menu-item index="2-3">English</el-menu-item>
            </el-submenu>
            <el-submenu index="3" style="float:right">
                <template slot="title" >平台登录</template>
                <el-menu-item index="3-2">选项一</el-menu-item>
                <el-menu-item index="3-3">选项二</el-menu-item>
                <el-menu-item index="3-4">选项四</el-menu-item>
            </el-submenu>
            <el-menu-item index="main" style="float:right">
              <a href="http://www.nzcstudy.top" target="_blank">首页</a>
            </el-menu-item>
        </el-menu>
        <!-- 内容区域 -->
        <div class="login-content">
            <el-row type="flex" justify="space-around">
                <el-col :span="12">
                <div class="login-slogan-wrapper">
                    <p>无人超市</p>
                    <p>让你离未来更近一点</p>
                    <span>Intelligent Supermarket Management System.</span>
                </div>
                </el-col>
                <el-col :span="12">
                    <div class="login-form-wrapper" >
                        <h3>账号密码登录</h3>
                        <el-form ref="loginForm" :model="loginForm" :rules="rules">
                            <el-form-item  prop="username">
                                <el-input prefix-icon="el-icon-tickets" v-model="loginForm.username" placeholder="请输入管理员账号"></el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input v-model="loginForm.password" 
                                prefix-icon="el-icon-document" 
                                :type="pwdType"
                                placeholder="请输入管理员密码" 
                                @keyup.enter.native="handleLogin">
                                    <i slot="suffix" class="el-icon-view" @click="showPwd"></i>
                                </el-input>
                            </el-form-item>
                            <el-button type="primary" :loading="btnLoading" class="btn-login" @click.native.prevent="handleLogin">登录</el-button>
                            <el-button type="text"  class="btn-forget-password" @click="forgetPassword">忘记密码?</el-button>
                        </el-form>
                    </div>
                </el-col>
            </el-row>
        </div>
        <!-- 底部栏区域 -->
        <login-footer></login-footer>
    </div>
</template>

<script>
import Footer from "@/components/footer/index";
import JSEncrypt from "jsencrypt/bin/jsencrypt.min.js";
import { RSA_encrypt } from "@/utils/encrypt.js";

// console.log(this.$store.state.count);
// store.commit("increment");
// console.log(store.state.count);

export default {
  name: "login",
  components: {
    "login-footer": Footer
  },
  computed: {},
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入管理员账号", trigger: "blur" },
          {
            min: 3,
            max: 8,
            message: "账号长度在 3 到 8 个字符",
            trigger: "blur"
          }
        ],
        password: [
          { required: true, message: "请输入管理员密码", trigger: "blur" },
          {
            min: 8,
            max: 13,
            message: "密码长度在 8 到 13 个字符",
            trigger: "blur"
          }
        ]
      },
      pwdType: "password",
      btnLoading: false,
      btnSubmitState: false,
      redirect: undefined
    };
  },
  watch: {
    $route: {
      handler: function(route) {
        this.redirect = route.query && route.query.redirect;
      },
      immediate: true
    }
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log("---验证规则校验---");
          if (this.btnSubmitState == false) {
            this.btnSubmitState = true;
            this.btnLoading = true;
            console.log("---开始登录---");
            let encrypt = new JSEncrypt();
            let encrypt_data = {
              username: this.loginForm.username,
              password: this.loginForm.password
            };
            let public_key =
              "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDFEHPYIJHlzpPxibqSXQQ//iNQ5jouawoF+9FRuH1vgRAeBr6guLz61U+a3rjQu4tvBwuaVocbTh3ZCTYtrOEelTmTLa5SCOLBNx5NF1DXz062aP2A7sqskSHGTujagcs9eHvH1T4dpYwyEXaahHokuXzH1jmTFzkq3TT5pPu6hQIDAQAB";
            var encrypted_data = RSA_encrypt(encrypt, encrypt_data, public_key);
            console.log(encrypted_data);
          }
        } else {
          return false;
        }
      });
    },
    forgetPassword() {
      // mutations
      // this.$store.commit("increament")
      // actions
    //   this.$store.dispatch("act_increament");
    }
  }
};
</script>

<style lang="scss" scoped>
$brand-color: #19e8ff;

.brand {
  color: $brand-color;
  a {
    font-size: 16px;
  }
}
.login-content {
  width: 100%;
  height: 85vh;
  background: url("~@/assets/login/bg.png") no-repeat;
  background-size: 100% 100%;
  .el-row {
    .el-col {
      margin-top: 10vh;
      .login-slogan-wrapper {
        margin-top: 80px;
        margin-left: 260px;
        p {
          font-size: 32px;
          color: #fff;
        }
        span {
          font-size: 18px;
          color: $brand-color;
        }
      }

      .login-form-wrapper {
        width: 320px;
        height: 340px;
        margin-left: 12vw;
        padding: 25px;
        background-color: #fff;
        box-shadow: 1px 1px 5px #666;
        h3 {
          color: #409eff;
          margin-bottom: 30px;
        }
        .btn-login {
          width: 100%;
          margin-top: 20px;
        }
        .btn-forget-password {
          float: right;
          margin-top: 15px;
        }
      }
    }
  }
}
</style>

