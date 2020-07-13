<template>
  <v-card
    class="init pa-2"
    flat tile
  >
    <form v-on:submit.prevent ref="form" class="white">
      <div class="center">
          <v-img
            src="../../assets/grun.png"
            max-height="228"
            max-width="187"
          >
          </v-img>
      </div>
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
            name="input-10-1"
            label="Contraseña"
            hint="Mínimo 6 carácteres"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        ></v-text-field>

        <!-------------------------  FORM ERRORS  ------------------->
        <div class="subtitle1 text-center text-capitalize red--text">
            <span>¿No tienes cuenta? <router-link class="cyan--text" to="/signup">¡Registrate Aqui!</router-link></span>
        </div>
        <!-------------------------  END FORM ERRORS ------------------->

        <v-card-actions class="justify-center">
            <v-btn v-on:click="login" color="#039629" elevation="0" dark>
                Entrar
            </v-btn>
        </v-card-actions>
    </form>
  </v-card>
</template>
<script>
import api from '../../services/api'
import router from '../../router/index'
import VueJwtDecode from "vue-jwt-decode"
// MIXINS
// SVG ICONS
import { mdiEyeOutline, mdiEyeOffOutline  } from '@mdi/js';

//VUEX
export default {
    data: () => ({
        showPassword: false,
        user: {
            email: '',
            password: ''
        },
        emailRules: [
            v => !!v || 'E-mail es requerido',
            v => /.+@.+\..+/.test(v) || 'E-mail no valido',
        ],
        svg: {
            visibility: mdiEyeOutline,
            visibilityOff: mdiEyeOffOutline,
        }
    }),
    methods: {
        async login() {
          await api.loginUser(this.user)
            .then((result) =>{
              if(result.status === 202) {
                  const message = result.data.text
                  this.saveErr(message)
                  reject()
              }
              localStorage.setItem("jwt", result.data)
              this.saveData(VueJwtDecode.decode(result.data))
              router.push({name: 'home'})
              resolve()
            })
            .catch((err) => {
            })
        },
        async reset() {
                this.user.email = '';
                this.user.password = '';
            },
        saveData(dataUser, dataPost) {
            this.$store.dispatch('addDataUser', dataUser)
        },
        saveErr(mess){
            this.$store.dispatch('errores', mess)
        }
    }
}
</script>