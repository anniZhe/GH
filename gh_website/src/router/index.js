import Vue from 'vue'
import Router from 'vue-router'
import home from './modules/home'
import coreBusiness from './modules/coreBusiness'
import aboutUs from './modules/aboutUs'

Vue.use(Router)

export default new Router({
  routes: [
    ...home,
    ...coreBusiness,
    ...aboutUs
  ]
})
