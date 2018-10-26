<template>
    <div>
        <h2>radio单选框</h2>
        <p>基础用法</p>
        <el-radio v-model="radio1" label="1">备选项1</el-radio>
        <el-radio v-model="radio1" label="2">备选项2</el-radio>
        
        <p>禁用状态</p>
        <el-radio v-model="radio2" label="禁用" disabled="">备用项</el-radio>
        <el-radio v-model="radio2" label="选中且禁用" disabled="">备用项</el-radio>

        <p>单选框组</p>
        <el-radio-group v-model="radio3">
            <el-radio :label="3">3</el-radio>
            <el-radio :label="6">6</el-radio>
            <el-radio :label="9">9</el-radio>
        </el-radio-group>

        <h2>checkbox多选框</h2>
        <p>基础语法</p>
        <el-checkbox v-model="checked"> 
            备选项
        </el-checkbox>

        <p>禁用状态</p>
        <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
        <el-checkbox v-model="checked2" disabled>备选项2</el-checkbox>

        <p>多选框组</p>
        <el-checkbox-group v-model="checkList">
            <el-checkbox label="复选框A"></el-checkbox>
            <el-checkbox label="复选框B"></el-checkbox>
            <el-checkbox label="复选框C"></el-checkbox>
            <el-checkbox label="禁用" disabled></el-checkbox>
            <el-checkbox label="选中且禁用" disabled></el-checkbox>
        </el-checkbox-group>

        <p>indeterminate状态</p>
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <br>
        <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
            <el-checkbox v-for="city in cities" :key="city" :label="city">
                {{ city }}
            </el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
export default {
  data() {
    return {
      radio1: "1",
      radio2: "选中且禁用",
      radio3: 0,
      checked: true,
      checked1: false,
      checked2: true,
      checkList: ["选中且禁用", "复选框B"],
    };
  }
};
</script>

