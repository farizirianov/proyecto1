<template>
  <v-container fluid pa-3>
    <v-row>

      <!------------------------ SCREAM LIST ----------------------->
      <v-col cols="12" sm="8" order="1" order-sm="1">

          <!------------------------ SCREAM ITEM ----------------------->
          <v-card class="mb-5" elevation="0">
            <AppScreamCard></AppScreamCard>
          </v-card>
          <!------------------------ END SCREAM ITEM ----------------------->

      </v-col>
      <v-col cols="12" sm="8" order="1">
          <v-card class="mb-5" elevation="0">
          </v-card>
      </v-col>
      <!------------------------ END SCREAM LIST ----------------------->

    </v-row>
  </v-container>
</template>

<script>
// COMPONENTS
import AppScreamCard from '@/components/Home/AppScreamCard.vue';

export default {
  name: 'Home',
  components: {
    AppScreamCard
  }
}
</script>
