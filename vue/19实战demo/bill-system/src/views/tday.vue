<template>
    <div>
        <div class="timeQuery">
        <el-date-picker
        v-model="date" type="daterange" unlink-panels range-separator="至"
        start-placeholder="开始日期" end-placeholder="结束日期">
        </el-date-picker>
        <el-button type="primary" icon="el-icon-search" style="margin-left: 20px">查询</el-button>
        <el-button type="primary" icon="el-icon-plus" >添加</el-button>
    </div>
    <div class="table" >
        <el-table :data="tableData" highlight-current-row border height="500">
            <el-table-column prop="date" label="月份"></el-table-column>
            <el-table-column prop="cost" label="总额"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column  label="操作">
                <span>
                    <el-button size="mini" >编辑</el-button>
                        <el-button size="mini" type="danger" >删除</el-button>
                </span>
            </el-table-column>
        </el-table>
    </div>
    <div class="pager">
        <el-pagination layout="prev, pager, next, jumper, total" 
        :total="2000" :page-size="10" :pager-count="11" background></el-pagination>
    </div>
    </div>
</template>

<script>
export default {
    name: 'tday',
    data() {
        return {
            date: '',
            tableData: []
        }
    }
}
</script>

<style scoped>
.timeQuery{
    margin-bottom: 25px;
}
</style>
