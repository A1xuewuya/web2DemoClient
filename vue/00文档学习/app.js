var app = new Vue({
	el: "#app",
	data: {
		message: "Hello vue"
	}
})

var app2 = new Vue({
	el: "#app-2",
	data: {
		message: "页面加载于" + new Date().toLocaleString()
	}
})

var app3 = new Vue({
	el: "#app-3",
	data: {
		seen: true
	}
})

var app4 = new Vue({
	el: "#app-4",
	data: {
		todos: [{
				text: "你好世界"
			},
			{
				text: "蓝天白云"
			},
			{
				text: "青山绿水"
			}
		]
	}
})

var app5 = new Vue({
	el: "#app-5",
	data: {
		message: "hello vue"
	},
	methods: {
		reverseMessage: function() {
			//			this.message = this.message.split('').reverse().join()
			this.message = "你好世界"
		}
	}
})

var app6 = new Vue({
	el: "#app-6",
	data: {
		message: "Hello Vue"
	}
})

var app7 = new Vue({
	el: "#app-7",
	data: {
		newPerson: {
			name: '',
			age: 0,
			sex: 'Male'
		},
		people: [{
			name: 'Jack',
			age: 30,
			sex: 'Male'
		}, {
			name: 'Bill',
			age: 26,
			sex: 'Male'
		}, {
			name: 'Tracy',
			age: 22,
			sex: 'Female'
		}, {
			name: 'Chris',
			age: 36,
			sex: 'Male'
		}]
	},
	methods: {
		createPerson: function() {
			this.people.push(this.newPerson);
			// 添加完newPerson对象后，重置newPerson对象
			this.newPerson = {
				name: '',
				age: 0,
				sex: 'Male'
			}
		},
		deletePerson: function(index) {
			// 删一个数组元素
			this.people.splice(index, 1);
		}
	}
})

// 全局注册一个组件
Vue.component('todo-item', {
	props: ['todo'],
	template: '<li>{{ todo.text }}</li>'
})

var app8 = new Vue({
	el: "#app-8",
	data:{
		
	},
	methods: {
		
	}
})