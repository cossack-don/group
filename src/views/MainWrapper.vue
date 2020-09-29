<template>

<div class="main-wrapper">
 

       <div id="nav">
      
      <!-- сюда компонент сайтбар для всех блоков -->
    
<img alt="Vue logo" src="../assets/logo.png">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
       

    <p>main</p>
    <p ></p>
 <div v-for="item in one" :key="item.name">
   <a :href="item.url" target="_blank">{{item.name}} </a>
 </div>
    </div>

    <div>333</div>

</div>
</template>

<script>
// import Sidebar from '@/views/Sidebar.vue'

export default {
    //    name: 'sidebar',
    //    NAME НУЖНО ПИСАТЬ С МЕЛКОЙ название компонента
  components: {
    // Sidebar
  },

    computed: {
    one() {
      // return this.$store.state.urls
      return this.$store.state.storeUrls.urls
      
    }
  }
}
</script>

<style lang="scss">
@import '../scss/modules/mainWrapper.scss';
</style>