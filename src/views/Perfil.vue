<template>
  <v-main class="pa-0">
    <SearchBar :title="title"></SearchBar>
      <PerfilComponent></PerfilComponent>
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
import PerfilComponent from '@/components/Perfil/PerfilComponent.vue'
import SearchBar from '@/components/Layout/SearchBar'
import AppPost from '@/components/Post/AppPost.vue'
import Navbar from '../components/Layout/NavBar'

import {mapGetters} from 'vuex'

export default {
  components: {
    Navbar,
    AppPost,
    SearchBar,
    PerfilComponent
  },
  data: () => ({
    idUser: '',
    title: 'Perfil',
    post: 1,
    posts: []
  }),
  computed: {
    ...mapGetters(['getUser'])
  },
  methods: {
    aggUser() {
      this.idUser = this.getUser._id
    },
    async getPosts() {
      console.log(this.idUser)
      const posts = await api.getAllPostById(this.idUser)
      console.log(posts)
      this.posts = posts.data
    }
  },
  created() {
    this.aggUser()
    this.getPosts()
  }
}
</script>

<style>

</style>
