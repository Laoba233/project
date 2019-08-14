import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import axios from 'axios';
import Vueaxios from 'vue-axios';
import 'element-ui/lib/theme-chalk/index.css';

axios.defaults.baseURL = 'http://192.168.1.188:12';
Vue.use(Vueaxios,axios);
Vue.use(ElementUI);
Vue.config.productionTip = false;

//请求拦截，携带token访问接口
axios.interceptors.request.use(config => {
  //设置请求头
  if (sessionStorage.getItem('token')) {
    config.headers.Authorization = sessionStorage.getItem('token')
  }
  return config
}, error => {
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
