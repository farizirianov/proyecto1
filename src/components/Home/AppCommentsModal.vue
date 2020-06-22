<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent scrollable max-width="600px">

      <!------------------------ COMMENTS BUTTON ----------------------->
        <template v-slot:activator="{ on }">
          <v-btn color="#2c003e" text small v-on="on">
              <v-icon left>{{svg.comment}}</v-icon> 1 Comments
          </v-btn>
        </template>
      <!------------------------ COMMENTS BUTTON ----------------------->

      <!------------------------ COMMENTS ----------------------->
      <v-card>
        <v-card-title class="primario white--text">something</v-card-title>
        <v-divider></v-divider>
        <v-card-text style="min-height: 300px; max-height: 500px;">

          <!---------------------- MAIN COMMENT PROFILE --------------------->
          <!---------------------- END MAIN COMMENT PROFILE --------------------->

          <v-divider></v-divider>

          <!--------------------- AUTH COMMENT FORM -------------------->
          <div class="mt-5 mb-5 center">
            
            <router-link to="/login">
              <v-btn elevation="0" color="#32BCC3" dark>Comment</v-btn>
            </router-link>
          </div>
          <!---------------------- END AUTH COMMENT FORM -------------------->

          <v-divider></v-divider>

          <!---------------------- LOADER -------------------->
          <div class="text-center mt-5">
            <v-progress-circular indeterminate color="primary"
            ></v-progress-circular>
          </div>
          <!---------------------- END LOADER -------------------->

          <!---------------------  COMMENTS PROFILE------------------->
          <!-------------------- END COMMENTS PROFILE ------------------>

        </v-card-text>
        <v-divider></v-divider>

        <!---------------------- ACTIONS BUTTONS -------------------->
        <v-card-actions class="background-secundario">
          <v-btn right="" color="cyan darken-1" text @click="dialog = false">Cerrar</v-btn>
        </v-card-actions>
        <!---------------------- END ACTIONS BUTTONS -------------------->

      </v-card>
      <!------------------------ END COMMENTS ----------------------->

    </v-dialog>
  </v-row>
</template>

<script>
// COMPONENTS @click="likeScream(isAuthenticated, data)"

// SVG ICONS
import { mdiCommentMultipleOutline, mdiHeartOutline, mdiHeart } from '@mdi/js';

// VUEX

// MIXINS

export default {
  components: {
  },
  props: {
      data: {
          type: Object
      }
  },
  data () {
    return {
      dialog: false,
      svg: {
        heart: mdiHeart,
        heartOut: mdiHeartOutline,
        comment: mdiCommentMultipleOutline
      }
    }
  } 
}
</script>
