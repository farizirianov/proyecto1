<template>
    <v-container class="background-inicio" style="min-height: 100vh;">
      <InitBar2></InitBar2>
      <SignUpForm name="Create an account"></SignUpForm>
      <InitNavbar></InitNavbar>
    </v-container>
</template>

<script>
// COMPONENTS
import SignUpForm from '@/components/Form/SignUpForm';
import InitBar2 from '@/components/Layout/InitBar2'
import InitNavbar from '@/components/Layout/InitNavBar'

export default {
    components: {
        SignUpForm,
        InitBar2,
        InitNavbar
    },
}
</script>
