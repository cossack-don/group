<template>

  <div class="about main-wrapper" >
  <!-- <h1>Написать тут свой стек технологий в блоках</h1> -->

  
  <div class="stek-wrapper" >
<h3 class="th3">Основной стэк технологий</h3>


    <div class="stek-wrapper__item" v-for="item in nameTechnologyMain" :key="item.name">
      <p>{{item.name}}</p>
    </div>

    <h3>Vue</h3>

    <div class="stek-wrapper__item" v-for="item in nameTechnologyVue" :key="item.name">
      <p>{{item.name}}</p>
    </div>


  </div>
  </div>
</template>


<script>
export default {

 

  computed: {
    nameTechnologyMain() {
      return this.$store.state.nameTechnology.nameTechnologyMain
    },

    nameTechnologyVue() {
      return this.$store.state.nameTechnology.nameTechnologyVue
    }
  }
}
</script>


<style lang="scss">
h3 {
 background: #2e9164;
    height: 60px;
    display: flex;
    color: #fceeee;
    width: 900px;
    justify-content: center;
    align-items: center;
}
.stek-wrapper {
display: flex;
    justify-content: center;

    flex-wrap: wrap;

    max-width: 600px;
   
    margin: 0 auto;
}


.stek-wrapper__item {
margin: 15px;
    font-size: 25px;
    font-weight: bold;
    background: #35495e;
    border-radius: 10px;
    padding: 15px;
    display: flex;
    color:#fceeee;
    justify-content: center;
    align-items: center;
    border: solid black 2px;
}
    
</style>