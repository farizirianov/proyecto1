<template>
    <v-app-bar
      elevation="0"
      app
      dark
      class="primario"
    > 
      <v-btn to="/" class="mr-2" elevation="0" color="#039629" fab small>
        <v-icon>{{svg.left}}</v-icon>
      </v-btn>
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>

  import {mdiArrowLeftThick} from '@mdi/js'

  export default {
    components: {
    },
    data: () => ({
      svg: {
        left: mdiArrowLeftThick
      }
    })
  }
</script>