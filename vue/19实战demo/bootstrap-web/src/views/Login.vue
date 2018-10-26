<template>
    <div>
        <!-- <header-carousel></header-carousel> -->
        <div class="row">
            <div class="col-md-4 offset-md-4 login-card">
                <div class="card">
                    <div class="card-header bg-info text-white">后台管理系统</div>
                    <div class="card-body">
                        <form>
                            <div class="form-group">
                            <label for="username">用户名:</label>
                            <input type="text" class="form-control" id="uname" v-model="uname" placeholder="请输入用户名">
                            </div>
                            <div class="form-group">
                            <label for="password">密码:</label>
                            <input type="password" class="form-control" id="password" v-model="upwd" placeholder="请输入密码">
                            </div>
                            <button type="button" class="btn btn-primary" @click="login()">提交</button>
                        </form>
                    </div> 
                    <div class="card-footer  bg-info text-white">&copy;&nbsp;版权所有</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";

export default {
  name: "Login",
  components: {},
  data() {
      return {
          uname: '',
          upwd: ''
      }
  },
  methods: {
      login() {
          console.log(this.uname);
          console.log(this.upwd);
      }
  }
};
</script>


<style scoped>
.login-card {
  margin-top: 200px;
}
</style>
