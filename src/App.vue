<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/dece">GSAP tuto partie 1</RouterLink>
      <RouterLink to="/doco">GSAP 2</RouterLink>
      <RouterLink to="/scroll">Scrolltrigger</RouterLink>
      <RouterLink to="/scrollProjet">ScrollProjet</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss" scoped>
body {
  position: relative;
  header {
    position: fixed;
    z-index: 1;
  }
}
</style>
