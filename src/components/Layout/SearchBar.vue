<template>
    <v-app-bar
      elevation="0"
      app
      dark
      class="primario"
    >
      <InicioPanel :idUser="this.idUser"></InicioPanel>
      <v-toolbar-title>{{this.title}}</v-toolbar-title>
      <v-spacer></v-spacer>

    </v-app-bar>
</template>

<script>
  import InicioPanel from '@/components/Home/InicioPanel'

  export default {
    props: ['idUser', 'title'],
    components: {
      InicioPanel
    },
    data: () => ({
    }),
    methods: {
      logUserOut() {
        localStorage.removeItem("jwt")
        this.$router.push("/")
      }
    }
  }
</script>