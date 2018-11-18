<template>
    <div class="home">
        home
    </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {};
  },
  created() {
    console.log(this.$store.getters.name);
    console.log(this.$store.getters.avatar);
    console.log(this.$store.getters.roles);
  }
};
</script>

