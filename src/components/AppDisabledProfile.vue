<template>
    <div style="min-height: 300px; flex-direction: column;" class="center">
        <div class="subtitle-2 text-center mb-5 red--text">
            <v-img class="card-img" href=""></v-img>
        </div>
        <div class="subtitle-1 text-center mb-5">
            <div class="grey--text text--darken-1">¿No tienes Cuenta?</div> 
            <router-link to="/signup" class="title">
                <v-btn color="#039629" elevation="0" class="mt-3" dark>
                    Sign Up
                </v-btn>
            </router-link>
        </div>
        <div class="subtitle-1 text-center">
            <div class="grey--text text--darken-1">¿Ya tienes Cuenta?</div>
            <router-link to="/login" class="title">
                <v-btn color="#039629" elevation="0" class="mt-3" dark>
                    Sign In
                </v-btn>
            </router-link>
        </div>
    </div>
</template>

<script>

export default {
    computed: {
    }
}
</script>
