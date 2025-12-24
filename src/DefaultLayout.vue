<script setup lang="ts">
import TopMenu from './components/TopMenu/TopMenu.vue';
</script>

<template>
  <div>
    <!-- Navbar -->
    <TopMenu />
    <!-- Page Content -->
    <div class="flex">
      <slot />
    </div>
  </div>
</template>
