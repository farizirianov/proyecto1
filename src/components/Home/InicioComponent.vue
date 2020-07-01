<template>
<v-card
    class="mx-auto"
<<<<<<< HEAD
=======
    color="#c6f8d3"
    flat tile
>>>>>>> 07082385c1d2968e45befb60a35eb0a2c9c32b34
  >
    <v-card-text>
      <div class="center">
          <v-img
            src="../../assets/grun.png"
            max-height="228"
            max-width="187"
          >
          </v-img>
      </div>
      <v-card-text class="text--primary center">
        <div>¡Bienvenido de vuelta!</div>
      </v-card-text>
      <div class="center">¿No tienes Cuenta?</div>
      <v-card-text class="text--primary center">
        <v-btn to="/signup" color="#039629" elevation="0" class="mt-3" dark>
            Registrar
        </v-btn>
      </v-card-text>
      <div class="center">¿Ya tienes Cuenta?</div>
      <v-card-text class="text--primary center">
        <v-btn to="/login" color="#039629" elevation="0" class="mt-3" dark>
          Sign In
        </v-btn>
      </v-card-text>
    </v-card-text>
  </v-card>  
</template>

<script>
// COMPONENTS

export default {
    components: {
    }
}
</script>
