import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vant from 'vant'
import 'vant/lib/index.css';
import '@/assets/css/app.scss';
import 'amfe-flexible';


Vue.config.productionTip = false
Vue.use(VueAxios,axios);
Vue.use(Vant);

let myVue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
