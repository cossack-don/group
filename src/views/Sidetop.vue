<template>
<transition name="fade">
  <div class="about " v-if="DROPDOWN_STATE">

  </div>
  </transition>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
   computed: {

   ...mapGetters(['DROPDOWN_STATE']),

  },
}
</script>

<style lang="scss">
// .z {
//   display: none;
// }


@media screen and (max-width: 960px) {
//   .z {
//   display: block;
// }
}
</style>