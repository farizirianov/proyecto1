<template>
  <v-dialog>
    <template>
      <v-tooltip>
        <v-btn>
          <v-icon>{{svg.pencil}}</v-icon>
        </v-btn>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title>
        <v-divider></v-divider>
      </v-card-title>
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