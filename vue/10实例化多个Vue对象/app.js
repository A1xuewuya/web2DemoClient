var app1 = new Vue({
	el: "#app1",
	data: {
		title: 'app1题目'
	},
	computed: {
		greet: function() {
			return "app1计算属性"
		}
	},
	methods: {

	}
})

var app2 = new Vue({
	el: "#app2",
	data: {
		title: "app2题目"
	},
	computed: {
		greet: function() {
			return "app2计算属性"
		}
	},
	methods: {
		changeTitle: function() {
			app1.title = "app1题目改变了"
		}
	}
})

app2.title = "你好世界，加载的时候就改变app2的题目"