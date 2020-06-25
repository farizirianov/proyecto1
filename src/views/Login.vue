<template>
    <v-container class="gray">
        <v-row justify="center">
            <v-col cols="11" sm="6" md="4">
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
