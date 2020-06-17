<template>
  <v-container fluid>
    <v-row justify="center">
      <img
      src="plantaa.png"
      style="width:30vw;max-width:150px;"
    >
      <v-expansion-panels popout>
        <h2>Sala de Insignias</h2>
        <v-expansion-panel
          v-for="(message, i) in messages"
          :key="i"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
                  <img
                    :src="message.avatar"
                  >
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong v-html="message.name"></strong>
                <span
                  v-if="message.total"
                  class="grey--text"
                >
                  &nbsp;({{ message.total }})
                </span>
              </v-col>

              <v-col
                class="text-no-wrap"
                cols="5"
                sm="3"
              >
                <strong v-html="message.title"></strong>
              </v-col>

              <v-col
                v-if="message.excerpt"
                class="grey--text text-truncate hidden-sm-and-down"
              >
                &mdash;
                {{ message.excerpt }}
              </v-col>
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
              <v-progress-linear
                {{ message.skill }}
                color="green"
                height="25"
                reactive
              >
      <template v-slot="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>
            <v-divider></v-divider>
            <v-card-text>{{ message.lorem }}</v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data: () => ({      
      messages: [
        {

          avatar: 'Gold.png',
          title: 'Insignia Actvista',
          lorem: 'Interactúa publicando contenido valioso para ubicarte en los mejores puesto del Ranking activista.',
          skill: 20,
        },
        {
          avatar: 'Silver.png',
          title: 'Popular ambientalista',
          lorem: 'Interactúa con contenido valioso para que otros miembros se interesen y adquieras alto números de comentarios, así obtener popularidad.',
          skill: 40,
        },
        {
          avatar: 'Bronce.png',
          title: 'Ecologista',
          lorem: 'Cada like cuenta en la carrera ecologista, publica contenido interensate y gana la mayor cantidad de likes.', 
          skill: 90,         
        },
      ] 
    }),
  }
</script>