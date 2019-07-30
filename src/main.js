import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import hzqAxios from 'hzq-axios'
import hzqTool from 'hzq-tool'
import './components/global'

Vue.use(hzqTool, { router })

Vue.config.productionTip = false

// 是否为测试环境
Vue.prototype.$istest = process.env.VUE_APP_CURRENTMODE === 'test'

console.log('当前NODE_ENV：' + process.env.NODE_ENV)
console.log('当前VUE_APP_CURRENTMODE：' + process.env.VUE_APP_CURRENTMODE)
console.log('是否为测试环境：' + Vue.prototype.$istest)

Vue.use(hzqAxios, require.context('@/apiurl', true, /\.js$/), {
    baseURL: '/api',
    // 请求拦截之前
    beforeRequest(config) {
        console.log(config)
        return config
    },
    // 接口响应成功事件
    respSuccess(res) {
        console.log(res)
    },
    // 接口响应失败事件
    respError(e) {
        console.log(e)
    }
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
