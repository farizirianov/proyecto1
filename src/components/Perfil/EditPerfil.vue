<template>
  <v-dialog v-model="dialog" persistent>
    <template v-slot:activator="{ on }">
      <v-btn
        elevation="0" 
        small fab
        class="mx-2 white--text"
        color="#039629"
        absolute right top
        style="transform: translateY(35px)"
        @click.stop="dialog = true" v-on="on"
      >
        <v-icon>{{svg.setting}}</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="primario center white--text">
        Editar Perfil
      </v-card-title>
      <form ref="form" :key="keyRender" class="pa-3">
        <v-row class="pa-3">
          <v-avatar size="100">
            <v-img class="card-img" :src="imageReload"></v-img>
          </v-avatar>
          <v-file-input
            filled
            accept="image/png, image/jpeg, image/bmp"
            color="green"
            :prepend-icon="svg.camera"
            @change="mostrarFoto"
          >
          </v-file-input>
        </v-row>
        <v-text-field
            v-model="user.firstName"
            :rules="firtNameRules"
            label="Nombre"
            required
            color="#039629"
        >
        {{user.firstName}}
        </v-text-field>
        <v-text-field
            v-model="user.lastName"
            :rules="lastNameRules"
            label="Apellido"
            required
            color="#039629"
        >
        {{user.lastName}}
        </v-text-field>
        <v-text-field
            v-model="user.email"
            :rules="emailRules"
            label="E-mail"
            required
            color="#039629"
        >
        {{user.email}}
        </v-text-field>
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
        >
        {{user.password}}
        </v-text-field>
        <v-text-field
            v-model="user.description"
            label="Descripción"
            required
            color="#039629"
        >
        {{user.description}}
        </v-text-field>
        <v-radio-group v-model="user.sex" :mandatory="false">
          <v-radio label="Femenino" value="F"></v-radio>
          <v-radio label="Masculino" value="M"></v-radio>
        </v-radio-group>
      </form>
      <v-card-actions>
        <v-row justify="space-around" class="pa-2">
        <v-btn text class="primario white--text" @click.stop="dialog = false">
          Cancelar
        </v-btn>
        <v-btn text class="primario white--text" @click="updateUSer" @click.stop="dialog = false">
          Confirmar
        </v-btn>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mdiAccountCog, mdiEyeOutline, mdiEyeOffOutline, mdiCamera } from '@mdi/js'
import api from '../../services/api'
import { mapGetters, mapActions } from 'vuex'

const reader = new FileReader()

export default {
  data: () => ({
    svg: {
      setting: mdiAccountCog,
      visibility: mdiEyeOutline,
      visibilityOff: mdiEyeOffOutline,
      camera: mdiCamera
    },
    keyRender: 0,
    showPassword: false,
    user: {
    },
    imageReload: '',
    dialog: false,
    emailRules: [
      v => !!v || 'E-mail es requerido',
      v => /.+@.+\..+/.test(v) || 'E-mail no es valido',
    ],
    firtNameRules: [
      v => !!v || 'Nombre es requerido'
    ],
    lastNameRules: [
      v => !!v || 'Apellido es requerido'
    ]
  }),
  methods:{
    async updateUSer() {
      this.user.image = this.imageReload
      try {
        await api.updateUser(this.idUser, this.user)
        this.$store.dispatch('updateDataUser', this.user)
      } catch (e) {
        console.log({message: e})
      }
    },
    mostrarFoto() {
      reader.readAsDataURL(this.image)
      reader.onload = () => {
        this.imageReload = reader.result
      }      
    },
    increase() {
      this.keyRender += 1
    },
    async loadUser() {
      this.user = this.getUser
      this.imageReload = this.user.image
    }
  },
  computed: {
    ...mapGetters(['getUser'])
  },
  created() {
    this.loadUser()
  }
}
</script>