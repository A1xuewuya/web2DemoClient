Vue.component("greeting", {
	template: `<p>{{ name }} : 你好世界，这是模板
	<button v-on:click="changeName">改名</button>
	</p>
	`,
	data: function() {
		return {
			name: "王天"
		}
	},
	methods: {
		changeName: function() {
			this.name = "学无涯"
		}
	}
})

new Vue({
	el: "#app1"
})

new Vue({
	el: "#app2"
})