<template>
  <div class="wrapper">
    <div class="routes">
      <router-link to="/videos" active-class="active">my videos</router-link>
      <router-link to="/movies" active-class="active">movies</router-link>
      <router-link to="/series" active-class="active">series</router-link>
      <router-view></router-view>
    </div>
    <footer>
      <div class="wrapper">
        <div class="separator"></div>
        <div class="date-time">
          <span class="date">{{ date() }}</span>
          <span class="time">{{ time() }}</span>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import mixins from './utils'

export default {
  name: 'app',
  mixins: [mixins]
}
</script>
