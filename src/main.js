import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue';
import Accueil from './components/Accueil.vue';
import Custom from './components/Custom.vue';
import Panier from './components/Panier.vue';
import Articles from './components/Articles.vue';
Vue.use(VueRouter);

const routes = [
	{ path: '/', redirect: '/Accueil'},
  { path: '/Accueil', component: Accueil },
  {path: '/Custom', component: Custom},
  {path: '/Articles', component: Articles},
  {path: '/Panier', component: Panier}

];

const router = new VueRouter({ routes: routes });

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});