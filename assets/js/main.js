/* Descrizione:
Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data. */

const { createApp } = Vue;

createApp({
    data(){
        return {
            message: "My Vue Site!",
           
            center: "text-center",
            imgAttributes: {
                src: "https://www.omeecron.com/wp-content/uploads/2022/06/vuejs.png",
                class: "img-fluid",
            }
        }
    }
}).mount("#site_header");