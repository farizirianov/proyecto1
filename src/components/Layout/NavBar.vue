<template>
  <v-bottom-navigation
    dark
    shift
    app
    grow
    fixed
    class="primario"
  >
    <v-btn to="/home" style="height: 56px">
      <v-icon>{{svg.home}}</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'insignia'}" style="height: 56px">
      <v-icon>{{svg.trophy}}</v-icon>
    </v-btn>

    <PostCard></PostCard>
    
    <v-btn to="/notifications" style="height: 56px">
      <v-icon>{{svg.notification}}</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'perfil'}" style="height: 56px">
      <v-icon>{{svg.profile}}</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  import PostCard from '@/components/Post/PostCard.vue'
  import {mdiHome, mdiAccount, mdiBellOutline, mdiTrophy, mdiPost} from '@mdi/js'
  export default {
    components: {
      PostCard
    },
    data: () => ({
      svg: {
        home: mdiHome,
        notification: mdiBellOutline,
        post: mdiPost,
        profile: mdiAccount,
        trophy: mdiTrophy
      }
    })

  }
</script>