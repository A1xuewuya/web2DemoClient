<template>
    <div class="login">
        <!-- 点击按钮 -->
        <el-button type="primary" @click="dialogFormVisible = true">添加</el-button>
        <br>
        <el-table :data="users" >
            <el-table-column label="姓名" prop="name" ></el-table-column>
            <el-table-column label="邮箱" prop="email" ></el-table-column>
        </el-table>
        <!-- dialog弹出框 -->
        <el-dialog title="添加用户信息" :visible.sync="dialogFormVisible" width="30%">
            <el-form :model="newUser">
                <el-form-item label="用户名" :label-width="formLabelWidth">
                    <el-input v-model="newUser.name" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" :label-width="formLabelWidth">
                    <el-input v-model="newUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取消</el-button>
                <el-button type="primary" @click="addNewUser">确定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      dialogFormVisible: false,
      formLabelWidth: "70px",
      newUser: {
        name: "",
        email: ""
      },
      users: [
        {
          name: "你好",
          email: "qfdfs@qq.com"
        },
        {
          name: "世界",
          email: "qfdfs@qq.com"
        },
        {
          name: "蓝天",
          email: "qfdfs@qq.com"
        }
      ]
    };
  },
  methods: {
    addNewUser() {
      this.users.push(this.newUser);
      this.dialogFormVisible = false;
    }
  }
};
</script>

<style scoped>
</style>
