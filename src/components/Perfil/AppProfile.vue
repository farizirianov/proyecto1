<template>
    <div>
        <v-row class="pa-3">
            <v-col offset="1" cols="10" class="center relative">
                <v-avatar size="200">
                    <v-img class="card-img"></v-img>
                </v-avatar>

                <!------------------ EDIT IMAGE BUTTON ------------------>
                <div>
                    <input type="file" id="imageInput" hidden >
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn class="mx-2" fab small color="#32BCC3" absolute right bottom @click="editImage" v-on="on" dark>
                                <v-icon dark>{{svg.camera}}</v-icon>
                            </v-btn>
                        </template>
                        <span>Edit Profile Image</span>
                    </v-tooltip>             
                    <v-tooltip bottom>
                        <template v-slot:activator="{ on }">
                            <v-btn class="mx-2" fab small color="#32BCC3" absolute left bottom v-on="on">
                                <v-icon dark>{{svg.strella}}</v-icon>
                            </v-btn>
                        </template>
                        <span>Sala de Insignias</span>
                    </v-tooltip>
                </div>
                <!------------------ EDIT IMAGE BUTTON ------------------>
            <v-col offset="1" cols="10" class="background">
        </v-row>
    </div>
</template>

<script>
// COMPONENTS

// SVG ICONS
import { mdiMapMarker, mdiWeb, mdiCalendar, mdiPencil, mdiPencilOutline, mdiCameraRetakeOutline, mdiStar } from '@mdi/js';
// VUEX
export default {
    components: {
    },
    props: {
    data: () => ({
        svg: {
            camera: mdiCameraRetakeOutline,
            strella: mdiStar,
        }
    })
    }
}
</script>
