<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent scrollable max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text small v-on="on" @click.stop="dialog = true" >
          <v-icon left>{{svg.comment}}</v-icon>
          Comentarios
        </v-btn>
      </template>

      <v-card class="rounded">
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
          <v-list class="list pa-2">
            <v-list-item-group>
              <v-list-item
                v-for="(comm, i) in comments"
                :key="i"
                link
              >
                <v-list-item-content>
                  <CommentApp :comments="comm" :pos="i"></CommentApp>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
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
  import { mapGetters } from 'vuex'

  export default {
    props: ['idPost'],
    components: {
      CommentApp
    },
    data: () => ({
      user: {},
      dialog: false,
      svg: {
        comment: mdiComment,
        close: mdiCloseThick
      },
      comm: 1,
      comment: {},
      comments: [],
    }),
    computed: {
      ...mapGetters(['getUser', 'getListComments'])
    },
    methods: {
      async createComment() {
        try {
          if (this.comment.content !== '') {
            const dato = await api.createComment(this.comment, this.user._id, this.idPost)
            const data = {
              _id: dato.data._id,
              content: this.comment.content,
              idUser: {
                firstName: this.user.firstName,
                lastName: this.user.lastName,
                image: this.user.image
              }
            }
            this.comments.push(data)
            this.comment = {
              content: ''
            }
            await api.updateListInsignias(this.user._id, 'Comment', 1)
          }
        } catch (e) {
          console.log(e)
        }
      },
      async addUser() {
        this.user = await this.getUser
      },
      async getAllComment() {
        await this.$store.dispatch('fetchCommentsByPost',this.idPost)
        this.comments = this.getListComments
      }
    },
    created() {
      this.addUser()
      this.getAllComment()
    }
  }
</script>