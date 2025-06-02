<template>
  <main class="main">
    <ProductoDetalleInfo v-if="producto" :producto="producto" />
    <ProductoComentarios />
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import ProductoDetalleInfo from '@/components/detalle/ProductoImgDetalle.vue';
import ProductoComentarios from '@/components/detalle/ProductoComentarios.vue';

const producto = ref(null);
const route = useRoute();

onMounted(async () => {
  const id = route.params.id || 1;
  const response = await fetch(`https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/${id}`);
  producto.value = await response.json();
});
</script>

<style scoped>
.main {
  background-color: var(--ocaso-medio-color);
  padding: 20px;
}
</style>
