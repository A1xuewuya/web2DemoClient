<template>
	<header>
		<h1 v-on:click="changeTitle">{{title1}} {{ title }}</h1>
	</header>
</template>

<script>
	export default {
		name: "app-header",
		props: {
			title: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				title1: "app header"
			}
		},
		methods: {
			changeTitle: function() {
				//				this.title = "title被改变";
				this.$emit("titleChanged", "子向父组件传值")

			}
		},
		beforeCreate: function() {
			console.log("组件实例化之前执行的函数")
		},
		crreated: function() {
			console.log("组件实例化完毕，但页面还未显示")
		},
		beforeMount: function() {
			console.log("组件挂载前，页面仍未展示，但虚拟Dom已经配置")
		},
		mounted: function() {
			console.log("组件挂载后，此方法执行后，页面显示")
		},
		beforeUpdate: function() {
			console.log("组件更新前，页面仍未更新，但虚拟Dom仍未配置")
		},
		updated: function() {
			console.log("组件更新，此方法执行后，页面显示")
		},
		beforeDestory:function(){
			console.log("组件销毁前")
		},
		destoryed: function(){
			
		}
	}
</script>

<style scoped="scoped">
	header {
		background: lightblue;
		padding: 10px;
	}
	
	h1 {
		text-align: center;
		color: #222;
	}
</style>