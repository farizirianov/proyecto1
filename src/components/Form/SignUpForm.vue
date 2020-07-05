<template>
    <form ref="form" :key="keyRender" class="white">
        <div class="center">
          <v-img
            src="../../assets/grun.png"
            max-height="228"
            max-width="187"
          >
          </v-img>
        </div>
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
            label="E-mail"
            required
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.password"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            label="Contraseña"
            hint="Mínimo 6 carácteres"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>
        <v-text-field
            v-model="user.confirmPassword"
            :append-icon="showPassword ? svg.visibility : svg.visibilityOff"
            :type="showPassword ? 'text' : 'password'"
            name="confirmPassword"
            label="Confirmar contraseña"
            hint="Mínimo 6 carácteres"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>

        <!-------------------------  FORM ERRORS ------------------->
        <div class="subtitle1 text-center text-capitalize red--text">
            <span>¿Ya tienes cuenta? <router-link class="#039629--text" to="/login">¡Inicia Aqui!</router-link></span>
        </div>
        <!-------------------------  END FORM ERRORS ------------------->

        <div class="mt-5 center">
            <v-btn v-on:click="createUser" class="mr-4" color="#039629" elevation="0" dark>
               Registrar
            </v-btn>
            <v-btn v-on:click="reset" color="#039629" elevation="0" dark>
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
        keyRender: 0,
        list: [],
        user: {
            email: '',
            firstName: '',
            lastName: '',
            password: '',
            confirmPassword: ''
        },
        emailRules: [
            v => !!v || 'E-mail es requerido',
            v => /.+@.+\..+/.test(v) || 'E-mail no valido',
        ],
        firtNameRules: [
            v => !!v || 'Nombre es requerido'
        ],
        lastNameRules: [
            v => !!v || 'Apellido es requerido'
        ],
        svg: {
            visibility: mdiEyeOutline,
            visibilityOff: mdiEyeOffOutline,
        },
    }),
    methods: {
        async createUser() {
            try {
                const newUser = await api.createUser(this.user)
                this.keyRender += 1
                this.asignInsig(newUser.data)
                this.$forceUpdate()
                /*this.user = {
                    email: '',
                    firstName: '',
                    lastName: '',
                    password: '',
                    confirmPassword: ''
                }*/
                /*if (token) {
                    localStorage.setItem("jwt", token)
                    this.router.push("/main")
                } else {
                    console.log("Error, no token")
                }*/
            } catch (e) {
                console.log(e)
            }
        },
        async asignInsig(idU) {
            this.list = await api.getAllInsignias()
            const list = this.list.data
            console.log(list.length)
            try {
                for (let i = 0; i < list.length; i++) {
                    const idI = list[i]._id
                    const group = list[i].group
                    await api.asignInsignias(idU, idI, group)
                }
            } catch (e) {
                console.log({message: e})
            }
        },
        async reset() {
                this.user.email = '';
                this.user.firstName = '';
                this.user.lastName = '';
                this.user.password = '';
                this.user.confirmPassword = '';
            }
    }
}
</script>
