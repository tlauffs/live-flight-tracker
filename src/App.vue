<template>
  <FlightMap/>
</template>

<script>
import FlightMap from './components/FlightMap.vue'
import "../node_modules/mapbox-gl/dist/mapbox-gl.css"

export default {
  name: 'App',
  components: {
    FlightMap
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
html,body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  box-sizing: inherit;
}
</style>
