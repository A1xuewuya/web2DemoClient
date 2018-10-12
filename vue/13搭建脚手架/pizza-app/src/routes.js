import Home from './components/Home.vue'
import Menu from './components/Menu.vue'
import Admin from './components/Admin.vue'
import About from './components/about/About.vue'
import Login from './components/Login.vue'
import Register from './components/Register.vue'

// 二级路由
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import History from './components/about/History.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

// 三级路由
import Phone from './components/about/contact/Phone'
import PersonName from './components/about/contact/PersonName'


// 配置路由
export const routes = [{
    path: '/',
    name: 'homeLink',
    components: {
        default: Home,
        'orderingGuide': OrderingGuide,
        'delivery': Delivery,
        'history': History
    }
},
{
    path: '/menu',
    name: 'menuLink',
    component: Menu
},
{
    path: '/admin',
    name: 'adminLink',
    component: Admin,
    // 路由独享守卫
    /*
    beforeEnter:
        (to, from, next) => {
            // alert('非登录状态，不能访问此页面')
            // next(false)
            // 判断store.gettes.isLogin === false
            if(to.path == '/login' || to.path == '/register') {
                next()
            } else {
                alert("还没有登录")
                next('/login')
            }
        }
        */
},
{
    path: '/about',
    name: 'aboutLink',
    component: About,
    redirect: '/about/contact',
    children: [{
            path: '/about/contact',
            name: 'contactLink',
            component: Contact,
            children: [{
                    path: "/about/contact/phone",
                    name: 'phoneLink',
                    component: Phone
                },
                {
                    path: '/about/contact/personname',
                    name: 'nameLink',
                    component: PersonName
                }
            ]
        },
        {
            path: '/about/delivery',
            name: 'deliveryLink',
            component: Delivery
        },
        {
            path: '/about/history',
            name: 'historyLink',
            component: History
        },
        {
            path: '/about/ordering',
            name: 'orderingLink',
            component: OrderingGuide
        }
    ]
},
{
    path: '/login',
    name: 'loginLink',
    component: Login
},
{
    path: '/register',
    name: 'registerLink',
    component: Register
},
{
    path: '*',
    redirect: '/'
}
]