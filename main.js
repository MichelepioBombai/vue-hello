console.log("Vue ok", Vue);

const app = Vue.createApp({
    data() {
        return{
            message: "TITOLO PRINCIPALE", 
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlGsGvdl8wTwH6kXoL25-DLsor4xExuxEjsQ&usqp=CAU' 
        }

        

        
    }
});





app.mount("#root");