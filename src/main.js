import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import"tailwindcss/tailwind.css"
import "@/assets/style/tailwind.css"
import * as echarts from "echarts";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'



Vue.config.productionTip = false
Vue.prototype.$echarts = echarts;
Vue.use(ElementUI);
Vue.use(dataV)

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
}).$mount('#app')
