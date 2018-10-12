<template>
	<div id="app">

	</div>
</template>

<script>
	export default {
		name: 'App',
		components: {

		},
		created() {
			// console.log("create")
			// fetch方法
			/*
			fetch("/apis/index", {
				method: 'post',
				headers: {
					"Content-type": "application/json",
					token: "aabvbvbddnfndfnmfsmfdnmsfnmsdfm"
				},
				body: JSON.stringify({
					username: "你好",
					password: "123456"
				})
			}).then(
				result => {
					// console.log(result)
					return result.json()
				}
			).then(
				data => {
					console.log(data)
				}
			)
			*/

			//axios
			/*
			this.$axios.post("/apis/index", {
				username: "哈哈",
				password: "123456"
			}).then(
				data => {
					console.log(data)
				}
			)
			*/
		}
	}
</script>

<style>

</style>