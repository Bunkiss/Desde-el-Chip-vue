<template>
  <footer class="footer">
    <div class="footer-main">
      <div class="footer-left">
        <div class="footer-logo">Desde el Chip</div>
        <a href="#">Soporte</a>
        <a href="#">Términos y condiciones</a>
      </div>
      <div class="footer-redes">
        <i class="fab fa-instagram" id="igIcon"></i>
        <i class="fab fa-x-twitter" id="twitterIcon"></i>
      </div>
    </div>
    <div class="footer-bottom">
      © 2025 Desde el Chip. Todos los derechos reservados.
    </div>
  </footer>
</template>

<script setup>

</script>

<style scoped>
.footer {
  grid-area: footer;
  background-color: var(--ocaso-oscuro-color);
  color: var(--ocaso-claro-1-color);
}

.footer-main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 20px;
}

.footer-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.footer-logo {
  font-weight: bold;
  font-size: 20px;
}

.footer-left a {
  color: var(--ocaso-claro-1-color);
  text-decoration: none;
}

.footer-left a:hover {
  text-decoration: underline;
}

.footer-redes i {
  margin-left: 10px;
  cursor: pointer;
}

.footer-bottom {
  background-color: var(--oscuro-text-color);
  text-align: center;
  font-size: 12px;
  padding: 5px;
}

#igIcon, #twitterIcon {
  padding-left: 10px;
  cursor: pointer;
}

</style>
