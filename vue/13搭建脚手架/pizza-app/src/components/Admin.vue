<template>
	<h1>Admin</h1>
</template>

<script>
	export default {
		data() {
			return {
				name: "Jack"
			}
		},
		// 组件内守卫
		/*
		beforeRouteEnter: (to, from, next) => {
			// alert("hello " + this.name)
			// next()

			next(vm =>{
				alert("hello " + vm.name)
			})
		}
		*/
		/*
		beforeRouteLeave(to, from, next) {
			if(confirm("确定离开么？") == true) {
				next()
			} else {
				next(false)
			}
		}
		*/
	}
</script>

<style>

</style>