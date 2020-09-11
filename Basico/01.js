const app = new Vue({
    el : "#app",
    data: {
        titulo: "Hola mundo con vuejs",
        frutas:[
            {nombre:'platano', cantidad:29},
            {nombre:'manzana', cantidad:10},
            {nombre:'perra', cantidad:0}
        ],
        nuevafruta: "",
        total: 0
    },
    methods:{
        agregarFruta (){
            this.frutas.push({
                nombre:this.nuevafruta, cantidad:0
            })
            this.nuevafruta = "";
        },
    },
    computed: {
        sumarFrutas(){
            this.total = 0;
            for(fruta of this.frutas){
                this.total += fruta.cantidad
            }
            return this.total
        }
    }
})