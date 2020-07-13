<template>
  <v-main class="pa-0">
    <SearchBar :title="title"></SearchBar>
      <v-list class="pa-0">
        <v-list-item-group v-model="insignias" class="background-inicio pa-0">
          <v-list-item
            v-for="(insignia, i) in insignias"
            :key="i"
            link
            class="pa-0"
          >
          <v-card :disabled="!insignia.status" width="100%" class="mx-auto pa-0" tile>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="3" class="center pa-0">
                  <v-img max-height="65" max-width="65" :src="insignia.idInsignia.icon"></v-img>
              </v-col>

              <v-col class="center pa-0">
                <v-list-item-content>
                  <v-list-item-title>
                    {{insignia.idInsignia.title}}
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    {{insignia.idInsignia.description}}
                  </v-list-item-subtitle>
                  <v-row align="center" class="spacer" no-gutters>
                    <v-col class="pa-0" align="center">
                      <v-progress-linear
                        height="25"
                        rounded
                        color="#039629"
                        class="primario"
                      >
                        <strong>{{ Math.ceil(progresBar(insignia.progres,insignia.idInsignia.objective)) }}%</strong>
                      </v-progress-linear>
                    </v-col>
                    <v-col cols="2" class="pa-0" align="center">
                      {{insignia.progres}}/{{insignia.idInsignia.objective}}
                    </v-col>
                  </v-row>
                </v-list-item-content>
              </v-col>
            </v-row>
          </v-card>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    <Navbar></Navbar>
  </v-main>
</template>

<script>
  import api from '../services/api'
  import Navbar from '@/components/Layout/NavBar'
  import SearchBar from '@/components/Layout/SearchBar'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      Navbar,
      SearchBar
    },
    data: () => ({  
      title: 'Insignia',    
       insignia: 1,
       insignias: []
    }),
    computed: {
      ...mapGetters(['getUser'])
    },
    methods: {
      async mostrar() {
        const idUser = this.getUser._id
        try {
          const insig = await api.getAllInsigniasByUser(idUser)
          this.insignias = insig.data
          console.log(insig)
        } catch (e) {
          console.log({message: e})
        }
      },
      progresBar(pro, obj) {
        return pro/obj*100
      }
    },
    created() {
      this.mostrar()
    }
  }
</script>