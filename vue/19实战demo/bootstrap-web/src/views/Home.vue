<template>
    <div>
        <navbar></navbar>
    <div class="container">
        <carousel></carousel>
        <content-a></content-a>
    </div>
    <footer-a></footer-a>
    </div>
</template>

<script>
import Navbar from "../components/Nav";
import Carousel from "../components/Carousel";
import Content from "../components/Content";
import Footer from "../components/Footer";

export default {
  name: "Home",
  components: {
    navbar: Navbar,
    carousel: Carousel,
    "content-a": Content,
    "footer-a": Footer
  }
};
</script>

<style scoped>
</style>
