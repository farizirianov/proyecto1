<template>
  <v-container fluid pa-3 style="min-height: 100vh;">
    <v-row>

      <!------------------------ SCREAM LIST ----------------------->
      <v-col cols="12" sm="8" order="1" order-sm="1">

          <!------------------------ SCREAM ITEM ----------------------->
          <v-card class="mb-5" elevation="0">
          </v-card>
          <!------------------------ END SCREAM ITEM ----------------------->

      </v-col>
      <v-col cols="12" sm="8" order="1">
          <v-card class="mb-5" elevation="0">
          </v-card>
      </v-col>
      <!------------------------ END SCREAM LIST ----------------------->


      <!------------------------ PROFILE ----------------------->
      <v-col cols="12" sm="4" order="-1" order-sm="2" >
          <v-card min-height="300" min-width="150" elevation="0" >
          </v-card>
      </v-col>
      <!------------------------ END PROFILE ----------------------->

    </v-row>
  </v-container>
</template>

<script>
// COMPONENTS
// VUEX

export default {
    created() {
        window.scrollTo(0, 0);
    }
}
</script>

