import Vue from 'vue'
import Router from 'vue-router'
// import NProgress from 'nprogress' // progress bar
// import 'nprogress/nprogress.css' // progress bar style
// nprogress instruction 
// NProgress.configure({ showSpinner: false }) 是否显示标志圈
// NProgress.start() 触发开始
// NProgress.done() 结束
import store from '@/store';


import { routers } from '@/routers'
// NProgress.configure({ showSpinner: false }) // NProgress Configuration

Vue.use(Router)

// expose Router Instance 
const RouterInstance = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  base: process.env.BASE_URL,
  routes: routers
})
// 全局路由前置拦截监听器
// beforeEach beforeResolve
RouterInstance.afterEach(() => {
  // 后退返回时并不会触发afterEach
  // 停止旋转
  // NProgress.done();
})


RouterInstance.beforeEach(async (to, from, next) => {

  // 开始旋转
  // NProgress.start();
  // 设置标题
  document.title = to.meta.title;

  if (to.matched.length ===0) {  //如果未匹配到路由
    from.name ? next({ name:from.name }) : next('/static/404');   //如果上级能匹配到则转上级路由
  }
  
  next();

})

export default RouterInstance
