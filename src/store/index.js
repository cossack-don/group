import Vue from 'vue'
import Vuex from 'vuex'

// import storeStateUrls from './modules/storeStateUrls/state';
import storeUrls from './storeUrls'
import nameTechnology from './nameTechnology'

// Нужно разделить store на статические данные state и сделать вложенность и передачу

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    toggleBurger: false,

    // btnAbout:false,

    storeUrls,
    nameTechnology,
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
  mutations: {
    CHANGE_DROPDOWN: (state) => {
      state.toggleBurger = !state.toggleBurger
    },







  },
  actions: {
    TOGGLE_DROPDOWN({ commit }) {
      commit('CHANGE_DROPDOWN')
    },





  },
  getters: {
    DROPDOWN_STATE(state) {
      return state.toggleBurger
    },





  },


  // modules: {
  // }
})
