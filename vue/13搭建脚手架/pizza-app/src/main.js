import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { routes } from "./routes";


// 使用路由
Vue.use(VueRouter)

// 路由抽离

// 将路由放router里面
const router = new VueRouter({
	routes,
	mode: "history",
	scrollBehavior(to, from, savedPosition){
		// return 期望滚动到哪个的位置
		// 在屏幕上展示y轴100像素的位置
		// return {
		// 	x: 0,
		// 	y: 100
		// }
		return {
			selector: '.btn'
		}
	}
})

// 全局守卫
/*
router.beforeEach((to, from, next) =>{
	// alert("还没有登录，请先登录")
	// next()
	// console.log(to)

	// 判断store.gettes.isLogin === false
	if (to.path == '/login' || to.path == '/register'){
		next()
	}else{
		alert("还没有登录")
		next('/login')
	}
})
*/

//后置钩子
/*
router.afterEach((to, from) => {
	alert("after each")
})
*/

new Vue({
	el: '#app',
	router,
	render: h => h(App)
})