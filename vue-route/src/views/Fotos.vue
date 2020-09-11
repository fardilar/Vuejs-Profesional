<template>
    <div>
        <h1>Galeria de fotos</h1>
        <router-link :to="{name:'Fotos', params:{id: item}}" 
            v-for="(item,index) of fotos" :key="index">
            <button>Foto {{item}}</button>
        </router-link>
        <Foto/>
        <button @click="Home">Home</button>
        <button @click="Anterior">Anterior</button>
        <button @click="Siguiente">Siguiente</button>
    </div>
</template>

<script>
import Foto from "@/components/Fotografia.vue"
export default {
    components:{
        Foto
    },
    data() {
        return {
            fotos: [1,2,3]
        }
    },
    methods: {
        Home(){
            this.$router.push('/')
        },
        Anterior(){
            this.$router.go(-1)
        }, 
        Siguiente(){
            this.$router.go(1)
        }
    },
}
</script>