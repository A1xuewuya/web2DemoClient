<template>
    <div class="login" :style="{background: 'url(' + bgUrl + ')' }">
        <el-row>
            <el-col :span="6" :offset="9" >
                <el-form :ref="form" :modal="form" >
                    <el-form-item >
                        <el-input v-model="form.username" placeholder="请输入管理员账号"></el-input>
                    </el-form-item>
                    <el-form-item >
                        <el-input v-model="form.paddword" placeholder="请输入管理员密码"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="text" style="float: right">忘记密码？</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" style="width: 100%;">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: "login",
  components: {},
  data() {
    return {
      bgUrl: "",
      form: {
        username: "",
        paddword: ""
      }
    };
  },
  methods: {
    initBG() {
      this.$http
        .post("/login/bgurl", {})
        .then(response => {
          this.set_bg(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    set_bg(data) {
      if (0 == data.ret) {
        this.bgUrl = data.bgurl;
      } else {
        console.log("---背景设置出现错误!!!");
      }
    }
  },
  created() {
    this.initBG();
  }
};
</script>

<style lang="scss" scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
}
.el-row {
  margin-top: 200px;
}
.el-col{
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px #666;
}
.el-form{
    padding: 35px;
}

</style>
