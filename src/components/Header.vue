<template>
  <header class="header">
    <div class="hamburger-menu">
      <button class="hamburger-buttom" @click.stop="toggleMenu">&#9776;</button>
      <nav class="hamburger-desplegado" v-show="menuVisible" @click.stop> <!-- v-show="menuVisible" en lugar de display: none -->
        <ul>
          <li><a href="#">Categorías</a></li> <!-- Este router a categorias hacerlo funcional -->
          <li><a href="#">Computadoras</a></li>
          <li><a href="#">Periféricos</a></li>
          <li><a href="#">Arma tu PC</a></li>
          <li><a href="#">Soporte técnico</a></li>
        </ul>
      </nav>
    </div>

    <div class="logo-menu">
      <router-link to="../views/MainView.vue" class="logo">Desde el Chip</router-link>
      <input type="text" placeholder="Buscar productos..." class="buscador" />
    </div>

    <div> <!-- serán enlaces a nuevos componentes -->
      <div id="LoginIcon" class="fas fa-user"></div> <!-- Login.vue -->
      <i id="CarritoIcon" class="fas fa-shopping-cart"></i> <!-- Carrito.vue -->
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const menuVisible = ref(false);

const toggleMenu = () => {
  menuVisible.value = !menuVisible.value;
};

const handleClickOutside = (e) => {
  const menu = document.querySelector('.hamburger-desplegado');
  const button = document.querySelector('.hamburger-buttom');

  if (menu && button && !menu.contains(e.target) && !button.contains(e.target)) {
    menuVisible.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>


<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: var(--ocaso-oscuro-color);
  color: var(--ocaso-claro-1-color);
}

.hamburger-menu {
  position: relative;
}

.hamburger-buttom {
  font-size: 24px;
  background: none;
  border: none;
  color: var(--ocaso-claro-1-color);
  cursor: pointer;
}

.hamburger-desplegado {
  position: absolute;
  top: 40px;
  background-color: var(--ocaso-oscuro-color);
  padding: 10px;
  border-radius: 5px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0,0,0,0.5);
  width: 200px;
}

.hamburger-desplegado ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.hamburger-desplegado li {
  margin-bottom: 8px;
}
.hamburger-desplegado li a {
  padding: 5px 10px;
  color: var(--ocaso-claro-1-color);
  text-decoration: none;
  font-weight: bold;
}
.hamburger-desplegado li a:hover {
  background-color: var(--ocaso-medio-color);
  border-radius: 5px;
}

.logo-menu {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo {
  font-size: 25px;
  color: var(--ocaso-claro-1-color);
  text-decoration: none;
  font-weight: bold;
}

.buscador {
  padding: 5px;
  border-radius: 5px;
  border: none;
  width: 40vw;
  height: 30px;
  background-color: var(--ocaso-claro-1-color);
  color: var(--oscuro-text-color);
}

.buscador::placeholder {
  color: var(--ocaso-medio-color);
}

#LoginIcon, #CarritoIcon {
  padding-left: 10px;
  cursor: pointer;
}
</style>