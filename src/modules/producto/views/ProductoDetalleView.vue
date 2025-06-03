<template>
  <main class="main">
    <ProductoDetalleInfo v-if="store.notebook" :producto="store.notebook" />
    <ProductoComentarios />
  </main>
</template>

<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useNotebookById } from '@/composables/useNotebookById';
import { useNotebooksStore } from '@/stores/notebooksStore';

import ProductoDetalleInfo from '@/modules/producto/components/detalle/ProductoImgDetalle.vue';
import ProductoComentarios from '@/modules/producto/components/detalle/ProductoComentarios.vue';

const store = useNotebooksStore();
const route = useRoute();

onMounted(() => {
  const id = route.params.id || 1;
  useNotebookById(id);
});
</script>

<style scoped>
.main {
  background-color: var(--ocaso-medio-color);
  padding: 20px;
}
</style>
