<template>
  <v-app>
    <Navbar></Navbar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from './components/Layout/AppNavbar';

export default {
  name: 'App',
  components: {
    Navbar
  }
};
</script>
<style lang="scss">
@import './src/assets/main.scss';
#app {
  background: #d6dfe2;
}
</style>
