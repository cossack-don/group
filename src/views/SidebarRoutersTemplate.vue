<template>

<div>
      <div >
            
</div>


</div>


</template>




<script>

import {mapGetters} from 'vuex'

export default {
components: {

},

data() {
    return {
        // images: [
        //   {
        //     url:'icon_burger.svg'
        //   },
        //    {
        //     url:'icon_burger.svg'
        //   },
          

        // ]
       
        images:'icon_burger.svg'
    }
},
 computed: {

   ...mapGetters(['DROPDOWN_STATE']),

    image() {
      return require(`../assets/img/${this.images}`);
      // return require(`../assets/img/${this.images}.svg`);
    }
  },
}
</script>

