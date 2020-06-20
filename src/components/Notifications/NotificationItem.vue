<template>
    <v-list-item @click="viewNotification" :class="message.read ? 'white' : 'background'">

        <v-list-item-action>
            <v-btn :class="message.read ? 'grey--text text--accent-3' : 'red--text text--darken-1'" icon>
            <v-icon v-show="message.tipo === 'like'" >mdi-heart</v-icon>
            <v-icon v-show="message.tipo === 'comment'">mdi-comment-text</v-icon>
            </v-btn>
        </v-list-item-action>

        <v-list-item-content>
            <v-list-item-title :class="message.read ? '' : 'text-secundario'">
                {{message.title}}&nbsp;&nbsp;
                <span v-if="message.read === false" class="cyan--text text--darken-1 caption font-weight-medium">New</span>
            </v-list-item-title>
            <v-list-item-subtitle :class="message.read ? '' : 'text-secundario'">{{message.createdAt}}</v-list-item-subtitle>
        </v-list-item-content>

    </v-list-item>
</template>

<script>
import { mdiHeart } from '@mdi/js';
import { mdiCommentText } from '@mdi/js';

export default {
    data: () => ({      
      messages: [
        {
          tipo: 'like',
          title: 'Insignia Actvista',
          lorem: 'Interactúa publicando contenido valioso para ubicarte en los mejores puesto del Ranking activista.',
          createAt: 'hoy',
          read: false
        }] 
    })
}
</script>
