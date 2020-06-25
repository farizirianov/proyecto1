<template>
    <form ref="form">
        <v-text-field
            v-model="loginUser.email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="loginUser.password"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="Password"
            hint="At least 6 char acters"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>

        <!-------------------------  FORM ERRORS  ------------------->
        <div class="subtitle1 text-center text-capitalize red--text">
            <span>¿No tienes cuenta? <router-link class="cyan--text" to="/signup">¡Registrate Aqui!</router-link></span>
        </div>
        <!-------------------------  END FORM ERRORS ------------------->

        <div class="mt-5">
            <v-btn type="submit" class="mr-4" color="#039629" elevation="0" dark>
                Entrar
            </v-btn>
            <v-btn color="#039629" elevation="0" dark>
                Limpiar
            </v-btn>
        </div>
    </form>
</template>
<script>
// MIXINS
// SVG ICONS
import { mdiEyeOutline, mdiEyeOffOutline  } from '@mdi/js';

//VUEX
export default {
    data: () => ({
        showPassword: false,
        loginUser: {
            email: '',
            password: ''
        },
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        svg: {
            visibility: mdiEyeOutline,
            visibilityOff: mdiEyeOffOutline,
        },
    })
}
</script>