<script setup lang="ts">
import TopMenu from './components/TopMenu/TopMenu.vue'
</script>

<template>
  <div>
    <TopMenu />
    <div class="flex flex-row justify-center items-center h-full border border-pink-400 p-4">
      <slot />
    </div>
  </div>
</template>
