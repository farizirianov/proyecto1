<template>
  <v-card min-height="300" min-width="150" elevation="0" class="quinto">
    <v-card-text>
        <v-col offset="1" class="center relative ma-0 pa-1">
            <v-avatar size="180">
              <v-img class="card-img" :src="imageReload"></v-img>
            </v-avatar>
            <EditPerfil></EditPerfil>
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
                <v-icon>{{svg.calendar}}</v-icon>
                <span class="span">
                  Se unió {{infoFecha}}
                </span>
              </div>
              <div class="text-center">
                <span class="span">
                  {{user.email}}
                </span>
              </div>
              <div class="text-center">
                <span class="md">
                  {{user.description}}
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
import { mdiChevronDown, mdiChevronUp, mdiCalendar } from '@mdi/js'

import {mapGetters} from 'vuex'

const reader = new FileReader()

export default {
  components: {
    EditPerfil
  },
  data:() => ({
    svg: {
      down: mdiChevronDown,
      calendar: mdiCalendar
    },
    dias: 0,
    infoFecha: '',
    user: {},
    expand: false,
    imageReload: ''
  }),
  methods: {
    async loadUser() {
      this.user = this.getUser
      this.imageReload = this.user.image
      this.calFecha(this.user.createAt)
    },
    changeIcon() {
      if(this.svg.down === mdiChevronUp) {
        this.svg.down = mdiChevronDown
      } else if (this.svg.down === mdiChevronDown) {
        this.svg.down = mdiChevronUp
      }
    },
    calFecha(date) {
      const actual =  new Date()
      const begin = new Date(date)
      this.dias = Math.trunc((actual-begin)/(1000*60*60*24))
      if (this.dias === 0) {
        this.infoFecha = "hoy"
      } else if (this.dias === 1) {
        this.infoFecha = "ayer"
      } else {
        this.infoFecha = `hace ${this.dias} días`
      }
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