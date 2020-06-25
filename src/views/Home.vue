<template>
  <v-container fluid pa-3>
    <v-row>

      <!------------------------ SCREAM LIST ----------------------->
      <v-col cols="12" sm="8" order="1" order-sm="1">

          <!------------------------ SCREAM ITEM ----------------------->
          <v-card class="mb-5" elevation="0">
            <AppScreamCard></AppScreamCard>
          </v-card>
          <div class="mb-5" elevation="0">
            <AppPost></AppPost>
          </div>
          <!------------------------ END SCREAM ITEM ----------------------->

      </v-col>
      <v-col cols="12" sm="8" order="1">
          <v-card class="mb-5" elevation="0">
          </v-card>
      </v-col>
      <!------------------------ END SCREAM LIST ----------------------->

            <AppPostScream></AppPostScream>
            <PostCard></PostCard>
    </v-row>
  </v-container>
</template>

<script>
// COMPONENTS
import AppPost from '@/components/Post/AppPost.vue'
import PostCard from '@/components/Post/PostCard.vue'
import AppScreamCard from '@/components/Home/AppScreamCard.vue'
import AppPostScream from '@/components/Post/AppPostScream'

export default {
  name: 'Home',
  components: {
    AppPost,
    AppPostScream,
    PostCard,
    AppScreamCard
  }
}
</script>
