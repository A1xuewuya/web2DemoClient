<template>
    <div>
        <p>icon图标</p>
        <i class="el-icon-edit"></i>
        <i class="el-icon-share"></i>
        <i class="el-icon-delete"></i>
        <i class="el-icon-message"></i>
        <el-button type="primary" icon="el-icon-search">搜索</el-button>

        <p>按钮组</p>
        <el-row>
            <el-button>默认按钮</el-button>
            <el-button type="primary">主要按钮</el-button>
            <el-button type="danger">危险按钮</el-button>
        </el-row>
        
        <br>
        <el-row>
            <el-button plain>朴素按钮</el-button>
            <el-button type="primary" plain>主要按钮</el-button>
            <el-button type="warning" plain>警告按钮</el-button>
        </el-row>
        
        <br>
        <el-row>
            <el-button round>圆角按钮</el-button>
            <el-button type="primary" round>主要按钮</el-button>
            <el-button type="warning" round>警告按钮</el-button>
        </el-row>

        <br>
        <el-row>
            <el-button icon="el-icon-search" circle></el-button>
            <el-button type="info" icon="el-icon-message" circle></el-button>
        </el-row>

        <br>
        <p>文字按钮</p>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>

        <br>
        <p>图标按钮</p>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
        <el-button type="primary" icon="el-icon-search"></el-button>
        <el-button type="primary">上传<i class="el-icon-upload el-icon--right" style="margin: 0px; font-size: 12px"></i></el-button>

        <br>
        <p>按钮组</p>
        <el-button-group>
            <el-button type="primary">上一页</el-button>
            <el-button type="primary">下一页</el-button>
        </el-button-group>
        &nbsp;
        <el-button-group>
            <el-button type="primary" icon="el-icon-edit"></el-button>
            <el-button type="success" icon="el-icon-share"></el-button>
            <el-button type="danger" icon="el-icon-delete"></el-button>
        </el-button-group>

        <br>
        <p>加载中按钮</p>
        <el-button type="primary" @click="btnLoading = !btnLoading" :loading="btnLoading">加载中</el-button>

        <br>
        <p>不同尺寸</p>
        <el-button-group>
            <el-button type="primary" size="mini" icon="el-icon-edit"></el-button>
            <el-button type="success" size="mini" icon="el-icon-share"></el-button>
            <el-button type="danger" size="mini" icon="el-icon-delete"></el-button>
        </el-button-group>
        &nbsp;
        <el-button-group>
            <el-button type="primary" size="small" icon="el-icon-edit"></el-button>
            <el-button type="success" size="small" icon="el-icon-share"></el-button>
            <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
        </el-button-group>
    </div>
</template>

<script>
export default {
    name: 'icon',
    data(){
        return {
            btnLoading: false
        }
    }
}
</script>


<style scoped>
i {
  margin: 15px;
  font-size: 25px;
}
</style>

