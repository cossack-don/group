<template>
  <div id="app" class="app">
    <div class="header">
      <p>burger btn</p>
      header</div>

    <div class="main-wrapper-center">
 <Sidebar/>
 <router-view/>
 <div>6</div>
  <div>6</div>
    </div>





   
    
  

  </div>
</template>

<script>

// import Sidebar from './views/Sidebar.vue'
import Sidebar from '@/views/Sidebar.vue'
// import MainWrapper from '@/views/MainWrapper.vue'

export default {
   name: 'sidebar',
      //    NAME НУЖНО ПИСАТЬ С МЕЛКОЙ название компонента
  components: {
    Sidebar,
    // MainWrapper
  },
}

</script>

<style lang="scss">

@import './scss/reset.scss';
@import './scss/modules/app.scss';
@import './scss/modules/header.scss';
</style>
