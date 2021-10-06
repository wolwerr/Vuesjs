import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',   
    
    component: function () {
      return import( '../views/Inicio.vue')
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',   
    
    component: function () {
      return import( '../views/Sobre.vue')
    }
  },
  {
    path: '/maisinformacoes',
    name: 'MaisInformacoes',
    
    component: function () {
      return import( '../views/MaisInformacoes.vue')
    }
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
