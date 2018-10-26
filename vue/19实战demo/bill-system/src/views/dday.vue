<template>
    <div class="today">
        <el-button type="primary" icon="el-icon-search" @click="search()">查询</el-button>
        <el-button type="primary" icon="el-icon-plus" @click="increase()">添加</el-button>
        <div class="billtable">
            <el-table :data="tableData" stripe>
                <el-table-column prop="date" label="日期"></el-table-column>
                <el-table-column prop="time" label="具体时间"></el-table-column>
                <el-table-column prop="money" label="金额"></el-table-column>
                <el-table-column prop="mdetails" label="具体详情"></el-table-column>
                <el-table-column  label="操作">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-dialog title="消费记录" :visible.sync="dialogFormVisible">
                <el-form :modal="form">
                    <el-form-item label="日期" :label-width="formLabelWidth">
                        <el-date-picker  v-model="form.date"   type="date"  placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="具体时间" :label-width="formLabelWidth">
                        <el-input v-model="form.time" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="金额" :label-width="formLabelWidth">
                        <el-input v-model="form.money" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="备注" :label-width="formLabelWidth">
                        <el-input v-model="form.mdetails" auto-complete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogFormVisible = false">取消</el-button>
                    <el-button type="primary" @click="updateData()">确定</el-button>
                </div>
            </el-dialog>
        </div>
    </div>
</template>

<script>
export default {
  name: "dday",
  data() {
    return {
      tableData: [
        {
          date: "2017-07-21",
          time: "08:40",
          money: "￥6",
          mdetails: "早餐钱"
        },
        {
          date: "2017-07-21",
          time: "11:55",
          money: "￥15",
          mdetails: "午餐钱"
        },
        {
          date: "2017-07-21",
          time: "18:55",
          money: "￥2",
          mdetails: "公交车钱"
        },
        {
          date: "2017-07-21",
          time: "19:15",
          money: "￥15",
          mdetails: "买菜钱"
        }
      ],
      dialogFormVisible: false,
      form: {
        id: "",
        date: "",
        time: "",
        money: "",
        mdetails: ""
      },
      formLabelWidth: "120px"
    };
  },
  methods: {
    search() {
      console.log("查询");
    },
    increase() {
      console.log("添加");
      this.form = "";
      this.dialogFormVisible = true;
    },
    handleEdit(index, row) {
      // index为下标 row为对象
      console.log(index + "===" + row);
      // console.log(row.time)
      // 打开dialog对话框并处理
      this.form = row;
      this.form.id = index;
      this.dialogFormVisible = true;
    },
    formatedate() {
      // 格式化时间
      if (mydate) {
        console.log("有时间数据");
        var reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$/;
        var regExp = new RegExp(reg);
        if (!regExp.test(mydate)) {
          console.log("没有通过正则");
          var y = mydate.getFullYear();
          var m = mydate.getMonth() + 1;
          m = m < 10 ? "0" + m : m;
          var d = mydate.getDate();
          d = d < 10 ? "0" + d : d;
          return y + "-" + m + "-" + d;
        } else {
          console.log("通过正则");
          return mydate;
        }
      } else {
        console.log("没有时间数据");
        return "";
      }
    },
    handleDelete(index, row) {
      // console.log(index + "===" + row)
      // 删除一行数据
      this.tableData.splice(index, 1);
    },
    updateData() {
      // 确定修改数据
      console.log("更新数据");
      this.dialogFormVisible = false;
    }
  }
};
</script>


<style scoped>
</style>

