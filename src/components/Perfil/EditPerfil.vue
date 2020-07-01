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
            v-model="image"
            accept="image/png, image/jpeg, image/bmp"
            :prepend-icon="svg.camera"
            @change="mostrarFoto"
          >
          </v-file-input>
        </v-row>
        <v-text-field
            v-model="user.firstName"
            :rules="firtNameRules"
            label="Firstname"
            required
            color="#039629"
        >
        {{user.firstName}}
        </v-text-field>
        <v-text-field
            v-model="user.lastName"
            :rules="lastNameRules"
            label="Lastname"
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
            label="Password"
            hint="At least 6 char acters"
            counter
            @click:append="showPassword = !showPassword"
            color="#039629"
        >
        {{user.password}}
        </v-text-field>
        <v-text-field
            v-model="user.description"
            label="Description"
            required
            color="#039629"
        >
        {{user.description}}
        </v-text-field>
        <v-text-field
            v-model="user.sex"
            label="Sex"
            required
            color="#039629"
        >
        {{user.sex}}
        </v-text-field>
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

const reader = new FileReader()

export default {
  props: ['idUser'],
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
      firtName: '',
      lastName: '',
      email: '',
      password: '',
      sex: '',
      image: '',
      description: ''
    },
    imageReload: '',
    dialog: false,
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    firtNameRules: [
      v => !!v || 'First name is required'
    ],
    lastNameRules: [
      v => !!v || 'Last name is required'
    ]
  }),
  methods:{
    async updateUSer() {
      this.user.image = this.imageReload
      try {
        await api.updateUser(this.idUser, this.user)
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
      const user = await api.getUser(this.idUser)
      this.user = user.data
      this.imageReload = this.user.image
    }
  },
  created() {
    this.loadUser()
  }
}
</script>