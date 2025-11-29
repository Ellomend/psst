<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="hero min-h-full bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <h1 class="text-5xl font-bold">PSST 3D</h1>
        <p class="py-6">
          Experience the power of Three.js and Vue 3. Explore our interactive demos below.
        </p>
        <div class="flex flex-col gap-4 sm:flex-row justify-center">
          <RouterLink to="/three" class="btn btn-primary">Cube Demo</RouterLink>
          <RouterLink to="/particles" class="btn btn-secondary">Particles</RouterLink>
          <RouterLink to="/interaction" class="btn btn-accent">Interaction</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
