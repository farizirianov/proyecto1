<template>
  <v-app>
    <v-main class="background-inicio init">
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
};
</script>
<style lang="scss">
@import './src/assets/main.scss';
#app {
  background: #d6dfe2;
}
</style>
