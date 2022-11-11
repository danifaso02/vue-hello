"use strict";

// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.

// Dichiarazione variabile
const { createApp } = Vue

// funzione createApp
createApp({
    data() {
        return {
            message: 'Hello boys'
        }
    }
}).mount('#title')