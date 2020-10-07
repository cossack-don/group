<template>
  <div class="about main-wrapper">
    <h1>THREE</h1>

    <div>
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


    <div class="wp">
      <!-- START WRAPPER ITEMS -->
      <div>
        <div v-for="(item, idx) in documents" :key="idx">
          <p v-if="!item.isEditing">{{ item.name }}</p>
          <input v-else type="text" v-model.trim="item.name" />
          <button @click="deleteItem(item.id)">удалить</button>
          <button @click="editItem(item)">{{ item.isEditing ? 'сохранить' : 'изменить' }}</button>
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
      documents: [],
      name: '',
      newName: '',
      toggle: false
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

      db.collection('documents').add({ name, createdAt, isEditing: false})

      this.name = ''
    },


    deleteItem(id) {
      db.collection('documents').doc(id).delete()
    },


    editItem(item) {
      item.isEditing = !item.isEditing;
      db.collection('documents').doc(item.id).update({ name: item.name });
    }


  }
}
</script>


<style>
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