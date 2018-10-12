import Vue from 'vue'

// 按需导入项目所需要的组件
import { 
    Button,
    Radio,
    TimePicker,
    Container,
    Header,
    Main,
    Aside,
    Footer
} from 'element-ui';

// 全局配置项目中所有拥有size属性的组件的默认尺寸为'small',弹框的初始z-index为3000
Vue.prototype.$ELEMENT = {
    size: 'small',
    zIndex: 3000
};

// 或者写为
// Vue.component(Button.name, Button)
Vue.use(Button);
Vue.use(Radio);
Vue.use(TimePicker);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Footer);

