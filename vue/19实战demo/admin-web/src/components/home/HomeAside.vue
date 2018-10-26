<template>
    <div>
        <!-- 展开收起按钮组 -->
        <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
            <el-radio-button :label="false">
                展开
            </el-radio-button>
            <el-radio-button :label="false">
                收起
            </el-radio-button>
        </el-radio-group> -->

        <!-- 导航菜单 -->
        <el-menu  class="el-menu-vertical-demo" :collapse="isCollapse" background-color="#262626" text-color="#fff">
            <el-menu-item index="0">
                <i class="el-icon-menu"></i>
                <span slot="title">后台管理系统</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
                </template>
                <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
                <i class="el-icon-setting"></i>
                <span slot="title">导航四</span>
            </el-menu-item>
            <el-submenu index="5">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航五</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-menu-item index="5-4">选项4</el-menu-item>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-menu-item index="5-4">选项4</el-menu-item>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-menu-item index="5-4">选项4</el-menu-item>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-menu-item index="5-4">选项4</el-menu-item>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-menu-item index="5-4">选项4</el-menu-item>
                    <el-menu-item index="5-1">选项1</el-menu-item>
                    <el-menu-item index="5-2">选项2</el-menu-item>
                    <el-menu-item index="5-3">选项3</el-menu-item>
                    <el-menu-item index="5-4">选项4</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">导航六</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    name: 'homeaside',
    data() {
        return {
            isCollapse: false
        }
    }
}
</script>

<style scoped>

</style>
