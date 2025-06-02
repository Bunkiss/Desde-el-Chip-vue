<template>
  <section class="banner">
    <div class="banner-imagen">
      <img :src="imagenes[indiceActual]" :alt="`Imagen ${indiceActual + 1}`" />
    </div>

    <div class="puntos-banner">
      <span
        v-for="(img, index) in imagenes"
        :key="index"
        class="punto"
        :class="{ activo: index === indiceActual }"
        @click="cambiarImagen(index)"
      ></span>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

// Array de imágenes del carrusel
const imagenes = [
  new URL('@/assets/imgs/descuentosNotebooks.png', import.meta.url).href,
  new URL('@/assets/imgs/descuentosOtoñales.jpeg', import.meta.url).href,
  new URL('@/assets/imgs/descuentos50.png', import.meta.url).href
];

const indiceActual = ref(0);

const cambiarImagen = (index) => {
  indiceActual.value = index;
};

let intervalId;

onMounted(() => {
  intervalId = setInterval(() => {
    indiceActual.value = (indiceActual.value + 1) % imagenes.length;
  }, 10000); // cada 10 segundos
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>

<style scoped>
.banner {
  position: relative;
  width: 100%;
  height: 75vh;
  overflow: hidden;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.banner-imagen {
  width: 80%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.banner-imagen img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.puntos-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 5px;
  margin-top: 10px;
}

.punto {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(253, 231, 34, 0.692);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.punto:hover,
.punto.activo {
  background-color: rgb(255, 94, 0);
}
</style>
