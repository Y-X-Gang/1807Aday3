<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
html,body,#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
