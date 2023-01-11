// import '@babel/polyfill'
// import 'mutationobserver-shim'
// import Vue from 'vue'
// import './plugins/bootstrap-vue'
// import App from './App.vue'
// import router from './router'
// import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm'; 
// import VueVirtualScroller from 'vue-virtual-scroller'
// import axios from 'axios';
// import VueAxios from 'vue-axios';
// Vue.use(axios,VueAxios);
// Vue.use(VueVirtualScroller)
// Vue.use(BootstrapVue)
// Vue.config.productionTip = false
// new Vue({
//   router,BootstrapVue,VueVirtualScroller,VueAxios,axios,
//   render: h => h(App)
// }).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import VirtualList from 'vue-virtual-scroll-list'
// import VueVirtualScroller from 'vue-virtual-scroller'

// Vue.use(VueVirtualScroller)
Vue.component('virtual-list', VirtualList)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
