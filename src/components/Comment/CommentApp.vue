<template>
  <v-list class="list" :key="keyRender">
    <v-list-item-group v-model="comments">
      <v-list-item
        v-for="(comment, i) in comments"
        :key="i"
        link
      >
        <v-list-item-avatar>
          <v-img :src="comment.idUser.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text--black">
            {{comment.idUser.firstName}} {{comment.idUser.lastName}}
          </v-list-item-title>
          <v-list-item-subtitle class="text--black">
            {{comment.content}}
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <CommentDelete 
            :id="comment._id"
          >
          </CommentDelete>
        </v-list-item-action>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
import api from '../../services/api'
import CommentDelete from '@/components/Comment/CommentDelete'

export default {
  props: ['idPost'],
  components: {
    CommentDelete
  },
  data: () => ({
    comment: 1,
    comments: [],
    keyRender: 0
  }),
  methods: {
    async getAllComment() {
      const comment = await api.getAllCommentByPost(this.idPost)
      this.comments = comment.data
    }
  },
  created() {
    this.getAllComment()
  }
}
</script>