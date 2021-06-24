const app = new Vue(
    {
        el: "#app",
        data: {
            message:"ROMA 24/6 35g", //del testo gia definito!
            text:"", //del testo inserito dal utente tramite input
            img:"https://via.placeholder.com/150" //img inserito in una cartella
        },
        methods: {
            showElement: function () {
                if (this.text === 'dayron') {
                    this.img = './img/foto-cv.JPG';
                    
                } else if (this.text === 'gabriele'){
                    this.img = './img/gab.jpg';
                } else if (this.text === 'noemi'){
                    this.img = './img/noemi.jpg';
                } else if (this.text === 'tony'){
                    this.img = './img/tony.jpg';
                }
                
            }
   
        }   
    }
)

