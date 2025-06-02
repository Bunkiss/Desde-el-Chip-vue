<template>
  <section class="productos-grid">
    <div
      v-for="producto in productos"
      :key="producto.id"
      class="producto"
    >
      <a :href="`/producto/${producto.id}`">
        <img
          :src="producto.image_urls?.[0] || 'https://via.placeholder.com/200x150'"
          :alt="producto.title"
        />
        <h3>{{ producto.title }}</h3>
        <p v-if="producto.notebooksTypes?.length">
          {{ mostrarPrecio(producto.notebooksTypes[0].price) }}
        </p>
      </a>
    </div>
  </section>
</template>

<script setup>
defineProps({ productos: Array })

const mostrarPrecio = (precio) => {
  if (!precio) return '';
  return `$${Number(precio).toLocaleString()}`;
};
</script>

<style scoped>
.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  width: 100%;
  overflow-y: auto;
  padding: 10px;
  background-color: var(--ocaso-claro-color);
  max-height: 800px;
  box-sizing: border-box;
}

.producto {
  background: white;
  padding: 15px;
  text-align: center;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.438);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}

.producto a {
  text-decoration: none;
  color: var(--oscuro-text-color);
  width: 100%;
}

.producto img {
  width: 100%;
  max-width: 200px;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
}

.producto p {
  font-size: 1.3em;
  color: #47b360;
  font-weight: bold;
  text-shadow:
    -0.75px -0.75px 0 rgba(255, 255, 255, 0.233),
    0.75px -0.75px 0 rgba(0, 0, 0, 0.233),
    -0.75px 0.75px 0 rgba(255, 255, 255, 0.233),
    0.75px 0.75px 0 rgba(255, 255, 255, 0.233);
}
</style>
