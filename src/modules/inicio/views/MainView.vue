<template>
  <main class="main">
    <BannerOfertas/>
    <BannerServicios/>
    <Catalogo/>
  </main>
</template>

<script setup>
import BannerOfertas from '@/modules/inicio/components/BannerOfertas.vue';
import BannerServicios from '@/modules/inicio/components/BannerServicios.vue';
import Catalogo from '@/modules/inicio/components/Catalogo.vue';
</script>

<style scoped>
.main {
  background-color: var(--ocaso-medio-color);
  padding: 20px;
}
</style>
