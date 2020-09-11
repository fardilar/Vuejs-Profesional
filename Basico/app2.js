const app = new Vue({
    el : "#app",
    data: {
        saludo: "Soy ciclo de vida de vuejs"
    },
    methods:{
      destruir(){
          this.$destroy();
      }
    },
    computed: {
       
    },
    beforeCreate(){
        console.log("beforecreare");
    },
    created(){
        //al crear los metodos, observadores y eventos, pero aun no se accede al DOM 
        //Aun no se puede haceder al  'el'
        console.log("created");
    },
    beforeMount(){
        //Se ejecunta antes de insertar el DOM
        console.log("beforeMount");
    },
    mounted(){
        //Se ejecuta al insertar el DOM
        console.log("mounted");
    },
    beforeUpdate(){
        //Al detectar un cambio
        console.log("beforeUpdate");
    },
    update(){
        //Al realizar los cambios
        console.log("update");
    },
    beforeDestroy(){
        //Antes de destruir la instancia 
        console.log("beforeDestroy");
    },
    destroyed(){
        // Se destruye toda la instancia 
        console.log("destroyed");
    }
    
})