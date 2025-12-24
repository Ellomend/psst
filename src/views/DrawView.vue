<script setup lang="ts">

</script>

<template>
  <div class="drawer lg:drawer-open">
    <div class="drawer-content flex flex-col bg-base-100">
      <!-- Navbar -->
      <div class="navbar w-full bg-base-100 lg:hidden">
        <div class="flex-none">
          <label for="my-drawer-2" aria-label="open sidebar" class="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              class="inline-block h-6 w-6 stroke-current"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2 text-xl font-bold">PSST</div>
      </div>

      <!-- Page Content -->
      <div class="p-4 lg:p-8">
        <h1 class="text-3xl font-bold mb-6">Dashboard</h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <!-- Stat Card 1 -->
          <div class="card bg-primary text-primary-content shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Total Items</h2>
              <p class="text-4xl font-bold">1,245</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-ghost">View Inventory</button>
              </div>
            </div>
          </div>

          <!-- Stat Card 2 -->
          <div class="card bg-secondary text-secondary-content shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Low Stock</h2>
              <p class="text-4xl font-bold">12</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-ghost">Restock</button>
              </div>
            </div>
          </div>

          <!-- Stat Card 3 -->
          <div class="card bg-accent text-accent-content shadow-xl">
            <div class="card-body">
              <h2 class="card-title">Categories</h2>
              <p class="text-4xl font-bold">8</p>
              <div class="card-actions justify-end">
                <button class="btn btn-sm btn-ghost">Manage</button>
              </div>
            </div>
          </div>
        </div>

        <h2 class="text-2xl font-bold mb-4">Recent Activity</h2>
        <div class="overflow-x-auto">
          <table class="table table-zebra bg-base-200 rounded-box">
            <!-- head -->
            <thead>
              <tr>
                <th>Item</th>
                <th>Action</th>
                <th>Date</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              <!-- rows -->
              <tr>
                <td>Milk</td>
                <td><span class="badge badge-error">Removed</span></td>
                <td>Today, 10:00 AM</td>
                <td>You</td>
              </tr>
              <tr>
                <td>Eggs</td>
                <td><span class="badge badge-success">Added</span></td>
                <td>Yesterday, 5:30 PM</td>
                <td>Partner</td>
              </tr>
              <tr>
                <td>Coffee Beans</td>
                <td><span class="badge badge-warning">Updated</span></td>
                <td>Oct 20, 2:15 PM</td>
                <td>You</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>
