<template>
    <form ref="form">
        <v-text-field
            v-model="login.email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="login.password"
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
            <v-btn v-on:click="loginUser" type="submit" class="mr-4" color="#039629" elevation="0" dark>
                Entrar
            </v-btn>
            <v-btn color="#039629" elevation="0" dark>
                Limpiar
            </v-btn>
        </div>
    </form>
</template>
<script>
import api from '../../services/api'
// MIXINS
// SVG ICONS
import { mdiEyeOutline, mdiEyeOffOutline  } from '@mdi/js';

//VUEX
export default {
    data: () => ({
        showPassword: false,
        login: {
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
    }),
    methods: {
        async loginUser() {
            try {
                const user = await api.loginUser(this.login)
                console.log(user)
                const token = user.data.token
                if (token) {
                    localStorage.setItem("jwt", token)
                    this.$router.push("/main")
                } else {
                    localStorage.setItem("jwt", "Error no token")
                }
            } catch (e) {
                console.log(e)
                localStorage.setItem("jwt", "Error")
            }
        }
    }
}
</script>