import Vue from 'vue'
import VueRouter from 'vue-router'
import WatchBoard from "@/views/WatchBoard/WatchBoard.vue";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'WatchBoard',
    component: WatchBoard
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
