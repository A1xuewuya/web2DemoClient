//实例化vue对象

new Vue({
	el: "#app-a",
	data: {
		con: "你好 vue",
		job: "程序",
		website: "http://www.baidu.com",
		websiteTag: "<a href='http://www.baidu.com'>链接</a>"
	},
	methods: {
		greet: function(time){
			return time
		}
	}
})