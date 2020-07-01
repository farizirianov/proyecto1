<template>
  <v-main class="pa-0">
    <SearchBar :title="title"></SearchBar>
      <PerfilComponent :idUser="this.idUser"></PerfilComponent>
    <Navbar></Navbar>
  </v-main>
</template>

<script>
import PerfilComponent from '@/components/Perfil/PerfilComponent.vue'
import SearchBar from '@/components/Layout/SearchBar'
import Navbar from '../components/Layout/NavBar'

export default {
  props: ['idUser'],
  components: {
    Navbar,
    SearchBar,
    PerfilComponent
  },
  data: () => ({
    title: 'Perfil'
  })
}
</script>

<style>

</style>