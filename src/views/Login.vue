<template>
    <v-container class="gray">
        <v-row justify="center">
            <v-col cols="11" sm="6" md="4">
                <v-row justify="center">
                     <v-img src="../assets/grun.png"
                     style="width:30vw;max-width:150px;"
                     >
                     </v-img>
                </v-row>
                <LoginForm></LoginForm>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// COMPONENTS
import LoginForm from '@/components/Form/LoginForm';

export default {
    components: {
        LoginForm
    }
}
</script>
