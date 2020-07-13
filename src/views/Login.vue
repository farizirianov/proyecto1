<template>
  <v-container style="min-height: 460px" class="background-inicio">
    <InitBar2></InitBar2>
    <LoginForm></LoginForm>
    <InitNavbar></InitNavbar>
  </v-container>
</template>

<script>
// COMPONENTS
import LoginForm from '@/components/Form/LoginForm';
import InitBar2 from '@/components/Layout/InitBar2'
import InitNavbar from '@/components/Layout/InitNavBar'

export default {
    components: {
        LoginForm,
        InitNavbar,
        InitBar2
    }
}
</script>
