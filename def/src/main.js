import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//引入ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)


//请求工具
import {postRequest} from "./untils/api";
import {putRequest} from "./untils/api";
import {getRequest} from "./untils/api";
import {deleteRequest} from "./untils/api";
import {initMenu} from "./untils/menus";

Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.deleteRequest = deleteRequest;

router.beforeEach(((to, from, next) => {
  if (window.sessionStorage.getItem('tokenStr')){
    initMenu(router,store);
    next();
  }else {
    next();
  }
}))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
