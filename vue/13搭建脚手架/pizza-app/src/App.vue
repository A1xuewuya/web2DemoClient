<template>
	<div id="app">
		<div id="container">
			<app-header></app-header>
		</div>
		<div id="container">
			<router-view></router-view>
		</div>
		<br>
		<div id="container">
			<div class="row">
				<div class="col-sm-12 col-md-4">
					<router-view name="orderingGuide"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="delivery"></router-view>
				</div>
				<div class="col-sm-12 col-md-4">
					<router-view name="history"></router-view>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Header from "./components/Header.vue";
	export default {
		components: {
			"app-header": Header
		},
		created() {
			// fetch访问接口
			fetch('http://10.10.121.121:7100/index', {
				method: 'post',
				body: 'hello'
			})
			.then(result => {
				console.log(result)
			})
		}
	};
</script>

<style>

</style>