<template>
  <v-card max-height="800" max-width="800" class="mx-auto pa-3">
    <!-- -->
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="2" sm="2" md="1">
        <v-avatar :size="sizeAvatar">
          <v-img class="card-img" :src="post.idUser.image"></v-img>
        </v-avatar>
      </v-col>
        
      <v-col>
        <p></p>
        <h4>{{post.idUser.firstName}} {{post.idUser.lastName}}</h4>
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
          <v-img class="card-img" :src="post.imagePost"></v-img>
        </div>
        <div>
          {{post.content}}
        </div>
      </v-col>
    </v-row>
    <!-- -->
    <v-row>
      <v-col cols="12" md="8" class="relative">
        <v-card-actions>
          <v-btn color="#2c003e" text small>
            <v-icon left  color="red">{{svg.heart}}</v-icon>
            0 Likes
          </v-btn>
          <AppCommentsModal></AppCommentsModal>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>

  import api from '../../services/api'

  import AppDeleteScream from '@/components/Home/AppDeleteScream.vue'
  import AppCommentsModal from '@/components/Home/AppCommentsModal.vue'

  import { mdiCommentMultipleOutline, mdiHeart, mdiFileEdit } from '@mdi/js'

  export default {
    components: {
      AppDeleteScream,
      AppCommentsModal
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
      post: {}
    }),
    methods: {
      async getPost() {
        const id = "5ef00099f936bf1b9c6e704d"
        try {
          const post = await api.getPostById(id)
          this.post = post.data
        } catch (e) {
          console.log(e)
        } 
      }
    },
    created() {
      this.getPost()
    }
  }
</script>
