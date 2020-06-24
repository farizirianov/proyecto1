<template>
  <v-app>
    <v-main>
      <navb></navb>
      <router-view></router-view>
      <Navbar></Navbar>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/Layout/NavBar'
import navb from './components/Layout/AppNavbar'
export default {
  name: 'App',
  components: {
    Navbar,
    navb
  }
};
</script>
<style lang="scss">
@import './src/assets/main.scss';
#app {
  background: #d6dfe2;
}
</style>
