<template>
    <v-app-bar app class="primario" elevation="0" dark>

        <!--------------------------- NAVBAR TITLE ---------------------------->
        <v-toolbar-title class="headline text-uppercase hover">
            <span></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <!--------------------------- END NAVBAR TITLE ---------------------------->
        <!--------------------------- HOME BUTTON ---------------------------->
        <v-btn exact to="/" class="mr-2" elevation="0" color="#039629" fab small>
            <v-icon>{{svg.home}}</v-icon>
        </v-btn>
        <!--------------------------- END HOME BUTTON ---------------------------->

        <!--------------------------- NOTIFICATIONS BUTTON ---------------------------->
        <NotificationsMenu class="mr-2 ml-2"></NotificationsMenu>
        <!--------------------------- END NOTIFICATIONS BUTTON ---------------------------->
        
        <!--------------------------- LOGIN/SIGNUP BUTTONS ---------------------------->
        <div>
            <v-btn exact to="/login" elevation="0" fab color="#039629" small class="mr-2">
                <v-icon>{{svg.login}}</v-icon>
            </v-btn>
            
            <v-btn exact to="/signup" elevation="0" fab color="#039629" small>
                <v-icon>{{svg.logout}}</v-icon>
            </v-btn>
        </div>
        <!--------------------------- END LOGIN/SIGNUP BUTTONS ---------------------------->

    </v-app-bar>
</template>

<script>
import NotificationsMenu from '@/components/Notifications/NotificationsMenu.vue';
//SVG ICONS
import { mdiAccountPlusOutline, mdiHome, mdiLogin } from '@mdi/js';

export default {
    components: {
        NotificationsMenu
    },
    data: () => ({
        svg: {
            home: mdiHome,
            login: mdiLogin,
            logout: mdiAccountPlusOutline,
        }
    })
}
</script>
