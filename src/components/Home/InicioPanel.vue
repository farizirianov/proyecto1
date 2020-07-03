<template>
  <v-menu offset-y left v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn
        text small absolute right top @click.stop="dialog = true" v-on="on">
        <v-icon>H</v-icon>
      </v-btn>
    </template>
    <v-card
      height="auto"
      class="overflow-hidden"
    >
    <v-list
      dense
      nav
      class="py-0"
    >
      <v-list-item two-line :class="miniVariant && 'px-0'">
        <v-list-item-avatar>
          <img :src="user.image">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>{{user.firstName}}</v-list-item-title>
          <v-list-item-subtitle>{{user.lastName}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list-item @click="logUserOut">
        <v-list-item-icon>
          <v-icon color="red">{{ svg.logout }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>Salir</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    </v-card>
  </v-menu>
</template>

<script>
  import api from '../../services/api'

  import {mdiLogout} from '@mdi/js'

  export default {
    props: ['idUser'],
    data: () => ({
      miniVariant: false,
      dialog: false,
      user: {},
      svg: {
        logout: mdiLogout
      }
    }),
    methods: {
      async getUser() {
        const dataUser = await api.getUser(this.idUser)
        this.user = dataUser.data
      },
      logUserOut() {
      localStorage.removeItem("jwt")
      this.$router.push("/")
    }
    },
    created() {
      this.getUser()
    }
  }
</script>