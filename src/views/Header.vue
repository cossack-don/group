<template>
  <div class="header">

    <div  class="header__logo-burger"  @click="btnClick"><div class="header__image-wrapper"><img src="../assets/img/icon_burger.svg" alt="" ></div></div>
    <!-- <div class="header__logo-vue" ><img src="../assets/img/logo.png" alt=""></div> -->



<!-- :class="{ active: isActive }" @click="isActive = !isActive" -->
<!-- добавить 2 обработчика как? -->
<!-- https://ru.stackoverflow.com/questions/930960/%D0%9F%D0%BE%D0%B2%D0%B5%D1%81%D0%B8%D1%82%D1%8C-%D0%BD%D0%B5%D1%81%D0%BA%D0%BE%D0%BB%D1%8C%D0%BA%D0%BE-%D1%80%D0%B0%D0%B7%D0%BD%D1%8B%D1%85-%D1%81%D0%BE%D0%B1%D1%8B%D1%82%D0%B8%D0%B9-%D0%BF%D0%BE-%D1%83%D1%81%D0%BB%D0%BE%D0%B2%D0%B8%D1%8E-vuejs -->


    <router-link to="/" class="header__logo-vue" > <div class="header__image-wrapper"><img :src="image"></div></router-link>
     
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

data() {

    return {
        images:'logo',
        isActive:true
    }
},

computed: {
  ...mapGetters([
    'DROPDOWN_STATE'
  ]),

    image() {
      return require(`../assets/img/${this.images}.png`);
    }
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
  },

  go() {
    
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


</style>
