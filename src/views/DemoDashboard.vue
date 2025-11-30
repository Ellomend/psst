<script setup lang="ts">
import { ref, onMounted } from 'vue'
// Reuse existing demos in compact panels
import ThreeDemo from '@/components/ThreeDemo.vue'
import ParticlesDemo from '@/components/ParticlesDemo.vue'

type Activity = { id: number; time: string; text: string }
type Task = { id: number; title: string; owner: string; status: 'open' | 'in_progress' | 'done' }

const now = ref<string>('')
const uptime = ref<string>('')
const cpu = ref<number>(37)
const mem = ref<number>(62)
const net = ref<number>(128)
const mana = ref<number>(84) // high fantasy twist

const activities = ref<Activity[]>([
  { id: 1, time: '21:10', text: 'Deployed shard v3.2 to cluster «NeonForge»' },
  { id: 2, time: '21:18', text: 'User @rune-smith escalated privileges in realm «Aether»' },
  { id: 3, time: '21:30', text: 'Job «Starlight-ETL» completed: 12,431 records' },
  { id: 4, time: '21:33', text: 'Guardian firewall deflected anomaly wave #447' },
])

const tasks = ref<Task[]>([
  { id: 101, title: 'Refactor telemetry daemon', owner: 'Nyx', status: 'in_progress' },
  { id: 102, title: 'Add runes to auth gateway', owner: 'Kael', status: 'open' },
  { id: 103, title: 'Optimize particle shader', owner: 'Rin', status: 'done' },
  { id: 104, title: 'Audit arcane secrets vault', owner: 'Vera', status: 'open' },
])

onMounted(() => {
  const start = Date.now() - 3_600_000 * 7 - 42_000 // pretend uptime
  setInterval(() => {
    const d = new Date()
    now.value = d.toLocaleString()
    const upMs = Date.now() - start
    const hrs = Math.floor(upMs / 3_600_000)
    const mins = Math.floor((upMs % 3_600_000) / 60_000)
    uptime.value = `${hrs}h ${mins}m`
    // playful metric drift
    cpu.value = Math.max(5, Math.min(97, cpu.value + (Math.random() * 10 - 5)))
    mem.value = Math.max(10, Math.min(99, mem.value + (Math.random() * 6 - 3)))
    net.value = Math.max(32, Math.min(512, net.value + (Math.random() * 40 - 20)))
    mana.value = Math.max(20, Math.min(100, mana.value + (Math.random() * 8 - 4)))
  }, 1200)
})

const statusBadge = (s: Task['status']) =>
  s === 'done' ? 'badge-success' : s === 'in_progress' ? 'badge-warning' : 'badge-neutral'
</script>

<template>
  <div class="min-h-full flex flex-col gap-6">
    <!-- Header -->
    <div class="rounded-xl p-6 bg-gradient-to-r from-purple-900/60 via-fuchsia-700/40 to-cyan-700/40 border border-fuchsia-500/30 shadow-lg shadow-fuchsia-500/20">
      <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 class="text-3xl font-extrabold tracking-tight">
            Internal Ops Nexus
            <span class="ml-2 text-base badge badge-secondary align-middle">PoC</span>
          </h1>
          <p class="opacity-80">Cyberpunk x High‑Fantasy admin dashboard demo</p>
        </div>
        <div class="flex items-center gap-2">
          <button class="btn btn-sm btn-primary">Deploy</button>
          <button class="btn btn-sm btn-accent">Summon Report</button>
          <button class="btn btn-sm btn-ghost">Settings</button>
        </div>
      </div>
      <div class="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div class="stat bg-base-200/40 rounded-xl">
          <div class="stat-title">Local Time</div>
          <div class="stat-value text-cyan-300 text-xl">{{ now }}</div>
          <div class="stat-desc">Realm «Aether-01»</div>
        </div>
        <div class="stat bg-base-200/40 rounded-xl">
          <div class="stat-title">Uptime</div>
          <div class="stat-value text-fuchsia-300">{{ uptime }}</div>
          <div class="stat-desc">Core shard</div>
        </div>
        <div class="stat bg-base-200/40 rounded-xl">
          <div class="stat-title">CPU Load</div>
          <div class="stat-value">{{ cpu.toFixed(0) }}%</div>
          <progress class="progress progress-secondary mt-2" :value="cpu" max="100" />
        </div>
        <div class="stat bg-base-200/40 rounded-xl">
          <div class="stat-title">Mana Reservoir</div>
          <div class="stat-value text-violet-300">{{ mana.toFixed(0) }}%</div>
          <progress class="progress progress-primary mt-2" :value="mana" max="100" />
        </div>
      </div>
    </div>

    <!-- Main grid -->
    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
      <!-- Left column: stats + charts -->
      <div class="space-y-6 xl:col-span-2">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div class="card bg-base-200/60 border border-cyan-500/20">
            <div class="card-body">
              <h3 class="card-title text-cyan-300">Memory</h3>
              <p class="opacity-80">{{ mem.toFixed(0) }}% used</p>
              <progress class="progress progress-info" :value="mem" max="100" />
            </div>
          </div>
          <div class="card bg-base-200/60 border border-fuchsia-500/20">
            <div class="card-body">
              <h3 class="card-title text-fuchsia-300">Throughput</h3>
              <p class="opacity-80">{{ net.toFixed(0) }} MB/s</p>
              <div class="flex gap-2">
                <div class="badge badge-outline">ingress</div>
                <div class="badge badge-outline">egress</div>
              </div>
            </div>
          </div>
          <div class="card bg-base-200/60 border border-violet-500/20">
            <div class="card-body">
              <h3 class="card-title text-violet-300">Arcane Shield</h3>
              <p class="opacity-80">Integrity nominal</p>
              <div class="radial-progress text-primary" :style="{ '--value': 92 }" role="progressbar">
                92%
              </div>
            </div>
          </div>
        </div>

        <!-- Embedded visual panels -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div class="card bg-base-200/60 border border-cyan-500/20 overflow-hidden">
            <div class="card-body pb-2">
              <h3 class="card-title">Constellation Particles</h3>
            </div>
            <div class="h-64">
              <!-- Particles demo expects to fill its parent -->
              <ParticlesDemo />
            </div>
          </div>
          <div class="card bg-base-200/60 border border-fuchsia-500/20 overflow-hidden">
            <div class="card-body pb-2">
              <h3 class="card-title">Runic Cube</h3>
            </div>
            <div class="h-64">
              <ThreeDemo />
            </div>
          </div>
        </div>

        <!-- Tasks table -->
        <div class="card bg-base-200/60 border border-base-300/30">
          <div class="card-body">
            <h3 class="card-title">Tasks</h3>
            <div class="overflow-x-auto">
              <table class="table table-zebra">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Owner</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="t in tasks" :key="t.id">
                    <td>#{{ t.id }}</td>
                    <td>{{ t.title }}</td>
                    <td>{{ t.owner }}</td>
                    <td>
                      <div class="badge" :class="statusBadge(t.status)">{{ t.status }}</div>
                    </td>
                    <td class="text-right">
                      <button class="btn btn-xs btn-ghost">Open</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column: activity + quick actions -->
      <div class="space-y-6">
        <div class="card bg-base-200/60 border border-base-300/30">
          <div class="card-body">
            <h3 class="card-title">Activity</h3>
            <ul class="timeline timeline-vertical">
              <li v-for="a in activities" :key="a.id">
                <div class="timeline-start text-xs opacity-70">{{ a.time }}</div>
                <div class="timeline-middle">
                  <span class="badge badge-secondary"></span>
                </div>
                <div class="timeline-end mb-4">{{ a.text }}</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="card bg-base-200/60 border border-cyan-500/20">
          <div class="card-body">
            <h3 class="card-title">Command Palette</h3>
            <div class="join w-full">
              <input class="input input-bordered join-item w-full" placeholder="Type a command, e.g. /deploy aether" />
              <button class="btn btn-primary join-item">Run</button>
            </div>
            <div class="flex gap-2 flex-wrap mt-2">
              <div class="badge badge-outline">/status</div>
              <div class="badge badge-outline">/heal</div>
              <div class="badge badge-outline">/forge</div>
              <div class="badge badge-outline">/scry</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.radial-progress {
  --size: 3rem;
}
</style>
