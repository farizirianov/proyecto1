import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    listPost: [],
    postByUser: [],
    listLike: [
      {
        id: '',
        likes: [],
        size: 0
      }
    ]
  },
  mutations: {
    //===================================== For user
    SAVE_USER(state, value) {
      state.user = value
    },
    UPDATE_USER(state, value) {
      state.user = value
    },
    //===================================== For post
    SAVE_POST(state, value) {
      state.listPost = value
    },
    UPDATE_POSTS(state, value) {
      state.listPost.push(value)
    },
    SAVE_POST_USER(state, value) {
      state.postByUser = value
    },
    //===================================== For like
    ADD_LIKE(state, value) {
      state.listLike.push({
        id: value.id,
        likes: value.likes,
        size: value.size
      })
    }
  },
  actions: {
    //===================================== For user
    addDataUser({state, commit}, value) {
      commit('SAVE_USER', value)
    },
    updateDataUser({state, commit}, value) {
      commit('UPDATE_USER', value)
    },
    //===================================== For post
    addDataPosts({state, commit}, value) {
      commit('SAVE_POST', value)
    },
    updatePosts({state, commit}, value) {
      commit('UPDATE_POSTS', value)
    },
    addDataPostsUser({state, commit}, value) {
      commit('SAVE_POST_USER', value)
    },
    //===================================== For like
    aggDataListUser({state, commit}, value) {
      commit('ADD_LIKE', value)
    }
  },
  getters: {
    //===================================== For user
    getUser (state) {
      return state.user
    },
    //===================================== For posts
    getAllPost (state) {
      return state.listPost
    },
    getAllPostUser(state) {
      return state.postByUser
    },
    //===================================== For like
    getListLike(state) {
      return state.listLike
    }
  },
  modules: {
  }
})
