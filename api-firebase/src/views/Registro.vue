<template>  
  <h1 class="my-5">Registro De Usuarios</h1>
  <form @submit.prevent="procesarFormulario()">
    <input type="email" placeholder="email" class="form-control my-2" v-model.trim="email"/>
    <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass1"/>
    <input type="password" placeholder="password" class="form-control my-2" v-model.trim="pass2"/>
    <input type="submit" class="btn btn-button btn-primary" :disabled="bloquear"/>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
import Input from '../../../FormularioCrud/src/components/Input.vue'
export default {
    data() {
        return {
            email: '',
            pass1: '',
            pass2: '',
        }
    },
    components:{
        Input
       
    },
    computed: {
        bloquear(){
            if(!this.email.includes('@')){
                return true
            }
            if(this.pass1.length > 5 && this.pass1 === this.pass2){
                return false
            }
            return true
        }
    },
    methods: {
        ...mapActions(['registrarUsuario']),
        procesarFormulario(){
            this.registrarUsuario({email:this.email, password:this.pass1})
            this.pass1 = "";
            this.pass2 = "";
            this.email = "";
        }
    },
    created(){
        
    }
}
</script>
