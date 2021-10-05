<template>
    <div>
        <h1>{{ titulo }}</h1>
        <span>{{ subTitle }}</span>
        <Card />
        <b-button variant="success" @click="exibirMensagem">Clique Aqui</b-button>

    </div>
</template>

<script>
import Card from "../components/Card" 

export default {
    name:"MaisInformacoes",
    data() {
        return{
            titulo: "Mais Informações",
            subTitle: "Leia mais"
        }
    },
    components: { Card },
    methods:{
        exibirMensagem(){
            windows.alert("Foi clicado")
        }
    }
}

</script>

<style>

</style>