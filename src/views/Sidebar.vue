<template>
  <transition name="fade">
         <div class="sidebar-left"   v-if="DROPDOWN_STATE">
        
 
           <div class="sidebar-left__links-wrapper">
            <router-link to="/" class="sidebar-left__link" > <img :src="image" class="sidebar-left__image"> Работа</router-link>
            <!-- сделать иконки для пунктов и выводить циклом по url -->
           
            <router-link to="/about" class="sidebar-left__link"> <img :src="image" class="sidebar-left__image">About</router-link>
            <router-link to="/three" class="sidebar-left__link"> <img :src="image" class="sidebar-left__image">three</router-link>
            <router-link to="/four" class="sidebar-left__link"> <img :src="image" class="sidebar-left__image">four</router-link>
              </div>
      


 
    </div>
  </transition>
    



   
</template>




<script>
import {mapGetters} from 'vuex'

export default {


data() {
    return {
        // images: [
        //   {
        //     url:'icon_burger.svg'
        //   },
        //    {
        //     url:'icon_burger.svg'
        //   },
          

        // ]
        images:'icon_burger.svg'
    }
},
 computed: {

   ...mapGetters(['DROPDOWN_STATE']),

    image() {
      return require(`../assets/img/${this.images}`);
      // return require(`../assets/img/${this.images}.svg`);
    }
  },
}
</script>



