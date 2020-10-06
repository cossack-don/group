<template>
  <div class="about main-wrapper">
    <h1>THREE</h1>
    <br>
      <p>Сделать страницу как ту ду лист, чтобы можно было добавлять,удалять изменять данные и интегрировать с VUEFIRE</p>
    <br>

    <p>мб сделать таблицу с расписанием для лены</p>


<div v-for="(item, idx) in documents" :key="idx">
  <p>{{item.name}}</p>
   <button @click="deleteItem(item.id)"> delete item</button>
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
      name:''
    }
 },


  firestore: {
    documents: db.collection('documents').orderBy('createdAt'),
  },
  methods: {
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
   }

 
  }
}
</script>