<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent scrollable max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn text small v-on="on" @click.stop="dialog = true" >
          <v-icon left>{{svg.comment}}</v-icon>
          Comments
        </v-btn>
      </template>

      <v-card class="rounded">
        <v-card-title class="primario white--text pa-3">
          <v-row align="center" class="spacer" no-gutters>
            <v-col>
              Comments
            </v-col>
            <v-col cols="1">
              <v-btn text small fab @click.stop="dialog = false" height="24" width="24">
                <v-icon color="white">{{svg.close}}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
          <CommentApp>
          </CommentApp>
        <v-divider></v-divider>
        <div class="pa-3">
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-textarea 
            required rows="1" no-resize
            auto-grow
            color="#039629"
            type="text"
            class="pa-1"
          >
          </v-textarea>
          <v-btn text class="primario white--text pa-1">
            Send
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  import CommentApp from '@/components/Comment/CommentApp.vue'
  import { mdiComment, mdiCloseThick } from '@mdi/js'
  export default {
    components: {
      CommentApp
    },
    data: () => ({
      dialog: false,
      svg: {
        comment: mdiComment,
        close: mdiCloseThick
      }
    })
  }
</script>