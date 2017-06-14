import * as getterNames from '../getterNames'
import * as mutationTypes from '../mutationTypes'

const state = {
  videos: 'videos'
}

const getters = {
  [getterNames.videos]: (state, getters) => (
    state.videos
  )
}

const actions = {}

const mutations = {
  [mutationTypes.VIDEOS] (state, videos) {
    state.videos = videos
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
