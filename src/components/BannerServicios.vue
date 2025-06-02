<template>
  <section class="servicios">
    <div class="servicio">
      <i class="fas fa-credit-card"></i>
      <span>Hasta 18 cuotas</span>
    </div>
    <div class="servicio">
      <i class="fas fa-truck"></i>
      <span>Envíos a todo el país</span>
    </div>
    <div class="servicio">
      <i class="fas fa-percent"></i>
      <span>Ofertas diarias</span>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
.servicios {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-top: 80px;
  margin-bottom: 100px;
  background-color: var(--ocaso-medio-color);
  width: 100%;
  border-radius: 5px;
}

.servicio {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  color: var(--oscuro-text-color);
  font-weight: bold;
}

.servicio i {
  font-size: 1.5rem;
  color: var(--oscuro-text-color);
}
</style>
