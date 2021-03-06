import Vue from 'vue'
import Vuex from 'vuex'

// 通用模块
import index from './modules/index'
// 路由界面 head 标签通用模块
import title from './modules/title'
// 登录注册
import login from './modules/login'
// 导航nav model
import nav from './modules/nav'
// 商品cards
import cards from './modules/cards'
// my 我的和人中心
import my from './modules/my'

Vue.use(Vuex)

const modules = {
  index,
  title,
  login,
  nav,
  cards,
  my
}

const store = () => {  // 返回store为一个函数就行了
  return new Vuex.Store({
    modules
  })
}

export default store
