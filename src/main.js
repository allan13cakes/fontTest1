import Vue from 'vue'
import App from './App.vue'
import VueRouter from './js/vue-router';
import { routes } from './routes.js';
import axios from './js/axios.min.js';
Vue.use(VueRouter);
Vue.use({
  install(Vue){
    Vue.prototype.$api=axios.create({
      baseURL: 'http://localhost:8888/',
      timeout:300000
    })
  }
});
const router = new VueRouter({
  routes,
  mode: 'hash'
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
