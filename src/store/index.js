import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import movies from './modules/movies'
import series from './modules/series'
import videos from './modules/videos'
import Data from '../api/data.json'

Vue.use(Vuex)

const DEBUG = process.env.NODE_ENV === 'development'

export default new Vuex.Store({
  state: {
    items: Data.items
  },
  modules: {
    main,
    movies,
    series,
    videos
  },
  strict: DEBUG
})
