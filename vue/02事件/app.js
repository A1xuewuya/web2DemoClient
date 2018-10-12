new Vue({
	el: "#vue-app",
	data: {
		age: 30,
		x: 0,
		y: 0
	},
	methods: {
		add: function(inc) {
			//			this.age++
			this.age += inc
		},
		subtract: function(dec) {
			//			this.age--
			this.age -= dec
		},
		updateXY: function(event) {
			//			console.log(event)
			this.x = event.offsetX
			this.y = event.offsetY
		},
		stopMoving: function(event) {
			//阻止冒泡事件
			event.stopPropagation()
		},
		alert: function() {
			alert("你好世界")
		}
	}
})