import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Videos from '@/components/Videos'
import Movies from '@/components/Movies'
import Series from '@/components/Series'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/videos',
      name: 'Videos',
      component: Videos
    },
    {
      path: '/movies',
      name: 'Movies',
      component: Movies
    },
    {
      path: '/series',
      name: 'Series',
      component: Series
    }
  ],
  mode: 'history'
})
