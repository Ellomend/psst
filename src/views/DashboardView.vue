<script setup lang="ts">
import StatsCard from '../components/dashboard/StatsCard.vue'
import QuestTable from '../components/dashboard/QuestTable.vue'
import MagicChart from '../components/dashboard/MagicChart.vue'
import HoloModel from '../components/dashboard/HoloModel.vue'
</script>

<template>
  <div class="min-h-screen bg-base-300 p-4 font-mono text-primary-content">
    <!-- Header -->
    <header class="mb-8 border-b-2 border-primary pb-4 flex justify-between items-end">
      <div>
        <h1 class="text-4xl font-bold uppercase tracking-widest text-primary glow-text">
          Nexus Control
        </h1>
        <p class="text-sm text-secondary opacity-70">
          System Status: <span class="text-success">ONLINE</span> | Mana Flow: 98%
        </p>
      </div>
      <div class="text-right hidden sm:block">
        <p class="text-xs opacity-50">USER: ADMIN_01</p>
        <p class="text-xs opacity-50">ACCESS: LEVEL 5</p>
      </div>
    </header>

    <!-- Grid Layout -->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">

      <!-- Stats Row -->
      <StatsCard
        title="Mana Reserves"
        value="9,450 MP"
        trend="12%"
        :trendUp="true"
        color="primary"
        icon="⚡"
      />
      <StatsCard
        title="Server Load"
        value="42%"
        trend="5%"
        :trendUp="false"
        color="secondary"
        icon="🖥️"
      />
      <StatsCard
        title="Active Users"
        value="1,337"
        trend="8%"
        :trendUp="true"
        color="accent"
        icon="👤"
      />
      <StatsCard
        title="Threat Level"
        value="LOW"
        color="success"
        icon="🛡️"
      />

      <!-- Main Content Area -->

      <!-- Chart -->
      <div class="lg:col-span-2">
        <MagicChart />
      </div>

      <!-- 3D Model -->
      <div class="lg:col-span-2 h-64 lg:h-auto">
        <HoloModel />
      </div>

      <!-- Data Table -->
      <div class="lg:col-span-4">
        <QuestTable />
      </div>

    </div>
  </div>
</template>

<style scoped>
.glow-text {
  text-shadow: 0 0 10px currentColor;
}
</style>
