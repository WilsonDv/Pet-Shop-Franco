const app = Vue.createApp({

    data(){
        return {
            productos : [],
            juguetes: [],
            medicamento: [],  
        }
    },
     created()
        {       
        fetch("https://apipetshop.herokuapp.com/api/articulos")
            .then( response=>{
                console.log(response)
                return response.json()
            })
            .then(json => {
                console.log(json.response)
                this.productos = json.response
                this.guardarProductos(this.productos)
            })
            .catch(error => console.log(error.message)) 
         },
         methods: {
            guardarProductos(arrayProducto){

               this.medicamento = arrayProducto.filter(producto=> producto.tipo === "Medicamento") 
               this.juguetes = arrayProducto.filter(producto => producto.tipo === "Juguete")
            },
        },                
})

app.mount("#app")