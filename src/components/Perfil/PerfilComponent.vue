<template>
  <v-card min-height="300" min-width="150" elevation="0" class="quinto">
    <v-card-text>
        <v-col offset="1" class="center relative ma-0 pa-1">
            <v-avatar size="180">
              <v-img class="card-img" :src="imageReload"></v-img>
            </v-avatar>
            <EditPerfil :idUser="this.idUser"></EditPerfil>
        </v-col>
        <v-col offset="1" class="center relative ma-0 pa-0">
            <v-card-title>
              <h1><strong>{{user.firstName}} {{user.lastName}} </strong></h1>
            </v-card-title>
        </v-col>
    </v-card-text>
    <v-card-actions>
      <v-row justify="center">
          <v-btn
            @click="expand = !expand"
            text
            color="#2c003e"
            v-on:click="changeIcon"
          >
            <v-icon>{{svg.down}}</v-icon>
          </v-btn>
          <v-expand-transition>
            <v-card-text v-show="expand" >
              <div class="text-center">
                <span class="span">
                  {{user.sex}}
                </span>
              </div>
              <div class="text-center">
                <span class="span">
                  {{user.email}}
                </span>
              </div>
              <div class="text-center">
                <span class="span">
                  {{user.createAt}}
                </span>
              </div>
              <div class="text-center">
                <span class="md">
                  Description
                </span>
              </div>
            </v-card-text>
          </v-expand-transition>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>

import api from '../../services/api'
import EditPerfil from '@/components/Perfil/EditPerfil'
import { mdiChevronDown, mdiChevronUp } from '@mdi/js'

const reader = new FileReader()

export default {
  props: ['idUser'],
  components: {
    EditPerfil
  },
  data:() => ({
    svg: {
      down: mdiChevronDown
    },
    user: {},
    expand: false,
    imageReload: ''
  }),
  methods: {
    async loadUser() {
      const user = await api.getUser(this.idUser)
      this.user = user.data
      this.imageReload = this.user.image
    },
    changeIcon() {
      if(this.svg.down === mdiChevronUp) {
        this.svg.down = mdiChevronDown
      } else if (this.svg.down === mdiChevronDown) {
        this.svg.down = mdiChevronUp
      }
    }
  },
  created() {
    this.loadUser()
  }
}
</script>