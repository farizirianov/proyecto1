<template>
  <v-main class="pa-0">
    <SearchBar :title="title" :idUser="user._id"></SearchBar>
      <v-list class="pa-0">
        <v-list-item-group v-model="posts" class="background-inicio">
          <v-list-item
            v-for="(post, i) in posts"
            :key="i"
            link
          >
            <v-list-item-content>
              <AppPost :idUser="user._id" :posts="post"></AppPost>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    <Navbar :idUser="user._id"></Navbar>
  </v-main>
</template>

<script>
import api from '../services/api'
import VueJwtDecode from "vue-jwt-decode"
// COMPONENTS
import AppPost from '@/components/Post/AppPost.vue'
import PostCard from '@/components/Post/PostCard.vue'
import AppScreamCard from '@/components/Home/AppScreamCard.vue'
import AppPostScream from '@/components/Post/AppPostScream'
import SearchBar from '@/components/Layout/SearchBar'
import Navbar from '../components/Layout/NavBar'

export default {
  name: 'Home',
  components: {
    AppScreamCard,
    AppPost,
    AppPostScream,
    PostCard,
    Navbar,
    SearchBar
  },
  data: () =>({
    title: 'Inicio',
    user: {},
    post: 1,
    posts: []
  }),
  methods: {
    getUserDetails() {
      try {
        const token = localStorage.getItem("jwt")
        let decoded = VueJwtDecode.decode(token)
        this.user = decoded  
      } catch (e) {
        console.log({message: e})        
      }
    },
    async getAllPost() {
      try {
        const post = await api.getAllPost()
        this.posts = post.data
      } catch (e) {
        console.log(e)
      }
    }
  },
  created() {
    this.getUserDetails()
    this.getAllPost()
  }
}
</script>
