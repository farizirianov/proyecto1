
<template>
  <v-container style="min-height: 100%" class="background-inicio init pa-0 ma-0">
    <InitBar></InitBar>
    <InicioComponent></InicioComponent>
    <InitNavbar></InitNavbar>
  </v-container>
</template>

<script>
// COMPONENTs
import InicioComponent from '@/components/Home/InicioComponent.vue';
import InitBar from '@/components/Layout/InitBar'
import InitNavbar from '../components/Layout/InitNavBar'

export default {
    components: {
    InicioComponent,
    InitBar,
    InitNavbar
    }
}
</script>
