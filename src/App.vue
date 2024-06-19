<script>
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App'
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink class="link" to="/">Inicio</RouterLink>
        <RouterLink class="link" to="/cuenta">Cuenta</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped></style>
