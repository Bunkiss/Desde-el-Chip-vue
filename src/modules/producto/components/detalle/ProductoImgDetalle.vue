<!-- src/components/detalle/ProductoDetalleInfo.vue -->
<template>
  <section class="producto-grid">
    <section class="imagenes">
      <img id="main-image" :src="mainImage" :alt="producto.title" />
      <div class="miniaturas">
        <img
          v-for="(img, index) in producto.image_urls"
          :key="index"
          class="thumb"
          :class="{ activa: mainImage === img }"
          :src="img"
          @click="mainImage = img"
          :alt="producto.title"
        />
      </div>
    </section>

    <section class="detalle-producto">
      <h1 class="titulo">{{ producto.title }}</h1>
      <h2 class="calificacion">4.5 ★</h2>
      <h3>Descripción</h3>
      <p>{{ producto.description }}</p>
      <h3>Opciones</h3>
      <ul class="opciones">
        <li v-for="(tipo, index) in producto.notebooksTypes" :key="index">
          {{ tipo.name }} - <span class="precio">${{ Number(tipo.price).toLocaleString() }}</span>
        </li>
      </ul>
      <a :href="producto.factory_url" target="_blank">Sitio web del fabricante</a>
    </section>
  </section>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const props = defineProps({
  producto: Object
});

const mainImage = ref('');

watchEffect(() => {
  if (props.producto?.image_urls?.length) {
    mainImage.value = props.producto.image_urls[0];
  }
});

</script>

<style scoped>
.producto-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 1000px;
    margin: 50px auto;
    padding: 2rem;
    background-color: var(--ocaso-claro-color);
    border-radius: 10px;
    align-items: center;
}


/* ------IMAGENES------ */

.imagenes {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    align-items: end;
    justify-content: center;
    background-color: var(--ocaso-claro-1-color);
    border-radius: 10px;
}

#main-image {
    width: 100%;
    min-width: 200px;
    max-width: 400px;
    border-radius: 5px;
    border: 1px solid #000;
    margin-bottom: 10px;
    display: block;
}

.miniaturas {
    display: flex;
    width: 100%;
    max-width: 400px;
}
.miniaturas .thumb {
    width: 33.33%;
    height: auto;
    border: 2px solid transparent;
    cursor: pointer;
    transition: border 0.2s ease;
    object-fit: cover;
}
.miniaturas .thumb:hover,
.miniaturas .thumb.activa {
    border: 2px solid #000;
}

/* ------DETALLE------ */

.detalle-producto {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    justify-content: center;
    align-items: start;
    max-width: 650px;
    background-color: var(--ocaso-claro-1-color);
    border-radius: 10px;
    color: var(--oscuro-text-color);
}

.titulo {
    font-weight: 800;
    font-size: x-large;
}

.calificacion {
    color: rgba(224, 228, 10, 0.897);
    font-weight: bold;
    text-shadow:
        -0.75px -0.75px 0 black,
        0.75px -0.75px 0 black,
        -0.75px  0.75px 0 black,
        0.75px  0.75px 0 black;
}

.precio {
    font-size: 1.5em;
    color: #47b360;
    font-weight: bold;
    text-shadow:
        -0.75px -0.75px 0 black,
        0.75px -0.75px 0 black,
        -0.75px  0.75px 0 black,
        0.75px  0.75px 0 black;
    padding-top: 5px;
    padding-bottom: 5px;
}

.opciones li {
    margin-bottom: 10px;
}

/* ------RESPONSIVE------ */

@media (max-width: 768px) {
  .producto-grid {
    grid-template-columns: 1fr;
  }

  .imagenes,
  .detalle-producto {
    align-items: center;
  }

  .detalle-producto {
    align-items: start;
  }

}
</style>
