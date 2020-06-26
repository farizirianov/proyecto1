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
      <span>Inicio</span>
      <v-icon>{{svg.home}}</v-icon>
    </v-btn>
    <v-btn to="/insignia" style="height: 56px">
      <span>Logros</span>
      <v-icon>{{svg.trophy}}</v-icon>
    </v-btn>
    <PostCard :idUser="this.idUser"></PostCard>
    <v-btn to="/notifications" style="height: 56px">
      <span>Notificaciones</span>
      <v-icon>{{svg.notification}}</v-icon>
    </v-btn>
    <v-btn style="height: 56px">
      <span>Perfil</span>
      <v-icon>{{svg.profile}}</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  import PostCard from '@/components/Post/PostCard.vue'
  import {mdiHome, mdiAccount, mdiBellOutline, mdiTrophy, mdiPost} from '@mdi/js'
  export default {
    props: ['idUser'],
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