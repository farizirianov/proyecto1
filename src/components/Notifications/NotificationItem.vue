<template>
  <v-list class="list" :key="keyRender">
    <v-list-item-group v-model="notifications">
      <v-list-item
      >
        <v-list-item-avatar>
          <v-img :src="notification.idUser.image"></v-img>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="text--black">
            {{notification.idUser.firstName}} {{notification.idUser.lastName}}
          </v-list-item-title>
          <v-list-item-subtitle class="text--black">
            {{notification.message}}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>


<script>
import api from '../../services/api'

export default {
  props: ['idPost'],
  components: {
  },
  data: () => ({
    notification: 1,
    notifications: [],
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
