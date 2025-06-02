<template>
  <section class="catalogo">
    <Categorias />
    <ProductosGrid :productos="productosPaginados"/>
    <Paginacion 
      :paginaActual="paginaActual"
      :totalPaginas="totalPaginas"
      @cambiarPagina="cambiarPagina"
    />
  </section>
</template>

<script setup>
import Categorias from './Catalogo/Categorias.vue';
import ProductosGrid from './Catalogo/ProductosGrid.vue';
import Paginacion from './Catalogo/Paginacion.vue';
import { ref, computed, onMounted } from 'vue';
import { useNotebooks } from '@/composables/useNotebooks';
import { useNotebooksStore } from '@/stores/notebooksStore'

const notebooksStore = useNotebooksStore();

onMounted(()=> {
    useNotebooks();
});

const paginaActual = ref(1);
const porPagina = 8;


const productosPaginados = computed(() => {
  const inicio = (paginaActual.value - 1) * porPagina;
  return notebooksStore.data.slice(inicio, inicio + porPagina);
});

const totalPaginas = computed(() =>
  Math.ceil(notebooksStore.data.length / porPagina)
);


function cambiarPagina(pagina) {
  paginaActual.value = pagina;
}
</script>

<style scoped>
.catalogo {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--ocaso-claro-color);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.438);
  max-width: 60vw;
  margin: 0 auto 50px auto;
  width: 100%;
  box-sizing: border-box;
  gap: 20px;
}
</style>
