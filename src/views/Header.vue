<template>
  <div class="header">
    <div ><img src="../assets/img/icon_burger.svg" alt=""></div>
     <!-- <Sidebar :class="{ b: isActive }" /> -->
      <!-- @click="ps" :class="{ b: isActive }" -->
  </div>
</template>



<script>
// import Sidebar from '@/views/Sidebar.vue'

export default {
components: {
  // Sidebar
},
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


<style lang="scss">

@import '../scss/vars/vars.scss';

h1 {
  background: $blue;
}
.b {
  display: none;
}
</style>