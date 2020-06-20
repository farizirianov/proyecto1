<template>
     <div style="min-height: 100%; flex-direction: column;" class="center grey darken-1">
        <div class="subtitle-2 text-center mb-5 red--text">
            <img src="grun.png" style="width:100vw;max-width:250px;">
            <h3 class="white--text text--darken-1">¡Bienvenido de vuelta!</h3>
        </div>
        <div class="subtitle-1 text-center mb-5">
            <div class="white--text text--darken-1">¿No tienes Cuenta?</div> 
            <router-link to="/signup" class="title">
                <v-btn color="#039629" elevation="0" class="mt-3" dark>
                    Sign Up
                </v-btn>
            </router-link>
        </div>
        <div class="subtitle-1 text-center">
            <div class="white--text text--darken-1">¿Ya tienes Cuenta?</div>
            <router-link to="/login" class="title">
                <v-btn color="#039629" elevation="0" class="mt-3" dark>
                    Sign In
                </v-btn>
            </router-link>
        </div>
  </div>   
</template>

<script>
// COMPONENTS

export default {
    components: {
    }
}
</script>
