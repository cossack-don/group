<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <p>main</p>
    <p ></p>
 <div v-for="item in one" :key="item.name">
   <a :href="item.url" target="_blank">{{item.name}} </a>
 </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
  },

  computed: {
    one() {
      // return this.$store.state.urls
      return this.$store.state.storeUrls.urls
      
    }
  }
}
</script>
