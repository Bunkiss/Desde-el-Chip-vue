<template>
  <main class="main">
    <BannerOfertas/>
    <BannerServicios/>
    <Catalogo/>
  </main>
</template>

<script setup>
import BannerOfertas from '@/components/BannerOfertas.vue';
import BannerServicios from '@/components/BannerServicios.vue';
import Catalogo from '@/components/Catalogo.vue';
</script>

<style scoped>
.main {
  background-color: var(--ocaso-claro-color);
  padding: 20px;
}
</style>
