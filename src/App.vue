<template>
  <div id="app">
    <NavBar />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Jelena's Blog App"/>
    <router-view />
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar'


export default {
  name: 'app',
  components: {
    HelloWorld,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
