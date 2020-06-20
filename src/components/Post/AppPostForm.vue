<template>
    <form ref="form">
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-textarea label="Escribe un comentario" type="text" required no-resize rows="4" color="#32BCC3">
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
        <div class="flex-grow-1"></div>
            <v-btn color="#32BCC3" text 
            @click="$emit('click')">
                Cerrar
            </v-btn>
            <v-btn color="#32BCC3" text type="submit">
                Post your scream
            </v-btn>
        </v-card-actions>
    </form>
</template>
<script>
import { mapGetters } from 'vuex';
export default {
    data: () => ({
        body: ''
    })
}
</script>
