<template>
    <div>
        <el-row >
            <el-col :span="24">
                <div style="margin-top: 0">
                    <div class="footer-link">
                        <a href="#" target="_blank">关于我们</a>
                        <a href="#" target="_blank">测试链接1</a>
                        <a href="#" target="_blank">测试链接2</a>
                    </div>
                    &copy;
                    nzcstudy.top 版权所有
                    <br><br>
                    <div class="footer-icp">
                        <img src="http://www.beian.gov.cn/img/beianbgs.png" width="20px">
                        &nbsp;
                        豫ICP备17029924号 豫公网安备
                    </div>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    
}
</script>


<style scoped>
.el-row {
  margin-top: 223px;
  height: 200px;
  background-color: #373D41
}

.el-row .el-col {
  padding: 10px;
  text-align: center;
  color: #73777A;
}

.footer-link {
    margin: 30px;
}

.footer-link a{
    font-size: 15px;
    font-weight: bold;
    margin: 10px;
    color: #73777A;
    text-decoration: none;
}

.footer-link a:hover {
    color: #409eff;
}

.footer-icp{
    color: #939393
}
</style>

