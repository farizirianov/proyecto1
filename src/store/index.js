import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    listPost: [],
    postByUser: [],
    likes: {},
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
    SAVA_lIKES(state, value) {
      state.likes = value
    },
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
    async fetchPosts({commit}) {
      const post = await api.getAllPost()
      try {
        commit('SAVE_POST', post.data)
      } catch (e) {
        console.log({message: e})
      }
    },
    async fetchPostsByUser({state, commit}) {
      try {
        const post = await api.getAllPostById(state.user._id)
        commit('SAVE_POST_USER', post.data)
      } catch (e) {
        console.log({message: e})
      }
    },
    updatePosts({state, commit}, value) {
      commit('UPDATE_POSTS', value)
    },
    //===================================== For like
    async fetchLikesByPost({state, commit}, id) {
      try {
        const like = await api.getAllLikeByPost(id)
        commit('SAVA_lIKES', like.data)
      } catch (e) {
        console.log({message: e})
      }
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
      return state.likes
    }
  },
  modules: {
  }
})
