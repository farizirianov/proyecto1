<template>
  <div class="text-center">
    <v-menu
      v-model="menu" :close-on-content-click="false" :nudge-width="200" offset-x
    >
      <!--------------------- NOTIFICATION BUTTON ----------------------->
      <template v-slot:activator="{ on }">
          <v-tooltip bottom>
          <template v-slot:activator="{ on: tooltip }">
            <v-btn small fab @click="openNotifications" elevation="0" color="#039629" dark>
                <v-icon>{{svg.bell}}</v-icon>
            </v-btn>
          </template>
          <span>Notifications</span>
          </v-tooltip>
      </template>
      <!--------------------- END NOTIFICATION BUTTON ----------------------->
    </v-menu>
  </div>
</template>

<script>
// COMPONENTS
import NotificationItem from '@/components/Notifications/NotificationItem.vue';
// SVG ICONS
import { mdiBellOutline } from '@mdi/js';

export default {
  components:{
    NotificationItem
  },
  data: () => ({
      menu: false,
      svg: {
          bell: mdiBellOutline,
      },
  }),
  methods: {
    openNotifications() {
        this.$router.push('/notifications')
    }
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
