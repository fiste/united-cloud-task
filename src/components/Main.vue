<template>
    <div class="all-items">
      <movies></movies>
      <series></series>
      <videos></videos>
    </div>
</template>

<script>
import { mapState } from 'vuex'
import Movies from './Movies.vue'
import Series from './Series.vue'
import Videos from './Videos.vue'

export default {
  name: 'main',
  computed: mapState([
    'items'
  ]),
  components: {
    'movies': Movies,
    'series': Series,
    'videos': Videos
  },
  data () {
    return {
      message: ''
    }
  }
}
</script>
