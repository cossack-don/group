<template>

<div class="main-wrapper">
 

<div class="items-url-wrapper">
   <div class="items-url-wrapper__item-wrapper">
     <ul v-for="item in job" :key="item.name">
       <li class="items-url-wrapper__item"><a :href="item.url" target="_blank">{{item.name}} </a></li>
     </ul>
 </div>

  <div class="items-url-wrapper__item-wrapper">
    <ul v-for="item in code" :key="item.name">
      <li class="items-url-wrapper__item"> <a :href="item.url" target="_blank" class="items-url-wrapper__item--link-helps">{{item.name}} </a></li>
    </ul>

  </div>

<div class="items-url-wrapper__item-wrapper">
  <ul v-for="item in vueInfo" :key="item.name">
      <li class="items-url-wrapper__item"> <a :href="item.url" target="_blank" class="items-url-wrapper__item--link-vue">{{item.name}} </a></li>
  </ul>


 </div>
</div>

    
<img alt="Vue logo" src="../assets/logo.png">

<div><img alt="Vue logo" src="../assets/logo.png"></div>
<div><img alt="Vue logo" src="../assets/logo.png"></div>
<div><img alt="Vue logo" src="../assets/logo.png"></div>
<div><img alt="Vue logo" src="../assets/logo.png"></div><div><img alt="Vue logo" src="../assets/logo.png"></div><div><img alt="Vue logo" src="../assets/logo.png"></div>
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
    job() {
      // return this.$store.state.urls
      return this.$store.state.storeUrls.urls
      
    },
    code() {
      return this.$store.state.storeUrls.urlsCode
    },
    vueInfo() {
      return this.$store.state.storeUrls.urlVue
    }
  }
}
</script>

