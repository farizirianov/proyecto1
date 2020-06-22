<template>
    <form ref="form">
        <v-card-text>
            <v-container>
                <v-row>
                    <v-col cols="12">
                        <v-textarea label="¿Que estas pensando?" type="text" required no-resize rows="1" color="#039629">
                        </v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-card-text>
        <v-card-actions>
        <div class="flex-grow-1"></div>
            <v-btn color="#039629" text>
                Cerrar
            </v-btn>
            <v-btn color="#039629" text type="submit">
                Publicar
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
