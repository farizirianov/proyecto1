<template>
    <v-container class="gray">
      <InitBar2></InitBar2>
        <v-row justify="center">
            <v-col cols="11" sm="6" md="4">
                <LoginForm></LoginForm>
            </v-col>
        </v-row>
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
