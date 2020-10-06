import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// @import './scss/main.scss';
// export const EventBus = new Vue();


import './scss/main.scss';


// СКАЧИВАЕМ ПЛАГИН VUEFIRE через npm 
// СОЗДАЕМ ФАЙЛ В SRC BD.JS  ВНОСИТЬ ВСЕ ДАННЫЕ О БД В ФАЙЛ
// ПОДКЛЮЧАЕМ ЕГО(BD.JS IMPORT) В НУЖНОМ КОМПОНЕНТЕ
// VUEFIRE START
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)
// VUEFIRE END



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
