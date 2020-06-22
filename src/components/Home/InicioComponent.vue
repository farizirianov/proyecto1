<template>
<v-card
    class="mx-auto"
    color="#c6f8d3"
  >
    <v-card-text>
      <div>
        <v-img
          src="../../assets/grun.png"
        >
        </v-img>
      </div>
      <v-card-text class="text--primary center">
        <div>¡Bienvenido de vuelta!</div>
      </v-card-text>
      <div class="center">¿No tienes Cuenta?</div>
      <v-card-text class="text--primary center">
        <v-btn color="#039629" elevation="0" class="mt-3" dark>
            Sign Up
        </v-btn>
      </v-card-text>
      <div class="center">¿Ya tienes Cuenta?</div>
      <v-card-text class="text--primary center">
        <v-btn color="#039629" elevation="0" class="mt-3" dark>
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
