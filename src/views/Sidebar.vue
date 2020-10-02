<template>
  <transition name="fade">
         <div class="sidebar-left"   v-if="DROPDOWN_STATE">
        
 
         <div class="sidebar-left__links-wrapper">
           <router-link to="/" class="sidebar-left__link" > <img src="../assets/img/home-icon.png" class="sidebar-left__image"> Работа</router-link>
            <!-- сделать иконки для пунктов и выводить циклом по url -->
           
            <router-link to="/about" class="sidebar-left__link"> <img src="../assets/img/gift-box-icon.png" class="sidebar-left__image">About</router-link>
            <router-link to="/three" class="sidebar-left__link"> <img src="../assets/img/calendar-icon.png" class="sidebar-left__image">three</router-link>
            <router-link to="/four" class="sidebar-left__link"> <img src="../assets/img/calendar-icon.png" class="sidebar-left__image">four</router-link>
            
              </div>
      
    

    </div>
  </transition>
    



   
</template>




<script>
// import SidebarRoutersTemplate from '@/views/SidebarRoutersTemplate.vue'
import {mapGetters} from 'vuex'

export default {
components: {
  // SidebarRoutersTemplate
},

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
        // image:[
        //   {
        //        name:'Cтарый сайт №2',
        //         url:'../assets/img.logo.png'
        //   }
        // ]

        images:'icon_burger.svg'
    }
},
 computed: {

   ...mapGetters(['DROPDOWN_STATE']),



    // image() {
    //   return require(`../assets/img/${this.images}`);
    //   // return require(`../assets/img/${this.images}.svg`);
    // }
  },
}
</script>


<style lang="scss">




</style>
