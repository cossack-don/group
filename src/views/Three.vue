<template>
  <div class="about main-wrapper">
    <h1>THREE</h1>


     <h1>Исправить все посты</h1> <br>

      <p style="border:solid red 3px">  1. Отредактировать проект + комменитровать  <br>
        2. Взять макет psd Figma + верстать его и натянуть на WP + см to code как натягивать <br>
        3. Сделать слайдер на vue  <br>
        4. Сделать время на вью <br>
        5. Создать 2 столбика дел, которые уже сделали и которые нужно сделать <br>
        6. Смотреть курс VUE JS + ДР ВИДЕО <br>
        7.VUEX разобрать <br>
        8. смотреть js native  <br>
        
        </p>

СДЕЛАТЬ КАЛЕНДАРЬ КАК ОТДЕЛЬНЫЙ КОМПОНЕНТ ПО ЭТОЙ ССЫЛКЕ ПОВТОРИТЬ https://iportal.com.ua/calendar-na-vue-js/
        
        <div class="ap">
  


    <div class="wp">
        <h4>Оплатили услуги на свадьбу</h4>
    <div>
 
      <!-- START WRAPPER INPUT ADD ITEM --> 
      <div>
        <!-- START add ITEM -->
        <button @click="addItemTodoYes(nameTodoYes)">click me</button>
        <input type="text"
               v-model.trim="nameTodoYes" @keyup.enter="addItemTodoYes(nameTodoYes)">
        <!-- END  add ITEM -->

      </div>
      <!-- END WRAPPER INPUT ADD ITEM -->
      <!-- если будет много постов сделать фиксед кнопку изменить -->
      <input type="text"
             v-model.trim="newName"
             v-if="toggle">
    </div>


      <!-- START WRAPPER ITEMS -->
      <div>
        <div v-for="(item, idx) in todoYes" :key="idx">

          <p v-if="!item.isEditing" class="tx" @click="hideTwos">{{ item.nameTodoYes }}</p>

          <input v-else type="text" v-model.trim="item.nameTodoYes" class="hideInput tx" />

          <div class="hwq" v-if="hideTwo">
          <button @dblclick="deleteItemTodoYes(item.id)" class="deleteItemList">удалить</button>
          <button @click="editItemTodoYes(item)" class="bsz">{{ item.isEditing ? 'сохранить' : 'изменить' }}</button>
<!-- @click="onFocus" ; onFocus(); -->
          </div>
        
        </div>
      </div>
    </div>











    <div class="wp">
<h4>необходимо оплатить</h4>
    <div>
 
      <!-- START WRAPPER INPUT ADD ITEM --> 
      <div>
        <!-- START add ITEM -->
        <button @click="addItem(name)">click me</button>
        <input type="text"
               v-model.trim="name" @keyup.enter="addItem(name)">
        <!-- END  add ITEM -->

      </div>
      <!-- END WRAPPER INPUT ADD ITEM -->
      <!-- если будет много постов сделать фиксед кнопку изменить -->
      <input type="text"
             v-model.trim="newName"
             v-if="toggle">
    </div>

      <!-- START WRAPPER ITEMS -->
      <div>
        <div v-for="(item, idx) in documents" :key="idx">
          <p v-if="!item.isEditing" class="tx" @click="hideTwoBlocks">{{ item.name }}</p>
          <input v-else type="text" v-model.trim="item.name" class="hideInput tx"/>
          
          <div class="hwq" v-if="hideTwoBlock">
          <button @click="deleteItem(item.id)" class="deleteItemList">удалить</button>
          <button @click="editItem(item)" class="bsz">{{ item.isEditing ? 'сохранить' : 'изменить' }}</button>
        </div>

        </div>
      </div>
    </div>
        </div>
    


  </div>

</template>

<script>

// VUEFIRE START
import {db} from '../db'
// VUEFIRE END

import {mapGetters} from 'vuex'


export default {

  name: 'HelloWorld',


  computed: {
    ...mapGetters(['STATE_TEST'])
  },


  data() {
    return {
      todoYes:[],
      nameTodoYes: [],
      // 
      documents: [],
      name: '',
      newName: '',
      toggle: false,
      hideTwo:false,
      hideTwoBlock:false
      
    }
  },


  firestore: {
    documents: db.collection('documents').orderBy('createdAt'),
    todoYes: db.collection('todoYes').orderBy('createdAt'),
  },


  methods: {
  //     go(){
  //       let hideInput = document.querySelector('.hideInput');
  // console.log(hideInput);
  //     hideInput.focus();
      
  //    },
  //   onFocus() {
      
    
  //    setTimeout(this.go, 50)
  //   },

hideTwoBlocks() {
this.hideTwoBlock = !this.hideTwoBlock
},
    hideTwos() {
this.hideTwo = !this.hideTwo
    },
    addItem(name) {

      if(this.name === '') {
        return
      }

      const createdAt = new Date()

      db.collection('documents').add({ name, createdAt, isEditing: false})

      this.name = ''
    },





    deleteItem(id) {
      db.collection('documents').doc(id).delete()
    },


 
    

    editItem(item) {
      item.isEditing = !item.isEditing;
      db.collection('documents').doc(item.id).update({ name: item.name });
    },




        addItemTodoYes(nameTodoYes) {

      if(this.nameTodoYes === '') {
        return
      }

      const createdAt = new Date()

      db.collection('todoYes').add({ nameTodoYes, createdAt, isEditing: false})

      this.nameTodoYes = ''
    },
 deleteItemTodoYes(id) {
      db.collection('todoYes').doc(id).delete()
    },
        editItemTodoYes(item) {
      item.isEditing = !item.isEditing;
      db.collection('todoYes').doc(item.id).update({ nameTodoYes: item.nameTodoYes });
    }


  }
}
</script>


<style>
/* .hide {
  display: none;
} */

.hwq {
 display: flex;
 justify-content: space-around;
}
.bsz {
  background: #348be7;

    border: solid 2px #1a65b6;
    /* padding: 8px; */
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
}

.bsz:hover {
  background: #007bff;
  border: solid 2px #4b6577;
}
.deleteItemList {
  background: #d33847;
    border: solid 2px #d11628;
    /* padding: 8px; */
    padding: 5px 15px;
    border-radius: 10px;
    cursor: pointer;
    color: #ffffff;
    font-weight: bold;
}
.deleteItemList:hover {
  background: #e90e23;
  border: solid 2px #4b6577;
}
.tx {
  cursor: pointer;
  background: #00ba81;
    border-radius: 10px;
    padding: 5px;
    color: #ffffff;
    border: solid 2px #4b6577;
    font-weight: bold;
    margin: 10px;
}
.ap {
  display: flex;
 justify-content: center;
 flex-wrap: wrap;
}
.wp {
  display: flex;
  /* justify-content: center; */
   flex-direction: column;
}

.wp-item {
  display: flex;
  flex-direction: column;
}
</style>