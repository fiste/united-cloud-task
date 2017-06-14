import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  main: 'main'
}

const getters = {
  [getterNames.main]: (state, getters) => (
    state.main
  )
}

const actions = {}

const mutations = {
  [mutationTypes.MAIN] (state, main) {
    state.main = main
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
