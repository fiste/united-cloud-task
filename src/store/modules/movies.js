import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  movies: 'movies'
}

const getters = {
  [getterNames.movies]: (state, getters) => (
    state.movies
  )
}

const actions = {}

const mutations = {
  [mutationTypes.MOVIES] (state, movies) {
    state.movies = movies
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
