<script setup lang="ts">
const quests = [
  { id: 'Q-1024', name: 'Retrieve the Cyber-Crystal', location: 'Neon City Ruins', status: 'In Progress', reward: '500 Credits' },
  { id: 'Q-1025', name: 'Hack the Mainframe', location: 'Arasaka Tower', status: 'Pending', reward: '1000 Credits' },
  { id: 'Q-1026', name: 'Defeat the Glitch Dragon', location: 'Digital Void', status: 'Completed', reward: 'Legendary Loot' },
  { id: 'Q-1027', name: 'Escort the AI Core', location: 'Sector 7', status: 'Failed', reward: '0 Credits' },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case 'In Progress': return 'badge-info'
    case 'Completed': return 'badge-success'
    case 'Failed': return 'badge-error'
    default: return 'badge-ghost'
  }
}
</script>

<template>
  <div class="card bg-base-100 shadow-xl border border-primary/30 overflow-hidden">
    <div class="card-body p-0">
      <div class="p-4 border-b border-base-300 flex justify-between items-center">
        <h2 class="card-title text-primary">Active Quests</h2>
        <button class="btn btn-xs btn-outline btn-primary">View All</button>
      </div>
      <div class="overflow-x-auto">
        <table class="table table-zebra w-full">
          <thead>
            <tr>
              <th>ID</th>
              <th>Quest Name</th>
              <th>Location</th>
              <th>Status</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="quest in quests" :key="quest.id" class="hover">
              <td class="font-mono text-xs opacity-70">{{ quest.id }}</td>
              <td class="font-bold">{{ quest.name }}</td>
              <td>{{ quest.location }}</td>
              <td>
                <div class="badge badge-sm" :class="getStatusColor(quest.status)">{{ quest.status }}</div>
              </td>
              <td class="text-warning font-mono">{{ quest.reward }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
