<!--模板 HTML结构-->
<template>
	<div id="home">
		<!--<img src="./assets/logo.png">
    <HelloWorld/>-->
		<!--Hello Vue.js-->
		<!--<h1>{{title}}</h1>-->

		<app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
		<users-div v-bind:users="users"></users-div>
		<br />
		<users-div v-bind:users="users"></users-div>
		<app-footer v-bind:title="title"></app-footer>
	</div>
</template>

<!--行为：处理逻辑-->
<script>
	//	import HelloWorld from './components/HelloWorld'
	// 局部注册组件
	import Header from './Header'
	import Users from './Users'
	import Footer from './Footer'

	export default {
		name: 'home',
		data() {
			return {
				title: "这是第一个Vue脚手架项目！",
				users: [{
						name: "你好",
						age: 20,
						sex: 1
					},
					{
						name: "世界",
						age: 22,
						sex: 2
					},
					{
						name: "蓝天",
						age: 20,
						sex: 0
					}
				]
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