<template>
  <div max-height="800" max-width="800" class="mx-auto pa-3">
    <v-row align="center" class="spacer" no-gutters>
      <!--------------------------- SCREAM IMAGE -------------------------->
      <v-col cols="3" sm="2" md="1">
        <v-avatar :size="sizeAvatar">
          <v-img class="card-img" :src="message.avatar"></v-img>
        </v-avatar>
        </v-col>
      <!--------------------------- END SCREAM IMAGE -------------------------->
      <!--------------------- SCREAM USER NAME AND DATE ---------------------->
      <v-col cols="4">
                <h2 class="title cyan--text hover" ></h2>
                <p class="font-weight-light grey--text text--darken-1 body-2"></p>
                <h4>Farialis Martinez</h4>
                <p>Hace dos dias</p>
      </v-col>
        </v-row>    
            <v-row>
            <!--------------------- END SCREAM USER NAME AND DATE ---------------------->
      <v-col cols="12" sm="8">
        <v-row>
            
            <!--------------------------- SCREAM BODY -------------------------->
            <v-col class="text-left" cols="">
                <div class="font-weight-regular text-truncate">
                  hello world
                </div>
            </v-col>
            <!--------------------------- END SCREAM BODY -------------------------->

            <v-col cols="12" md="8" class="relative">
                <v-card-actions>
                  
                  <!---------------------- SCREAM LIKE ACTION -------------------->
                  <v-btn text small 
                  color="#2c003e">
                      <v-icon left  color="red">{{svg.heart}}</v-icon> 0 likes
                  </v-btn>
                  <!---------------------- END SCREAM LIKE ACTION -------------------->
                
                  <!---------------------- SCREAM COMMENTS MODAL ------------------->
                  <AppCommentsModal></AppCommentsModal>
                  <!---------------------- END SCREAM COMMENTS MODAL ------------------>
                </v-card-actions>

                <!---------------------- SCREAM COMMENTS MODAL ------------------->
            </v-col>

            <!--------------------------- SCREAM DELETE MODAL -------------------------->
           <div class="center ml-5 pa-0">
              <AppDeleteScream></AppDeleteScream>
            </div>
            <!--------------------------- END SCREAM DELETE MODAL -------------------------->
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>

import AppDeleteScream from '@/components/Home/AppDeleteScream.vue';
import AppCommentsModal from '@/components/Home/AppCommentsModal.vue';
// SVG ICONS
import { mdiCommentMultipleOutline, mdiHeart } from '@mdi/js';
// MIXINS
export default {
  components: {
    AppDeleteScream,
    AppCommentsModal
  },
  data: () => ({
    svg: {
      heart: mdiHeart,
      comment: mdiCommentMultipleOutline
    },
    message: {
      avatar: 'Gold.png'
    },
    sizeAvatar: 50
  })
}
</script>
