// Requiring module
import Vue from 'vue'
import VueRouter from 'vue-router'
import signup from "./components/signup.vue";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        name: 'signup',
        component: signup
    },
  
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router