<!--模板 HTML结构-->
<template>
	<div id="app">
		<!--<img src="./assets/logo.png">
    <HelloWorld/>-->
		<!--Hello Vue.js-->
		<!--<h1>{{title}}</h1>-->

		<!--<app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
		<users-div v-bind:users="users"></users-div>
		<br />
		<users-div v-bind:users="users"></users-div>
		<app-footer v-bind:title="title"></app-footer>-->
		<router-view></router-view>
	</div>
</template>

<!--行为：处理逻辑-->
<script>
	//	import HelloWorld from './components/HelloWorld'
	// 局部注册组件
//	import Header from './components/Header'
//	import Users from './components/Users'
//	import Footer from './components/Footer'

	export default {
		name: 'App',
		data() {
			return {

			}
		},
		methods: {
			updateTitle(title) {
				this.title = title
			}
		},
		components: {
			"app-header": Header,
			"users-div": Users,
			"app-footer": Footer
		}
	}
</script>

<!--样式： 解决样式-->
<style scoped="scoped">
	/*#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
	}*/
	
	h1 {
		color: purple;
	}
</style>