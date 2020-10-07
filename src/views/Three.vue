<template>
  <div class="about main-wrapper">
    <h1>THREE</h1>
    <br>
      <p>Сделать страницу как ту ду лист, чтобы можно было добавлять,удалять изменять данные и интегрировать с VUEFIRE</p>
    <br>

    <p>мб сделать таблицу с расписанием для лены</p>


<div v-for="(item, idx) in documents" :key="idx">
  <p v-on:dblclick="bclick(item.id)" class="qs">{{item.name}}  </p>
  <!-- {{item.id}} -->
   <button @click="deleteItem(item.id)"> delete item</button>
   <!-- если item id = id имени то нужно показывать инпут  -->

  <div  :class="item.id" class="q">
<!-- v-if="toggle" -->
  <input type="text" v-model="newame" >
  <button @click="chancheItem(item.id)" >изменить Item</button>
  </div>


<!-- {{item.name}} -->
<!-- {{newName}}
{{documents[1].name}} -->


</div>
<div>
  <button  @click="addItem(name)">click me</button>
  
  <input type="text" v-model.trim="name">


</div>

  </div>
</template>

<script>
// VUEFIRE START
import { db } from '../db'
// VUEFIRE END

import {mapGetters} from 'vuex'

export default {
  name: 'HelloWorld',
  computed: {
    ...mapGetters(['STATE_TEST'])
  },
  data() {
    return {
      documents: [],
      name:'',
      newame:'',

      toggle:false
    }
 },


  firestore: {
    documents: db.collection('documents').orderBy('createdAt'),
  },
  methods: {
    bclick(id) {

      console.log(id)
      // console.log(event.target)
        // this.toggle = !this.toggle
        let qs = document.querySelector('.qs');
        console.log(qs.classList.remove(id))
        // id.classList.add('q');
        
       
//  q.style.display = (q.style.display == 'none') ? 'block' : 'none'
// console.log(q)
// console.log(event.target)
// for(let i = 0; i < q.length; i++) {
  //  console.log(i)

// q.style.display = (q.style.display == 'none') ? 'block' : 'none'



// }
     
        // q.style.display="block";
    
      
    },





    addItem(name) {
      if(this.name === '') {
        return
      }
    const createdAt = new Date()
    
     db.collection('documents').add({ name, createdAt })
     this.name = ''
    },

     deleteItem (id) {   
     db.collection('documents').doc(id).delete()
   },

    chancheItem(id) {
// this.name = newame
// this.newame = this.name
// name = name
      // const user = { ...this.documents }
      // this.documents.name = this.newName;
// db.collection('documents').update({ name})
   db.collection('documents').doc(id).update({name:this.newame })
// db.collection('documents').update({newName })

    }

 
  }
}
</script>

<style >
.q {
  display: none;
}
</style>