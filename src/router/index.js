import Vue from 'vue'
import VueRouter from 'vue-router'
import Dissertation from "@/views/dissertation";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'dissertation',
    component: Dissertation
  },

]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
