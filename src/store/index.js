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
    comments: []
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
      state.listPost.unshift(value)
    },
    SAVE_POST_USER(state, value) {
      state.postByUser = value
    },
    DELETE_POST(state, value) {
      state.listPost.splice(value,1)
    },
    DELETE_POST_USER(state, value) {
      state.postByUser.splice(value,1)
    },
    //===================================== For like
    SAVE_lIKES(state, value) {
      state.likes = value
    },
    //===================================== For Comments
    SAVE_COMMENTS(state, value) {
      state.comments = value
    },
    UPDATE_COMMENTS(state, value) {
      state.comments.push(value)
    },
    DELETE_COMMENT(state, value) {
      state.comments.splice(value, 1)
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
    updatePosts({commit}, value) {
      commit('UPDATE_POSTS', value)
    },
    async deletePost({commit}, value) {
      try {
        await api.deletePost(value.id)
        if(value.dest === 'Home') {
          commit('DELETE_POST', value.pos)
        } else if (value.dest === 'Perfil') {
          commit('DELETE_POST_USER', value.pos)
        }
      } catch (e) {
        console.log({message: e})
      }
    },
    //===================================== For like
    async fetchLikesByPost({commit}, id) {
      try {
        const like = await api.getAllLikeByPost(id)
        commit('SAVE_lIKES', like.data)
      } catch (e) {
        console.log({message: e})
      }
    },
    //===================================== For Comments
    async fetchCommentsByPost({commit}, id) {
      try {
        const comment = await api.getAllCommentByPost(id)
        commit('SAVE_COMMENTS', comment.data)
      } catch (e) {
        console.log({message: e})
      }
    },
    updateComments({commit}, value) {
      commit('UPDATE_COMMENTS', value)
    },
    async deleteComment({commit}, value) {
      try {
        await api.deleteComment(value.id)
        commit('DELETE_COMMENT', value.pos)
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
      return state.listPost.reverse()
    },
    getAllPostUser(state) {
      return state.postByUser.reverse()
    },
    //===================================== For like
    getListLike(state) {
      return state.likes
    },
    //===================================== For Comments
    getListComments(state) {
      return state.comments
    }
  },
  modules: {
  }
})
