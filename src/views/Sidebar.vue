<template>
    <div class="sidebar-left"  >
         <div class="sidebar-left__links-wrapper">
            <router-link to="/" class="sidebar-left__link" > <img :src="image" class="sidebar-left__image"> Работа</router-link>
            <!-- сделать иконки для пунктов и выводить циклом по url -->
           
            <router-link to="/about" class="sidebar-left__link"> <img :src="image" class="sidebar-left__image">About</router-link>
            <router-link to="/three" class="sidebar-left__link"> <img :src="image" class="sidebar-left__image">three</router-link>
            <router-link to="/four" class="sidebar-left__link"> <img :src="image" class="sidebar-left__image">four</router-link>
              </div>


 
    </div>
</template>




<script>

export default {
data() {
    return {
        images:'icon_burger'
    }
},
 computed: {
    image() {
      return require(`../assets/img/${this.images}.svg`);
    }
  },
}
</script>



