<script setup lang="ts">
// Simple CSS-based bar chart for demo purposes
const data = [
  { label: '00:00', value: 40 },
  { label: '04:00', value: 65 },
  { label: '08:00', value: 85 },
  { label: '12:00', value: 55 },
  { label: '16:00', value: 95 },
  { label: '20:00', value: 70 },
  { label: '24:00', value: 60 },
]
</script>

<template>
  <div class="card bg-base-100 shadow-xl border border-accent/30">
    <div class="card-body">
      <h2 class="card-title text-accent mb-4">Magic Surges</h2>
      <div class="flex items-end justify-between h-48 gap-2">
        <div
          v-for="(item, index) in data"
          :key="index"
          class="flex flex-col items-center flex-1 group"
        >
          <div
            class="w-full bg-accent/20 rounded-t-sm relative transition-all duration-500 group-hover:bg-accent/40"
            :style="{ height: `${item.value}%` }"
          >
            <div class="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-base-300 px-2 py-1 rounded text-xs border border-accent">
              {{ item.value }}%
            </div>
          </div>
          <span class="text-xs mt-2 opacity-50 font-mono">{{ item.label }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
