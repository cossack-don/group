import Vue from 'vue'
import Vuex from 'vuex'

// import storeStateUrls from './modules/storeStateUrls/state';
import storeUrls from './storeUrls'

// Нужно разделить store на статические данные state и сделать вложенность и передачу

Vue.use(Vuex)

export default new Vuex.Store({
  
  state: {
    // isActive:true,

    storeUrls
    // urls: [
    //   {
    //     name:'winediscovery',
    //     url:'https://www.winediscovery.ru/'
    //   },
    //   {
    //     name:'WD24bit',
    //     url:'https://portal.winediscovery.ru/stream/'
    //   },
    //   {
    //     name:'mailWD',
    //     url:'http://mail.winediscovery.ru:3000/WorldClient.dll?View=Main'
    //   },

    // ]
  },
//   mutations: {

//     increment (state) {
     
//         state.isActive = !state.isActive
//   },
// }
  // actions: {
  // },
  // modules: {
  // }
})
