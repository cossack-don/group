<template>
  <div class="about main-wrapper">
    <h1>THREE</h1>

      <div>
        <h1 >Исправить все посты</h1>

              <!-- START WRAPPER INPUT ADD ITEM -->
      <div>
          <!-- START add ITEM -->
          <button  @click="addItem(name)">click me</button>
          <input type="text" v-model.trim="name">
          <!-- END  add ITEM -->

      </div>
      <!-- END WRAPPER INPUT ADD ITEM -->
      <!-- если будет много постов сделать фиксед кнопку изменить -->
      <button  @click="bclick">изменить</button>
      <input type="text" v-model.trim="newName" v-if="toggle">
      </div>
    
 
      <div class="wp">
      <!-- START WRAPPER ITEMS -->
      <div>
      <div v-for="(item, idx) in documents" :key="idx">


              <!-- START DELETE ITEM -->
              <p>{{item.name}}  </p>
              <!-- {{item.id}}  для bclick -->

              <button @click="deleteItem(item.id)"> delete item</button>
              <!-- END DELETE ITEM -->


              <!-- START CHENCHE ITEM -->
              <!-- <div   v-if="toggle">

              <input type="text" v-model="newName" >
              <button @click="chancheItem(item.id)" >изменить Item</button>
              
              </div> -->
              <!-- END CHENCHE ITEM -->


      </div>
      </div>
      <!-- END WRAPPER ITEMS -->
      
      <div class="wp-item">
          
        
              <button @click="chancheItem(item.id)" v-for="item in documents" :key="item.id" >изменить Item</button>
      </div>
      <!-- {{this.documents[1]}} -->
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
      newName:'',
      toggle:false

    }
 },


  firestore: {
    documents: db.collection('documents').orderBy('createdAt'),
  },


  methods: {


        bclick() {
         
            this.toggle = !this.toggle
            // let hide = document.querySelector('.hide');
            // hide.style.display = (hide.style.display == 'none') ? 'block' : 'none'
         
        
            
          
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
          if(this.newName === '') {
            return
          }
          db.collection('documents').doc(id).update({name:this.newName })
            // let hide = document.querySelector('.hide');
            // hide.style.display = 'none'
            this.newName = ''
            this.toggle = !this.toggle

        
        }

 
  }
}
</script>



<style >
/* .hide {
  display: none;
} */
.wp {
  display: flex;
  justify-content: center;
}
.wp-item {
  display: flex;
  flex-direction: column;
}
</style>