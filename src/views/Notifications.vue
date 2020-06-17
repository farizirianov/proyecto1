<template>
    <v-container>
        <v-row>
            <v-col cols="12" offset-sm="3" sm="6">
                <template>
                <v-card class="mx-auto" max-width="300" tile >
                    <v-subheader>NOTIFICATIONS</v-subheader>
                    <!--------------------- NOTIFICATION LIST --------------------->
                    <v-list>
                        <v-list-item>
                            There aren't any new notifications
                        </v-list-item>

                    </v-list>
                    <v-list>
                        <!------------------- NOTIFICATION ITEM ------------------>
                        <!------------------- END NOTIFICATION ITEM ------------------>
                    </v-list>
                    <!--------------------- END NOTIFICATION LIST --------------------->
                </v-card>
                </template>
            </v-col>
        </v-row>        
    </v-container>
</template>

<script>
// COMPONENTS

// VUEX
export default {
    data: () => ({
        item: 1,
        items: [
            { text: 'Real-Time', icon: 'mdi-clock' },
            { text: 'Audience', icon: 'mdi-account' },
            { text: 'Conversions', icon: 'mdi-flag' },
        ],
    })
    }
</script>
