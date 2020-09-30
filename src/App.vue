<template>
  <div id="app" class="app">
    <!-- <div class="header">
      <p>burger btn</p>
      header</div> -->
      <Header/>

    <div class="main-wrapper-center">
 <Sidebar/>
 <router-view/>
 <!-- <div>6</div>
  <div>6</div> -->
    </div>





   
    
  

  </div>
</template>

<script>

// import Sidebar from './views/Sidebar.vue'
import Sidebar from '@/views/Sidebar.vue'
import Header from '@/views/Header.vue'

export default {
   name: 'sidebar',
      //    NAME НУЖНО ПИСАТЬ С МЕЛКОЙ название компонента
  components: {
    Sidebar,
    Header
    // MainWrapper
  },
}

</script>


