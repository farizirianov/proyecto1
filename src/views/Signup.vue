<template>
    <v-container class="gray" style="min-height: 100vh;">
        <v-row justify="center">
            <v-col cols="11" sm="6" md="4">
                    <SignUpForm name="Create an account"></SignUpForm>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
// COMPONENTS
import SignUpForm from '@/components/Form/SignUpForm';

export default {
    components: {
        SignUpForm
    },
}
</script>
