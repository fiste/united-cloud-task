import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  series: 'series'
}

const getters = {
  [getterNames.series]: (state, getters) => (
    state.series
  )
}

const actions = {}

const mutations = {
  [mutationTypes.SERIES] (state, series) {
    state.series = series
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
