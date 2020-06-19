<template>
    <form ref="form">
        <v-text-field
            v-model="user.firstName"
            :rules="firtNameRules"
            label="Firstname"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.lastName"
            :rules="lastNameRules"
            label="Lastname"
            required
            color="#039629"
        >
        </v-text-field>
        <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.password"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            label="Password"
            hint="At least 6 char acters"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.confirmPassword"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="confirmPassword"
            label="Confirm Password"
            hint="At least 6 char acters"
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
            <v-btn v-on:click="createUser" type="submit" color="#039629" elevation="0" dark>
                Sign Up
            </v-btn>
            <v-btn color="#039629" elevation="0" dark>
                Clear
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
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        firtNameRules: [
            v => !!v || 'First name is required'
        ],
        lastNameRules: [
            v => !!v || 'Last name is required'
        ],
        svg: {
            visibility: mdiEyeOutline,
            visibilityOff: mdiEyeOffOutline,
        },
    }),
    methods: {
        async createUser() {
            try {
                const user = await api.createUser(this.user)
                console.log(user)
                const token = user.data.token
                console.log(token)
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
