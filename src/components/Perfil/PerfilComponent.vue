<template>
<div class="sexto">
    <v-row class="pa-3">
<!------------------------AVATAR----------------------->
            <v-col offset="1" cols="10" class="center relative">
                <v-avatar size="200">
                    <v-img class="card-img" src="../../assets/grun.png"></v-img>
                </v-avatar>
                <!------------------ EDIT IMAGE BUTTON ------------------>
            </v-col> 


<!------------------INFORMACION PERSONAL----------------------->
            <v-col offset="1" cols="10" class="quinto">
                    <v-row>
                        <v-col>
                            <div class="text-center mb-3 title text-secundario font-weight-bold">
                                <span>farialis Martinez</span>
                            </div>

                            <div class="text-center">
                                <v-icon>{{svg.calendar}}</v-icon>
                                <span>
                                Unido hoy
                                </span>
                            </div>

                            <div class="text pr-2 pl-5 font-weight-regular">
                               hola soy yo mi contentido es importante porque yo digo
                            </div>
                        </v-col>

                        <v-btn color="#039629" v-on="on" elevation="0" dark>
                          <v-icon>{{svg.pencil}}</v-icon>
                        </v-btn>
                    </v-row>
            </v-col>

    </v-row>
</div>
</template>

<script>
import { mdiCalendar, mdiPencil } from '@mdi/js';

export default {
    data: () => ({
        svg: {
            calendar: mdiCalendar,
            pencil: mdiPencil
        }
    })
}
</script>