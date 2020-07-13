<template>
  <v-bottom-navigation
    dark
    shift
    app
    grow
    fixed
    class="primario"
    :v-model="mostrar"
  >
    <v-btn to="/home" style="height: 56px">
      <v-icon>{{svg.home}}</v-icon>
    </v-btn>

    <v-btn :to="{ name: 'insignia'}" style="height: 56px">
      <v-icon>{{svg.trophy}}</v-icon>
    </v-btn>

    <PostCard></PostCard>
    
    <v-badge 
      overlap style="height: 56px"
      :content="contador"
      :value="contador"
      :icon="svg.alert"
    >
      <v-btn :to="{ name: 'notifications'}" @click="markNotifications">
        <v-icon>{{svg.notification}}</v-icon>
      </v-btn>
    </v-badge>

    <v-btn :to="{ name: 'perfil'}" style="height: 56px">
      <v-icon>{{svg.profile}}</v-icon>
    </v-btn>

  </v-bottom-navigation>
</template>

<script>
  import PostCard from '@/components/Post/PostCard.vue'
  import {mdiHome, mdiAccount, mdiBellOutline, mdiBellAlertOutline, mdiTrophy, mdiPost} from '@mdi/js'
  import api from '../../services/api'
  import {mapGetters} from 'vuex'
  export default {
    components: {
      PostCard
    },
    data: () => ({
      svg: {
        home: mdiHome,
        notification: mdiBellOutline,
        alert: mdiBellAlertOutline,
        post: mdiPost,
        profile: mdiAccount,
        trophy: mdiTrophy
      },
      noti: [],
      contador: -1
    }),
    computed: {
      ...mapGetters(['getUser', 'getCont']),
      mostrar() {
        this.$store.dispatch('fetchUnmarkedNoti', this.getUser._id)
        this.contador = this.getCont
        console.log(this.contador)
      }
    },
    methods: {
      async markNotifications() {
        const data = await api.markNotifications(this.getUser._id)
        console.log(data)
      }
    }
  }
</script>