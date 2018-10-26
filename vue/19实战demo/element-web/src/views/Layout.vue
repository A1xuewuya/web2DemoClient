<template>
    <div>
        <!-- 基础栅栏布局 -->
        <p>基础栅栏布局</p>
        <el-row>
            <el-col :span="24" style="background-color: orange">
                栅格24            
            </el-col>
        </el-row>
        
        <br>
        <el-row>
            <el-col v-bind:span="12" style="background-color: orange">栅格12</el-col>
            <el-col v-bind:span="12" style="background-color: purple">栅格12</el-col>
        </el-row>

        <br>
        <el-row>
            <el-col v-bind:span="8" style="background-color: orange">栅格8</el-col>
            <el-col v-bind:span="8" style="background-color: purple">栅格8</el-col>
            <el-col v-bind:span="8" style="background-color: orange">栅格8</el-col>
        </el-row>
        
        <br>
        <el-row>
            <el-col v-bind:span="6" style="background-color: orange">栅格6</el-col>
            <el-col v-bind:span="6" style="background-color: purple">栅格6</el-col>
            <el-col v-bind:span="6" style="background-color: orange">栅格6</el-col>
            <el-col v-bind:span="6" style="background-color: purple">栅格6</el-col>
        </el-row>


        <br><br>
        <!-- 分栏间隔 -->
        <p>分栏间隔</p>
        <el-row :gutter="100">
            <el-col :span="6">
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
            <el-col :span="6" >
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
            <el-col :span="6" >
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
            <el-col :span="6" >
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
        </el-row>

        <br>
        <br>
        <!-- 混合布局 -->
        <p>混合布局</p>
        <el-row :gutter="0">
            <el-col :span="16" style="background-color: orange">栅栏16</el-col>
            <el-col :span="8" style="background-color: purple">栅栏8</el-col>
        </el-row>
        <br>
        <el-row :gutter="0">
            <el-col :span="8" style="background-color: orange">栅栏8</el-col>
            <el-col :span="16" style="background-color: purple">栅栏16</el-col>
        </el-row>
        <br>
        <el-row :gutter="0">
            <el-col :span="8" style="background-color: orange">栅栏8</el-col>
            <el-col :span="8" style="background-color: purple">栅栏8</el-col>
            <el-col :span="8" style="background-color: orange">栅栏8</el-col>
        </el-row>
        <br>
        <el-row :gutter="50">
            <el-col :span="8">
                <div style="background-color: orange">
                    栅格8
                </div>
            </el-col>
            <el-col :span="16" >
                <div style="background-color: purple">
                    栅格16
                </div>
            </el-col>
        </el-row>
        <br>
        <el-row :gutter="20">
            <el-col :span="4">
                <div style="background-color: orange">
                    栅格4
                </div>
            </el-col>
            <el-col :span="16" >
                <div style="background-color: orange">
                    栅格16
                </div>
            </el-col>
            <el-col :span="4" >
                <div style="background-color: orange">
                    栅格4
                </div>
            </el-col>
        </el-row>

        <br><br>
        <p>分栏偏移</p>
        <el-row :gutter="20">
            <el-col :span="6">
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
            <el-col :span="6" :offset="6">
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
        </el-row>
        <br>
        <el-row :gutter="0">
            <el-col :span="6" :offset="6">
                <div style="background-color: orange">
                    栅格6
                </div>
            </el-col>
            <el-col :span="6" :offset="6">
                
            </el-col>
        </el-row>
        <br>
        <el-row>
            <el-col :span="6" :offset="9">
                <div style="background-color: orange">
                    栅格居中
                </div>
            </el-col>
        </el-row>

    </div>
</template>

<script>
export default {};
</script>

<style>
</style>

