import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false

Vue.use(VueRouter);

const routes = [
    {path: '/', redirect: '/posts'},
    
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router