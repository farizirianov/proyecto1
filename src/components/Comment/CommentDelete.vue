<template>
  <v-dialog v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          elevation="0" text small absolute right top @click.stop="dialog = true" v-on="on">
          <v-icon color="red">{{svg.delete}}</v-icon>
        </v-btn>
      </template>
    
    <v-card v-model="dialog">
      <v-card-title class="headline"></v-card-title>
      <v-card-text>
        ¿Seguro quieres eliminar este comentario?
      </v-card-text>
      <v-card-actions >
        <v-col>
          <v-btn block color="#039629" text @click="dialog = false" >
            No
          </v-btn>
        </v-col>
        <v-col>
          <v-btn block color="red darken-1" text 
            v-on:click="deleteComment" >
            Borrar
          </v-btn>
        </v-col>
      </v-card-actions>
    </v-card>
    
  </v-dialog>
</template>

<script>
import api from '../../services/api'
import { mdiDeleteOutline } from '@mdi/js'
export default {
  props: ['id','pos'],
  data: () => ({
    svg: {
      delete: mdiDeleteOutline
    },
    dialog: false
  }),
  methods: {
    async deleteComment() {
      const data = {
        id: this.id,
        pos: this.pos
      }
      await this.$store.dispatch('deleteComment', data).then(() => {
        this.dialog = false
      })
    }
  }
}
</script>

<style>

</style>