<template>
	<div class="row">
		<div id="home" class="col-sm-12 text-center">
			<div class="background">
				<h1>欢迎大家品尝Pizza</h1>
				<h2>这里有你非常喜欢的pizza!</h2>
				<button @click="goToMenu" class="btn btn-success">Let's order!</button>
			</div>
		</div>
	</div>

</template>

<script>
	export default {
		methods: {
			goToMenu: function() {
				// 跳转到上一次浏览的页面
				// this.$router.go(-1);

				// 跳转到指定的路由地址
				// this.$router.replace('/about')

				// 跳转到指定路由的名字下
				// this.$router.replace({name: 'menuLink'})

				// 通过push进行跳转
				this.$router.push({
					name: 'menuLink'
				})
			}
		}
	};
</script>

<style scoped="scoped">
	#home {
		background: url(../assets/pizza.jpg) no-repeat center center;
		background-size: 80% 80%;
		height: 85vh;
	}
	
	h1,
	h2 {
		margin: 6%;
	}
	
	.background {
		background: #eee;
		opacity: 0.8;
		max-width: 60vw;
		margin: 100px auto;
		padding: 20px 0;
	}
</style>