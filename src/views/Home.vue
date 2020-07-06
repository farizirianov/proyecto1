<template>
  <v-main class="pa-0">
    <SearchBar :title="title"></SearchBar>
      <v-list class="pa-0">
        <v-list-item-group v-model="getAllPost" class="background-inicio">
          <v-list-item
            v-for="(post, i) in posts.slice().reverse()"
            :key="i"
            link
          >
            <v-list-item-content>
              <AppPost :posts="post"></AppPost>
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
import PostCard from '@/components/Post/PostCard.vue'
import SearchBar from '@/components/Layout/SearchBar'
import Navbar from '../components/Layout/NavBar'

import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
    AppPost,
    PostCard,
    Navbar,
    SearchBar
  },
  data: () =>({
    title: 'Inicio',
    post: 1,
    posts: []
  }),
  computed: {
    ...mapGetters(['getAllPost'])
  },
  methods: {

  },
  created() {
    this.posts = this.getAllPost
    console.log(this.getAllPost)
  }
}
</script>
