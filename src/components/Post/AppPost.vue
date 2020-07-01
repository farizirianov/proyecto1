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
          <CommentPanel :idUser="this.idUser" :idPost="this.posts._id"></CommentPanel>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

  import api from '../../services/api'

  import CommentPanel from '@/components/Comment/CommentPanel.vue'
  import LikeList from '@/components/Like/LikeList.vue'
  import { mdiCommentMultipleOutline, mdiHeart, mdiFileEdit } from '@mdi/js'

  export default {
    props: ['idUser', 'posts'],
    components: {
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
      color: "grey"
    }),
    methods: {
      async like() {
        if(this.color === "grey") {
          this.color = "red"
          await api.createLike(this.idUser, this.posts._id)
        } else if (this.color === "red") {
          this.color = "grey"
          const likedel = await api.getUserLike(this.idUser, this.posts._id)
          await api.deleteLike(likedel.data._id)
        }
        this.$forceUpdate()
      },
      async validateLike() {
        const like = await api.getUserLike(this.idUser, this.posts._id)
        if (like.data !== null) {
          this.color = "red"
        } else {
          this.color = "grey" 
        }
      }
    },
    created() {
      this.validateLike()
    }
  }
</script>
