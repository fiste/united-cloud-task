<template>
    <ul class='items-list'>
      <li v-for="item in items" v-if="item.type === 'movie'">
        <button>
          <img :src="getPic(item.imgUrl)">
        </button>
      </li>
    </ul>
</template>

<script>
import { mapState } from 'vuex'
import mixins from '../utils/'

export default {
  name: 'movies',
  computed: mapState([
    'items'
  ]),
  data () {
    return {
      message: 'Movies'
    }
  },
  mixins: [mixins]
}
</script>
