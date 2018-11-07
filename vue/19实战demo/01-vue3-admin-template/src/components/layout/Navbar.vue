<template>
    <!-- <el-menu class="navbar" mode="horizontal" style="background:orange">
        <hamburger></hamburger>
        <breadcrumb></breadcrumb>
    </el-menu> -->
    <div class="navbar">
      导航栏
    </div>
</template>

<script>
import Hamburger from "@/components/Hamburger";
import Breadcrumb from "@/components/Breadcrumb";

export default {
  name: "Navbar",
  components: {
    Hamburger,
    Breadcrumb
  }
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  line-height: 50px;
  background-color: #232323;
  color: #ffffff
}

</style>
