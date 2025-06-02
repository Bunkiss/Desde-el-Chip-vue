<template>
  <div class="categorias-wrapper">
    <button class="categorias-flecha flecha-izq" @click="scrollIzquierda">&lt;</button>

    <div class="categorias-scroll-limitada" >
      <div class="contenedor-categorias" ref="scrollContainer">
        <button class="categoria" v-for="(cat, index) in categorias" :key="index">
          {{ cat }}
        </button>
      </div>
    </div>

    <button class="categorias-flecha flecha-der" @click="scrollDerecha">&gt;</button>
  </div>
</template>
<!-- --------------------------------------ERROR EN SCROLL-------------------------------------- -->
<script setup>
import { ref } from 'vue';

const scrollContainer = ref(null);

const categorias = [
  'Ofertas',
  'Notebooks',
  'PCs armadas',
  'Procesadores',
  'Motherboards',
  'Placas de video',
  'Memorias RAM',
  'Almacenamiento',
  'Fuentes',
  'Gabinetes',
  'Auriculares',
  'Monitores'
];

const desplazamiento = 200;

function scrollIzquierda() {
  scrollContainer.value.scrollBy({ left: -desplazamiento, behavior: 'smooth' });
}

function scrollDerecha() {
  scrollContainer.value.scrollBy({ left: desplazamiento, behavior: 'smooth' });
}
</script>

<style scoped>
.categorias-wrapper {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  box-sizing: border-box;
}

.categorias-scroll-limitada {
  overflow: hidden;
  flex-grow: 1;
}

.contenedor-categorias {
  display: flex;
  flex-wrap: nowrap;
  gap: 10px;
  scroll-behavior: smooth;
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 10+ */
}

.contenedor-categorias::-webkit-scrollbar {
  display: none; /* Chrome/Safari */
}

.categoria {
  all: unset;
  display: inline-block;
  padding: 8px 16px;
  font-size: 1rem;
  background-color: var(--ocaso-claro-1-color);
  color: var(--oscuro-text-color);
  border-radius: 6px;
  font-weight: bold;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.categoria:hover {
  background-color: var(--ocaso-claro-color);
}

.categorias-flecha {
  all: unset;
  width: 50px;
  height: 40px;
  font-size: 1.2rem;
  background-color: var(--ocaso-claro-1-color);
  color: var(--oscuro-text-color);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.categorias-flecha:hover {
  background-color: var(--ocaso-claro-color);
}
</style>
