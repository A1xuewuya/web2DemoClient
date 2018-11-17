<template>
    <div>
        pizza menu
    </div>
</template>

<script>
export default {
  created() {
    console.log(this.$store.getters.token);
  }
};
</script>

