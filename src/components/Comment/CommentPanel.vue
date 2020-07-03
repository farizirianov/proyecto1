<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent scrollable max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text small v-on="on" @click.stop="dialog = true" >
          <v-icon left>{{svg.comment}}</v-icon>
          Comentarios
        </v-btn>
      </template>

      <v-card class="rounded" :key="keyRender">
        <v-card-title class="primario white--text pa-3">
          <v-row align="center" class="spacer" no-gutters>
            <v-col>
              Comentario
            </v-col>
            <v-col cols="1">
              <v-btn text small fab @click.stop="dialog = false" height="24" width="24">
                <v-icon color="white">{{svg.close}}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
          <CommentApp :idPost="this.idPost" class="pa-2">
          </CommentApp>
        <v-divider></v-divider>
        <v-card-actions>
          <v-textarea
            required rows="1" no-resize
            auto-grow
            color="#039629"
            type="text"
            class="pa-1"
            v-model="comment.content"
          >
          </v-textarea>
          <v-btn text class="primario white--text" v-on:click="createComment">
            Comentar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import api from '../../services/api'
  import CommentApp from '@/components/Comment/CommentApp.vue'
  import { mdiComment, mdiCloseThick } from '@mdi/js'
  export default {
    props: ['idUser', 'idPost'],
    components: {
      CommentApp
    },
    data: () => ({
      dialog: false,
      svg: {
        comment: mdiComment,
        close: mdiCloseThick
      },
      comment: {},
      keyRender: 0
    }),
    methods: {
      async createComment() {
        try {
          if (this.comment.content !== '') {
            await api.createComment(this.comment, this.idUser, this.idPost)
            const prueba = await api.updateListInsignias(this.idUser, 'Comment', 1)
            console.log(prueba)
            this.comment = {
              content: ''
            }
            this.renderPage()
          }
        } catch (e) {
          console.log(e)
        }
      },
      renderPage() {
        this.keyRender += 1
      }
    }
  }
</script>