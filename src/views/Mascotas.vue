<template>
  <div class="mascotas">
    <div class="bg-foto-mascotas">
      <HeroHd title="Mascotas Publicadas"/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeroHd from '@/components/HeroHd.vue'

export default {
  name: 'Mascotas',
  components: {
    HeroHd
  }
}
</script>

<style scoped>
.bg-foto-mascotas {
    background-image: url(../assets/img/bg-mascotas.jpg);
    background-position: center;
    background-size: cover;
}

</style>