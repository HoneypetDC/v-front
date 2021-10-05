<template>
  <div class="perfil">
    <h1>Perfil</h1>
    <HeroHd/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHd from '@/components/HeroHd.vue'

export default {
  name: 'Perfil',
  components: {
    HeroHd
  }
}
</script>