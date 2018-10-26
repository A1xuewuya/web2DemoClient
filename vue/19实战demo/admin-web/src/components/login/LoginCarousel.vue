<template>
    <div>
        <el-carousel :interval="4000" type="card" height="260px">
            <el-carousel-item v-for="item in carouselItem" :key="item">
                <img :src="item" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
export default {
  data() {
    return {
      carouselItem: []
    };
  },
  methods: {},
  beforeCreate() {
    console.log("beforeCreate");
  },
  created() {
    console.log("create");
  },
  mounted() {
    this.$http
      .post("/carousel", {})
      .then(response => {
        // console.log(response);
        // console.log(response.data);
        this.carouselItem = response.data.data.images;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>


<style>
.el-carousel__item img {
  width: 100%;
  height: 100%;
}
</style>
