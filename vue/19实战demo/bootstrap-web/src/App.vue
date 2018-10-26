<template>
    <div id="app" >
        <!-- <button type="button" class="btn btn-primary">这是按钮</button> -->
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'app'
}
</script>


<style >

</style>
