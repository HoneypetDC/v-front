<template>
  <div class="home">
    <i class="fas fa-robot"></i>
    <img alt="Vue logo" src="../assets/logo.png">
    <i class="fas fa-robot"></i><i class="fas fa-robot"></i>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <i class="fas fa-robot"></i>
    <HelloWorld msg="Otra Instancia"/>
    <HelloWorld msg="Y otra mas para ver"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
