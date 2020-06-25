<template>
    <form ref="form">
        <v-text-field
            v-model="formNewUser.handle"
            :rules="handleRules"
            label="Name"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="formNewUser.email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="formNewUser.password"
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
            v-model="formNewUser.confirmPassword"
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
            <v-btn type="submit" class="mr-4" color="#039629" elevation="0" dark>
                Sign Up
            </v-btn>
            <v-btn color="#039629" elevation="0" dark>
                Clear
            </v-btn>
        </div>
    </form>
</template>

<script>
//ICONS
import { mdiEyeOutline } from '@mdi/js';
import { mdiEyeOffOutline } from '@mdi/js';

//MIXINS

//VUEX
export default {
    data: () => ({
        showPassword: false,
        formNewUser: {
            email: '',
            password: '',
            confirmPassword: '',
            handle : '',
        },
        emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        handleRules: [
            v => !!v || 'Name is required'
        ],
        svg: {
            visibility: mdiEyeOutline,
            visibilityOff: mdiEyeOffOutline,
        },
    })
}
</script>
