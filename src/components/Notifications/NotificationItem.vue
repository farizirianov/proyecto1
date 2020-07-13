<template>
  <v-row class="pa-0">
    <v-col>
      <h5>
        {{this.notification.message}}
      </h5>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['notification'],
  data: () => ({

  }),
}
</script>