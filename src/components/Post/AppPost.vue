<template>
  <v-card max-height="800" max-width="800" class="mx-auto pa-3">
    <!-- -->
    <v-row align="center" class="spacer" no-gutters>
      <v-col cols="2" sm="2" md="1">
        <v-avatar :size="sizeAvatar">
          <v-img class="card-img" :src="user.image"></v-img>
        </v-avatar>
      </v-col>
        
      <v-col>
        <p></p>
        <h4>{{user.firstName}}+{{user.lastName}}</h4>
        <p></p>
      </v-col>

      <v-col>
        <AppDeleteScream></AppDeleteScream>
      </v-col>
    </v-row>

    <!-- -->
    <v-row>
      <v-col sm="2">
        <v-row>
          <div>
            {{post.imagePost}}
          </div>
        </v-row>
        <v-row>
          <div>
            {{post.content}}
          </div>
        </v-row>
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

  import { mdiCommentMultipleOutline, mdiHeart } from '@mdi/js'

  export default {
    components: {
      AppDeleteScream,
      AppCommentsModal
    },
    data: () => ({
      svg: {
        heart: mdiHeart,
        comment: mdiCommentMultipleOutline
      },
      message: {
        avatar: 'Gold.png'
      },
      sizeAvatar: 50,
      post: {},
      user: {}
    }),
    methods: {
      async getPost() {
        try {
          const post = await api.getPostById()
          console.log(post)
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
