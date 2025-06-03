<template>
  <section class="comentarios">
    <h2>Comentarios</h2>
    <div class="comentario-box" v-for="(comentario, index) in comentarios" :key="index">
      <p><strong>{{ comentario.nombre }}:</strong></p>
      <p>{{ comentario.texto }} ★★★★★</p>
    </div>
    <div class="comentario-form">
      <h3>Califique el producto:</h3>
      <form @submit.prevent="enviarComentario">
        <label>
          Calificación:
          <select v-model="nuevoComentario.calificacion">
            <option v-for="n in 5" :key="n" :value="n">{{ n }} Estrella{{ n > 1 ? 's' : '' }}</option>
          </select>
        </label>
        <label>
          Nombre:
          <input v-model="nuevoComentario.nombre" type="text" />
        </label>
        <label>
          <textarea v-model="nuevoComentario.texto" placeholder="Escribe tu comentario aquí..." rows="4"></textarea>
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue';

const comentarios = ref([
  { nombre: 'Juan Carlos', texto: 'Excelente producto!' },
  { nombre: 'Sofia', texto: 'Buena calidad.' }
]);

const nuevoComentario = ref({
  calificacion: 5,
  nombre: '',
  texto: ''
});

function enviarComentario() {
  if (nuevoComentario.value.nombre && nuevoComentario.value.texto) {
    comentarios.value.push({ ...nuevoComentario.value });
    nuevoComentario.value.nombre = '';
    nuevoComentario.value.texto = '';
    nuevoComentario.value.calificacion = 5;
  }
}
</script>

<style scoped>
.comentarios {
    grid-area: comentarios;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--ocaso-medio-color);
}

.comentario-box {
    margin-top: 30px;
    width: 100%;
    max-width: 1000px;
    border: 1px solid var(--ocaso-oscuro-color);
    border-radius: 10px;
    padding: 10px;
    background: var(--ocaso-claro-color);
}

.comentario-form {
    border: 1px solid var(--ocaso-oscuro-color);
    border-radius: 10px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 1000px;
    padding: 10px;
    background-color: var(--ocaso-claro-color);
}

textarea {
    width: 100%;
    height: 150px;
    resize: none;
    padding: 10px;
    font-size: 1rem;
    border-radius: 10px;
}

#select-calificacion, #input-name {
    height: 25px;
    font-size: 1rem;
    border-radius: 10px;
}

#input-enviar {
    height: 30px;
    width: 80px;
    font-size: 1rem;
    border-radius: 5px;
}
</style>
