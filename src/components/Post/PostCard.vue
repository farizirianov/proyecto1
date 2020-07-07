<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
          <v-btn
            fab small elevation="0" 
            class="primario"
            dark
            @click.stop="dialog = true" 
            v-on="on"
          >
            <v-icon>{{svg.pencil}}</v-icon>
          </v-btn>
    </template>
    <v-card>
      <v-card-title class="primario white--text">
        <v-row align="center" class="spacer" no-gutters>
            <v-col>
              Crear una publicación
            </v-col>
            <v-col cols="1">
              <v-btn text small fab @click.stop="dialog = false" height="24" width="24">
                <v-icon color="white">{{svg.close}}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
      </v-card-title>
      <v-divider></v-divider>
      <v-textarea 
        label="¿Qué estás pensando?"
        required rows="1" no-resize
        auto-grow
        color="#039629"
        type="text"
        class="pa-2"
        v-model="post.content"
      >
      </v-textarea>
      <v-card-actions>
        <v-btn text class="primario white--text" v-on:click="createPost" @click="dialog = false">
          Publicar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import api from '../../services/api'
  import { mdiPencilRemoveOutline, mdiCloseThick } from '@mdi/js';

  import { mapGetters } from 'vuex'

  export default {
    data: () => ({
      idUser: '',
      dialog: false,
      svg: {
          pencil: mdiPencilRemoveOutline,
          close: mdiCloseThick
      },
      post: {}
    }),
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      addUser() {
        this.idUser = this.getUser
      },
      async createPost() {
        try {
          const post = await api.createPost(this.post, this.idUser)
          await api.updateListInsignias(this.idUser, 'Post', 1)
          const posts = await api.getPostById(post.data._id)
          this.$store.dispatch('updatePosts', posts.data)
          console.log("Post creado")
          this.dialog = false
        } catch (e) {
          console.log(e)
        }
      }
    },
    created() {
      this.addUser()
    }
  }
</script>