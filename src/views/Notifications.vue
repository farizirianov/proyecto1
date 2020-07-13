<template>
  <v-container style="min-height: 100%" :class="centro">
    <SearchBar :title="title"></SearchBar>

      <v-list class="pa-2" v-show="visible">
        <v-list-item-group>
          <v-list-item
            v-for="(item,i) in notifications"
            :key="i"
          >
            <v-list-item-content>
              <NotificationItem :notification="item"></NotificationItem>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-card v-show="!visible" class="pa-1">
        <v-card-text class="center">
          <h3>
            No tienes Notificaciones
          </h3>
        </v-card-text>
      </v-card>
    <Navbar></Navbar>
  </v-container>
</template>

<script>
// COMPONENTS
import Navbar from '@/components/Layout/NavBar'
import SearchBar from '@/components/Layout/SearchBar'
import NotificationItem from '@/components/Notifications/NotificationItem.vue';

// VUEX
import { mapGetters } from 'vuex'

export default {
    components: {
        NotificationItem,
        Navbar,
        SearchBar
    },
    data: () => ({
        title: 'Notificaciones',
        item: 1,
        notifications: [],
        idUser: '',
        visible: false,
        centro: 'center'
    }),
    computed: {
      ...mapGetters(['getUser', 'getListNotifications']),
    },
    methods: {
        async getDatos() {
          this.idUser = this.getUser._id
          await this.$store.dispatch('fetchNotifications', this.idUser)
          this.notifications = this.getListNotifications
          if (this.notifications.length > 0) {
            this.centro = ''
            this.visible = true
          }
        },
    },
    created() {
        this.getDatos()
    }
}
</script>

<style>
.badge-notification {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: red;
  position: absolute;
  top: 1px;
  right: 5px;
}
</style>

