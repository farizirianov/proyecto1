import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    listPost: [],
    postByUser: []
  },
  mutations: {
    //For user
    SAVE_USER(state, value) {
      state.user = value
    },
    UPDATE_USER(state, value) {
      state.user = value
    },
    //For post
    SAVE_POST(state, value) {
      state.listPost = value
    },
    SAVE_POST_USER(state, value) {
      state.postByUser = value
    }
  },
  actions: {
    //For user
    addDataUser({state, commit}, value) {
      commit('SAVE_USER', value)
    },
    updateDataUser({state, commit}, value) {
      commit('UPDATE_USER', value)
    },
    //For post
    addDataPosts({state, commit}, value) {
      commit('SAVE_POST', value)
    },
    addDataPostsUser({state, commit}, value) {
      commit('SAVE_POST_USER', value)
    }
  },
  getters: {
    //For user
    getUser (state) {
      return state.user
    },
    //For posts
    getAllPost (state) {
      return state.listPost
    },
    getAllPostUser(state) {
      return state.postByUser
    }
  },
  modules: {
  }
})
