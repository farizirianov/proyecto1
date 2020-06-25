<template>
  <v-dialog v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-tooltip>
        <v-btn
          fab small elevation="0" 
          color="2c003e" dark
          @click.stop="dialog = true" 
          v-on="on"
        >
          <v-icon>{{svg.pencil}}</v-icon>
        </v-btn>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title class="primario white--text">
        Crear una publicación
      </v-card-title>
      <v-divider></v-divider>
      <v-textarea label="¿Qué estás pensando?">
      </v-textarea>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn>
          Cerrar
        </v-btn>
        <v-btn>
          Publicar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  import { mdiPencilRemoveOutline } from '@mdi/js';

  export default {
    data: () => ({
      dialog: false,
      svg: {
          pencil: mdiPencilRemoveOutline
      }
  })
  }
</script>