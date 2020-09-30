<template>
  <div class="header">


    <div class="header__logo-burger" @click="btnClick"><img src="../assets/img/logo.png" alt=""></div>
 <!-- @click="shows" -->
    
     <!-- <Sidebar :class="{ b: isActive }" /> -->
      <!-- @click="ps" :class="{ b: isActive }" -->
  <div >
 
  <!-- <transition name="fade">
    <p v-if="go">привет</p>
  </transition> -->
</div>


  </div>
</template>



<script>
import {mapGetters, mapActions} from 'vuex'

// import { EventBus } from '../main.js'
// import Sidebar from '@/views/Sidebar.vue'
// import { mapMutations } from 'Vuex'
export default {
  
components: {
  // Sidebar
}, 
computed: {
  ...mapGetters([
    'DROPDOWN_STATE'
  ])
},
// data() {
//   return {
//     // show:true
//   }
// },
// methods: {
//  go () {
//           return $store.state.show
//           }
// },
methods: {
  ...mapActions(['TOGGLE_DROPDOWN']),
  
  btnClick() {
    // console.log(5)
    this.TOGGLE_DROPDOWN()
  }
//   shows() {
//     let sidebar = document.querySelector('.sidebar-left');
// sidebar.classList.toggle('b')

//   }
}
//  methods: {
//     ...mapMutations([
//       'increment', // `this.increment()` будет вызывать `this.$store.commit('increment')`

     
//     ]),
// },

//  computed: {
//         /*   count () {
//             return store.state.count
//           }, */
//           go () {
//           return $store.state.isActive
//           }
//         },
//         methods: {
//           increment () {
//       $store.commit('increment')
//           },
       
//         }
  //      data() {
  //   return {
  //     isActive:false
  //   }
  // },
  // methods: {
  //   ps: function() {
  //     this.isActive = !this.isActive
  //   }
  // },
  // computed: {
  //   ps() {
  //     return this.$store.state.isActive
  //   }
  // }
}
</script>

<style>
.b {
  display: none;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
  opacity: 0;
}
</style>
