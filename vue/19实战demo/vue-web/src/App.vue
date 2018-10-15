<template>
  <div id="app">
      <layout></layout>
  </div>
</template>

<script>
import Layout from "./components/layout.vue";

export default {
  name: "app",
  components: {
    layout: Layout
  }
};
</script>

<style>
body{
    margin: 0px;
    padding: 0px;
}
</style>
