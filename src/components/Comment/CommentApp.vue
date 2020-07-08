<template>
  <v-row class="pa-0">
    <v-col cols="2">
      <v-avatar :size="sizeAvatar">
        <v-img :src="this.comments.idUser.image"></v-img>
      </v-avatar>
    </v-col>

    <v-col>
      <h4>
        {{this.comments.idUser.firstName}} {{this.comments.idUser.lastName}}
      </h4>
      <h5>
        {{this.comments.content}}
      </h5>
    </v-col>

    <v-col cols="2">
      <CommentDelete 
        :id="this.comments._id"
        :pos="this.pos"
      >
      </CommentDelete>
    </v-col>
  </v-row>
</template>

<script>
import api from '../../services/api'
import CommentDelete from '@/components/Comment/CommentDelete'

import {mapGetters} from 'vuex'

export default {
  props: ['comments', 'pos'],
  components: {
    CommentDelete
  },
  data: () => ({
    sizeAvatar: 30
  })
}
</script>