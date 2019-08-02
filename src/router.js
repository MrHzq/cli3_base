import Vue from 'vue'
import Router from 'vue-router'
import VueRouterAuto from 'vue-router-auto'

if (!window.VueRouter) Vue.use(Router)

const routes = VueRouterAuto({
    redirect: '/home',
    rc: require.context('@/views', true, /\.vue$/)
})

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
