<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
          <v-btn
            fab small elevation="0" 
            class="primario"
            dark
            @click.stop="dialog = true" 
            v-on="on"
          >
            <v-icon>{{svg.pencil}}</v-icon>
          </v-btn>
    </template>
    <v-card>
      <v-card-title class="primario white--text">
        Crear una publicación
      </v-card-title>
      <v-divider></v-divider>
      <v-textarea 
        label="¿Qué estás pensando?"
        required rows="1" no-resize
        auto-grow
        color="#039629"
        type="text"
        class="pa-2"
        v-model="post.content"
      >
      </v-textarea>
      <v-card-actions>
        <v-btn text @click="dialog = false">
          Cerrar
        </v-btn>
        <v-btn text v-on:click="createPost" @click="dialog = false">
          Publicar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import api from '../../services/api'
  import { mdiPencilRemoveOutline } from '@mdi/js';

  export default {
    props: ['idUser'],
    data: () => ({
      dialog: false,
      svg: {
          pencil: mdiPencilRemoveOutline
      },
      post: {}
    }),
    methods: {
      async createPost() {
        try {
          if (this.post.content !== '') {
            await api.createPost(this.post, this.idUser)
          } else {
            console.log('Error')
          }   
        } catch (e) {
          console.log(e)
        }
      }
    }
  }
</script>