<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="paginacion">
    <button @click="irPagina(paginaActual - 1)" :disabled="paginaActual === 1">&laquo;</button>

    <button
      v-for="pagina in totalPaginas"
      :key="pagina"
      @click="irPagina(pagina)"
      :class="{ activo: pagina === paginaActual }"
    >
      {{ pagina }}
    </button>

    <button @click="irPagina(paginaActual + 1)" :disabled="paginaActual === totalPaginas">&raquo;</button>
  </div>
</template>

<script setup>

const props = defineProps({
  totalPaginas: Number,
  paginaActual: Number
});

const emit = defineEmits(['cambiarPagina']);

const irPagina = (pagina) => {
  if (pagina >= 1 && pagina <= props.totalPaginas) {
    emit('cambiarPagina', pagina);
  }
};
</script>

<style scoped>
.paginacion {
  display: flex;
  justify-content: center;
  gap: 10px;
  max-width: 1200px;
  width: 100%;
}

.paginacion button {
  padding: 8px 12px;
  border: none;
  background-color: var(--ocaso-claro-1-color);
  color: var(--oscuro-text-color);
  border-radius: 4px;
  cursor: pointer;
}

.paginacion button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.paginacion .activo {
  background-color: var(--ocaso-claro-color);
}
</style>
