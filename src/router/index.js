import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'; 
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueVirtualScroller from 'vue-virtual-scroller'
Vue.use(VueVirtualScroller)

Vue.use(axios,VueAxios);
Vue.use(BootstrapVue)
Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    
  })
  
  export default router;