<template>
	<div id="users">
		<ul>
			<li v-for="user in users">
				姓名: {{ user.name }} 年龄 : {{ user.age }} 性别: {{ user.sex }}
				<button v-on:click="deleteUser">删除</button>
				<br />
			</li>
		</ul>
	</div>
</template>

<!--
	传值:string number boolen
	引用: array object
-->

<script>
	export default {
		name: 'people',
		props: {
			users: {
				type: Array,
				required: true
			}
		},
		data() {
			return {

			}
		},
		methods: {
			deleteUser: function() {
				console.log("删除用户")
				this.users.pop()
			}
		}
	}
</script>

<style scoped="scoped">

</style>