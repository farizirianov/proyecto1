<template>
  <v-card max-height="800" max-width="800" class="mx-auto pa-3">
    <!-- -->
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="2" sm="2" md="1">
        <v-avatar :size="sizeAvatar">
          <v-img class="card-img" :src="this.posts.idUser.image"></v-img>
        </v-avatar>
      </v-col>
        
      <v-col>
        <p></p>
        <h4>{{this.posts.idUser.firstName}} {{this.posts.idUser.lastName}}</h4>
        <p></p>
      </v-col>

      <v-col cols="2">
        <v-btn elevation="0" small absolute top fab style="transform: translateY(35px)">
          <v-icon left  color="red">{{svg.edit}}</v-icon>
        </v-btn>
        <AppDeleteScream></AppDeleteScream>
      </v-col>
    </v-row>

    <!-- -->
    <v-row>
      <v-col sm="2">
        <div align="center">
          <v-img class="card-img" :src="this.posts.imagePost">hola</v-img>
        </div>
        <div>
          {{this.posts.content}}
        </div>
      </v-col>
    </v-row>
    <!-- -->
    <v-row>
      <v-col cols="12" md="8" class="relative">
        <v-card-actions>
          <v-btn color="#2c003e" text small v-on:click="like">
            <v-icon left  :color="color">{{svg.heart}}</v-icon>
          </v-btn>
          <LikeList :id="this.posts._id">
          </LikeList>
          <CommentPanel></CommentPanel>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

  import api from '../../services/api'

  import CommentPanel from '@/components/Comment/CommentPanel.vue'
  import AppDeleteScream from '@/components/Home/AppDeleteScream.vue'
  import AppCommentsModal from '@/components/Home/AppCommentsModal.vue'
  import LikeList from '@/components/Like/LikeList.vue'
  import { mdiCommentMultipleOutline, mdiHeart, mdiFileEdit } from '@mdi/js'

  export default {
    props: ['idUser', 'posts'],
    components: {
      AppDeleteScream,
      CommentPanel,
      LikeList
    },
    data: () => ({
      svg: {
        heart: mdiHeart,
        comment: mdiCommentMultipleOutline,
        edit: mdiFileEdit
      },
      message: {
        avatar: 'Gold.png'
      },
      sizeAvatar: 50,
      //post: {},
      color: "grey"
    }),
    methods: {
      /*async getPost() {
        const id = "5ef00099f936bf1b9c6e704d"
        try {
          const post = await api.getPostById(id)
          this.post = post.data
        } catch (e) {
          console.log(e)
        } 
      },*/
      async like() {
        if(this.color === "grey") {
          this.color = "red"
          //const idPost = "5ef00099f936bf1b9c6e704d"
          //const idUser = "5eed9181c64b471218685a6b"
          await api.createLike(this.idUser, this.posts._id)
        } else if (this.color === "red") {
          this.color = "grey"
          //const idUser = "5eed9181c64b471218685a6b"
          await api.deleteLike(this.idUser)
        }
      },
      async validateLike() {
        //const id = "5eed9181c64b471218685a6b"
        const like = await api.getUserLike(this.idUser, this.posts._id)
        console.log(like)
        if (like.data !== null) {
          this.color = "red"
        } else {
          this.color = "grey" 
        }
      },
      mostrar() {
        console.log(this.idUser)
        console.log(this.posts)
      }
    },
    created() {
      //this.getPost()
      this.validateLike()
      this.mostrar()
    }
  }
</script>
