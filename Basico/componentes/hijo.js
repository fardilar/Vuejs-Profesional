Vue.component('hijo',{
    template: //html 
    `
    <div class="py-5 bg-success">
        <h2>componente hijo {{numero}}</h2>
        <h4>Nombre: {{nombre}}</h4>
    </div>
    `,
    props: ['numero'],
    data(){
        return{
            nombre: 'Juan'
        }
    },
    mounted(){
        this.$emit('nombreHijo', this.nombre)
    }
});