<template>
  <div class="home">
      <div v-for="time in campeonatoBR" :key="time.index">
        <CardTime :time="time" />
      </div>
      <h1>teste</h1>
  </div>
</template>


<script>
import CardTime from "../components/CardTime.vue"
export default {
  name: 'Inicio',
  components: {
    CardTime
  },
  data(){
    return{
      campeonatoBR:[{
          nome:"Sport Recife",
          local: "Recife",
          titulo: "Time Participante"
          },
          {
          nome:"São Paulo",
          local: "São Paulo",
          titulo: "Time Participante"
          },
          {
          nome:"Santos",
          local: "São Paulo",
          titulo: "Time Participante"
          },
          {
          nome:"Atletico MG",
          local: "Belo Horizonte",
          titulo: "Time Participante"
          },
          {
          nome:"Grêmio",
          local: "Porto Alegre",
          titulo: "Time Participante"
          }
          ,] 
    }
  }
  
}
</script>


<style >

.home{
  display: flex;
  flex-wrap: wrap;
}

</style>
