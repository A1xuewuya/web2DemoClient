// 实例化VUE对象

new Vue({
	el: "#vue-app",
	data: {
		name: "",
		age: ""
	},
	methods: {
		logName: function() {
			//			this.name = this.$refs.name.value;
		},
		logAge: function() {
			//			this.age = this.$refs.age.value;
		},
		test: function() {
			console.log(this.name + this.age)
		}
	}
})