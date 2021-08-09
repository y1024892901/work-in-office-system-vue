import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from "../views/Home"
import Test1 from "../views/Test1";
import Test2 from "../views/Test2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    hidden: true
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/test1',
        name: 'Test1',
        component: Test1
      },
      {
        path: '/test2',
        name: 'Test2',
        component: Test2
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
