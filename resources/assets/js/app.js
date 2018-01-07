import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main.js'

// router setup
import routes from './routes/routes.js'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)

window.tooltip = require('chartist-plugin-tooltip');


// configure router
const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'nav-item active',
  routes: routes
})


/* eslint-disable no-new */
new Vue({
  
  render: (h) => h(App),
  router
}).$mount('#app');
