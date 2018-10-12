// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Users from './components/Home'
import HelloWorld from './components/HelloWorld'

Vue.config.productionTip = false
Vue.use(VueRouter)

//配置路由
const router = new VueRouter({
	routes: [{
			path: "/",
			component: Home
		},
		{
			path: "/helloworld",
			component: HelloWorld
		}
	],
	
})

// 全局注册组件
//Vue.component("users", Users)

/* eslint-disable no-new */
new Vue({
	router,
	el: '#app',
	components: {
		App
	},
	template: '<App/>'
})