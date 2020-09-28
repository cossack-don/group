<template>
  <div id="app">
 <Sidebar/>
    <router-view/>
    
  

  </div>
</template>

<script>

// import Sidebar from './views/Sidebar.vue'
import Sidebar from '@/views/Sidebar.vue'

export default {
   name: 'sidebar',
      //    NAME НУЖНО ПИСАТЬ С МЕЛКОЙ название компонента
  components: {
    Sidebar
  },
}

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
