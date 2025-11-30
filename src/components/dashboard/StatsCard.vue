<script setup lang="ts">
defineProps<{
  title: string
  value: string
  trend?: string
  trendUp?: boolean
  icon?: string
  color?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
}>()
</script>

<template>
  <div class="card bg-base-100 shadow-xl border border-opacity-30" :class="`border-${color || 'primary'}`">
    <div class="card-body">
      <div class="flex justify-between items-start">
        <div>
          <h2 class="card-title text-sm uppercase tracking-wider opacity-70" :class="`text-${color || 'primary'}`">
            {{ title }}
          </h2>
          <p class="text-3xl font-bold mt-2 font-mono">{{ value }}</p>
        </div>
        <div v-if="icon" class="p-2 rounded-lg bg-base-300">
          <span class="text-2xl">{{ icon }}</span>
        </div>
      </div>

      <div v-if="trend" class="mt-4 flex items-center text-xs">
        <span :class="trendUp ? 'text-success' : 'text-error'" class="mr-2 font-bold">
          {{ trendUp ? '▲' : '▼' }} {{ trend }}
        </span>
        <span class="opacity-50">vs last cycle</span>
      </div>
    </div>
  </div>
</template>
