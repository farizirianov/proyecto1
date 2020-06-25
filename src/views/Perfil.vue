<template>
    <v-container class="gray">
         <v-row>
         <v-col cols="12" sm="4" order="-1" order-sm="2" >
          <v-card min-height="300" min-width="150" elevation="0" >
              <PerfilComponent></PerfilComponent>
          </v-card> 
      </v-col>
         </v-row>
    </v-container>
</template>

<script>
// COMPONENTS
import PerfilComponent from '@/components/Perfil/PerfilComponent.vue';

export default {
    components: {
    PerfilComponent
    }
}
</script>
