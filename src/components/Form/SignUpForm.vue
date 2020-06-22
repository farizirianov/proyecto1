<template>
    <form v-on:submit.prevent ref="form">
        <v-text-field
            v-model="user.firstName"
            :rules="firtNameRules"
            label="Nombre"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.lastName"
            :rules="lastNameRules"
            label="Apellido"
            required
            color="#039629"
        >
        </v-text-field>
        <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="Correo"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.password"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            label="Contraseña"
            hint="Mínimo 6 digitos"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.confirmPassword"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="confirmPassword"
            label="Confirmar Contraseña"
            hint="Mínimo 6 digitos"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>

        <!-------------------------  FORM ERRORS ------------------->
        <div class="subtitle1 text-center text-capitalize red--text">
            <span>¿Ya tienes cuenta? <router-link class="#039629--text" to="/login">¡Inicia Aqui!</router-link></span>
        </div>
        <!-------------------------  END FORM ERRORS ------------------->

        <div class="mt-5">
            <v-btn v-on:click="createUser"  class="mr-4" color="#039629" elevation="0" dark>
                Registrar
            </v-btn>
            <v-btn color="#039629" elevation="0" dark>
                Limpiar
            </v-btn>
        </div>
    </form>
</template>

<script>
import api from '../../services/api'
//ICONS
import { mdiEyeOutline } from '@mdi/js';
import { mdiEyeOffOutline } from '@mdi/js';

//MIXINS

//VUEX
export default {
    data: () => ({
        showPassword: false,
        user: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        },
        emailRules: [
            v => !!v || 'Correo es Requerido',
            v => /.+@.+\..+/.test(v) || 'Correo invalido',
        ],
        firtNameRules: [
            v => !!v || 'Nombre es Requerido'
        ],
        lastNameRules: [
            v => !!v || 'Apellido es Requerido'
        ],
        svg: {
            visibility: mdiEyeOutline,
            visibilityOff: mdiEyeOffOutline,
        },
    }),
    methods: {
        async createUser() {
            try {
                await api.createUser(this.user)
                this.user = {
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: ''
                }
                /*if (token) {
                    localStorage.setItem("jwt", token)
                    this.router.push("/main")
                } else {
                    console.log("Error, no token")
                }*/
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
