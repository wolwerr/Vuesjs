<template>
  <div id="nav">
      <router-link class="link" to="/">Home</router-link> |
      <router-link class="link" to="/about">About</router-link> |
      <router-link class="link" to="/MaisInformacoes">Mais Informacoes</router-link>
      </div>
</template>

<script>

import Header from "../components/Header.vue"

export default {
        name:"Header"
}
</script>



<style scoped>

#nav {
  display: flex;
  justify-content: flex-end;
  padding: 15px;
  color: #2c3e50;
}

#nav a {
 font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.link{
      margin-left: 15px;
}

</style>