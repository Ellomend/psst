<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()

const menuItems = [
  {
    label: 'Draw',
    to: 'draw'
  },
  {
    label: 'About',
    to: 'about'
  }
]
</script>

<template>
  <div class="navbar bg-base-100 shadow-sm">
    <div class="navbar-start">
      <RouterLink :to="{ name: 'manage' }" class="btn btn-ghost text-xl">Psst</RouterLink>
    </div>
    <div class="navbar-end">
      <ul class="menu menu-horizontal gap-1">
        <li v-for="item in menuItems" :key="item.to">
          <RouterLink
            :to="{ name: item.to }"
            class="btn btn-ghost btn-sm"
            :class="{ 'btn-active': route.name === item.to }"
          >
            {{ item.label }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
</template>
