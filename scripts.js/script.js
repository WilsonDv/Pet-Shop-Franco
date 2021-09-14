const app = Vue.createApp({

    data(){
        return {
            datosNombre : [],
            
        }
    },
     created()
        {       
        fetch("https://apipetshop.herokuapp.com/api/articulos")
            .then( res=>{
                console.log(res)
                return res.json()
            })
            .then(json => {
                console.log(json)
                this.datosNombre = json  
                
            })
            .catch(error => console.log(error.message))
            
         },
         
             
})

app.mount("#app")
