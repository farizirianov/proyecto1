<template>
  <v-app>
    <v-main class="background-inicio">
      <Error v-if="getError" :message="getError"></Error>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Error from './components/Error/Error'
import {mapGetters} from 'vuex'
export default {
  name: 'App',
  components: {
    Error
  },
  computed: {
    ...mapGetters(['getError'])
  }
};
</script>
<style lang="scss">
@import './src/assets/main.scss';
#app {
  background: #d6dfe2;
}
</style>
