// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);

// 3.0.2 导入路由规则对应的组件对象
import login from './components/account/login.vue';
import register from './components/account/register.vue';

// 3.0.2 定义路由规则
var router1 = new vueRouter({
	routes:[
		{path:'/login',component:login}, 
		{path:'/register',component:register}
	]
	});

// 3.0 利用Vue对象进行解析渲染
//添加mint-ui组件
import 'mint-ui/lib/style.min.css';
import mintui from 'mint-ui';
//ui组件样式
// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';
Vue.use(mintui);
new Vue({
	el:'#app',
	// 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});