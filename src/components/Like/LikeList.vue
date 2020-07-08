<template>
    <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          elevation="0" 
          color="#2c003e" text small
          @click.stop="dialog = true" 
          v-on="on"
          v-on:click="mostrar"
        >
         {{likeSize}} Me Gusta
        </v-btn>
      </template>
      <v-card class="rounded-lg">
        <v-card-title class="primario white--text">
          <v-row align="center" class="spacer" no-gutters>
            <v-col>
              Lista de Me Gusta
            </v-col>
            <v-col cols="1">
              <v-btn text small fab @click.stop="dialog = false" height="24" width="24">
                <v-icon color="white">{{svg.close}}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-title>
        <v-divider></v-divider>
          <v-list rounded>
            <v-list-item-group v-model="likes">
              <v-list-item
                v-for="(like, i) in likes"
                :key="i"
                link
              >
                <v-list-item-avatar>
                  <v-img :src="like.idUser.image"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{like.idUser.firstName}} {{like.idUser.lastName}}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
      </v-card>
    </v-dialog>
</template>

<script>

  import api from '../../services/api'
  import { mdiCloseThick } from '@mdi/js'

  import {mapGetters} from 'vuex'

  export default {
    props: ['id'],
    data: () => ({
      dialog: false,
      svg: {
        close: mdiCloseThick
      },
      like: 1,
      likes: [],
      likeSize: 0
      
    }),
    computed: {
      ...mapGetters(['getListLike'])
    },
    methods: {
      async mostrar() {
        await this.$store.dispatch('fetchLikesByPost', this.id)
        this.likes = this.getListLike
        this.likeSize = this.likes.length
        console.log(this.likeSize)
        //this.likes = this.getListLike
        /*try {
          const like = await api.getAllLikeByPost(this.id)
          this.likes = like.data
          this.likeSize = this.likes.length
        } catch (e) {
           console.log(e)
        }*/
      }
    },
    created() {
      this.mostrar()
    }
  }
</script>