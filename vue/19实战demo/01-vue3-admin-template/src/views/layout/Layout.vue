<template>
    <div class="app-wrapper">
        <sidebar></sidebar>
        <div class="main-container">
            <navbar></navbar>
            <app-main></app-main>
        </div>
    </div>
</template>

<script>
import { Sidebar, Navbar, AppMain } from "@/components/layout";

export default {
  name: "Layout",
  components: {
    Sidebar,
    Navbar,
    AppMain
  },
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.main-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 205px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  overflow-y: scroll;
}
</style>

