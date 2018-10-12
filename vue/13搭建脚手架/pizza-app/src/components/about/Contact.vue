<template>
	<div class="card text-dark bg-light mb-3">
		<div class="card-header">
			联系我们
		</div>
		<div class="card card-body">
			<h4 class="card-title">联系我们</h4>
			<p>123456789@qq.com</p>
			<br>
			<router-link :to="{name: 'nameLink'}">昵称</router-link>
			<router-link :to="{name: 'phoneLink'}">手机</router-link>

			<router-view></router-view>
		</div>
	</div>
</template>

<script>
</script>

<style>
</style>