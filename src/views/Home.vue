<template>
  <v-main class="pa-0">
    <SearchBar :title="title"></SearchBar>
      <v-list class="pa-0">
        <v-list-item-group v-model="posts" class="background-inicio">
          <v-list-item
            v-for="(post, i) in posts.slice().reverse()"
            :key="i"
            link
          >
            <v-list-item-content>
              <AppPost :posts="post" :pos="i"></AppPost>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    <Navbar></Navbar>
  </v-main>
</template>

<script>
import api from '../services/api'
import VueJwtDecode from "vue-jwt-decode"
// COMPONENTS
import AppPost from '@/components/Post/AppPost.vue'
import SearchBar from '@/components/Layout/SearchBar'
import Navbar from '../components/Layout/NavBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    AppPost,
    Navbar,
    SearchBar
  },
  data: () =>({
    title: 'Inicio',
    post: 1,
    posts: [],
    list: []
  }),
  computed: {
    ...mapGetters(['getAllPost']) // <---- Here
  },
  methods: {
    async addPosts() {
      //const posts = await api.getAllPost()
      await this.$store.dispatch('fetchPosts')
      this.posts = this.getAllPost // <---- Here
    }
  },
  created() {
    this.addPosts()
  }
}
</script>
