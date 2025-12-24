<template>
  <div class="min-h-screen bg-base-200">
    <!-- Hero Section -->
    <div class="hero min-h-[60vh] bg-gradient-to-br from-primary to-secondary text-primary-content">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold mb-4">
            <span class="inline-block hover:scale-110 transition-transform">🎨</span>
            DaisyUI Demo
          </h1>
          <p class="text-lg mb-6">Explore the beautiful components of DaisyUI</p>
          <div class="flex gap-2 justify-center">
            <span class="badge badge-accent badge-lg">Modern</span>
            <span class="badge badge-success badge-lg">Beautiful</span>
            <span class="badge badge-warning badge-lg">Responsive</span>
          </div>
        </div>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12 space-y-12">
      <!-- Stats Section -->
      <div class="stats stats-vertical lg:stats-horizontal shadow w-full">
        <div class="stat">
          <div class="stat-figure text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
            </svg>
          </div>
          <div class="stat-title">Total Likes</div>
          <div class="stat-value text-primary">25.6K</div>
          <div class="stat-desc">21% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
          </div>
          <div class="stat-title">Page Views</div>
          <div class="stat-value text-secondary">2.6M</div>
          <div class="stat-desc">15% more than last month</div>
        </div>

        <div class="stat">
          <div class="stat-figure text-accent">
            <div class="avatar online">
              <div class="w-16 rounded-full">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Avatar" />
              </div>
            </div>
          </div>
          <div class="stat-value">86%</div>
          <div class="stat-title">Tasks done</div>
          <div class="stat-desc text-success">31 tasks remaining</div>
        </div>
      </div>

      <!-- Feature Cards -->
      <div>
        <h2 class="text-3xl font-bold text-center mb-8">Amazing Features</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure class="px-10 pt-10">
              <div class="rounded-xl bg-primary w-24 h-24 flex items-center justify-center text-4xl">🚀</div>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Fast Performance</h2>
              <p>Lightning-fast rendering and smooth animations</p>
              <div class="card-actions">
                <button class="btn btn-primary btn-sm">Learn More</button>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure class="px-10 pt-10">
              <div class="rounded-xl bg-secondary w-24 h-24 flex items-center justify-center text-4xl">🎨</div>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Beautiful Design</h2>
              <p>Thoughtfully crafted components that look stunning</p>
              <div class="card-actions">
                <button class="btn btn-secondary btn-sm">Explore</button>
              </div>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
            <figure class="px-10 pt-10">
              <div class="rounded-xl bg-accent w-24 h-24 flex items-center justify-center text-4xl">⚡</div>
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Easy to Use</h2>
              <p>Simple API with excellent documentation</p>
              <div class="card-actions">
                <button class="btn btn-accent btn-sm">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Tabs with Content -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Interactive Components</h2>
          <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs" role="tab" class="tab" aria-label="Buttons" checked />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h3 class="font-bold mb-4">Button Variants</h3>
              <div class="flex flex-wrap gap-2">
                <button class="btn">Default</button>
                <button class="btn btn-primary">Primary</button>
                <button class="btn btn-secondary">Secondary</button>
                <button class="btn btn-accent">Accent</button>
                <button class="btn btn-info">Info</button>
                <button class="btn btn-success">Success</button>
                <button class="btn btn-warning">Warning</button>
                <button class="btn btn-error">Error</button>
              </div>
            </div>

            <input type="radio" name="my_tabs" role="tab" class="tab" aria-label="Badges" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h3 class="font-bold mb-4">Badge Collection</h3>
              <div class="flex flex-wrap gap-2">
                <div class="badge">neutral</div>
                <div class="badge badge-primary">primary</div>
                <div class="badge badge-secondary">secondary</div>
                <div class="badge badge-accent">accent</div>
                <div class="badge badge-ghost">ghost</div>
                <div class="badge badge-info">info</div>
                <div class="badge badge-success">success</div>
                <div class="badge badge-warning">warning</div>
                <div class="badge badge-error">error</div>
              </div>
            </div>

            <input type="radio" name="my_tabs" role="tab" class="tab" aria-label="Alerts" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
              <h3 class="font-bold mb-4">Alert Messages</h3>
              <div class="space-y-2">
                <div class="alert alert-info">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-current shrink-0 w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  <span>New software update available.</span>
                </div>
                <div class="alert alert-success">
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                  <span>Your purchase has been confirmed!</span>
                </div>
                <div class="alert alert-warning">
                  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                  <span>Warning: Invalid email address!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Development Timeline</h2>
          <ul class="timeline timeline-vertical">
            <li>
              <div class="timeline-start timeline-box">Initial Setup</div>
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Component Development</div>
              <hr class="bg-primary" />
            </li>
            <li>
              <hr class="bg-primary" />
              <div class="timeline-start timeline-box">Testing & QA</div>
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-primary">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div class="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
                </svg>
              </div>
              <div class="timeline-end timeline-box">Launch (In Progress)</div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Accordion -->
      <div class="card bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title text-2xl mb-4">Frequently Asked Questions</h2>
          <div class="join join-vertical w-full">
            <div class="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion" checked />
              <div class="collapse-title text-xl font-medium">
                What is DaisyUI?
              </div>
              <div class="collapse-content">
                <p>DaisyUI is a popular component library built on top of Tailwind CSS, providing beautiful pre-designed components that you can use in your projects.</p>
              </div>
            </div>
            <div class="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion" />
              <div class="collapse-title text-xl font-medium">
                Is it free to use?
              </div>
              <div class="collapse-content">
                <p>Yes! DaisyUI is completely free and open source under the MIT license.</p>
              </div>
            </div>
            <div class="collapse collapse-arrow join-item border border-base-300">
              <input type="radio" name="my-accordion" />
              <div class="collapse-title text-xl font-medium">
                Can I customize the themes?
              </div>
              <div class="collapse-content">
                <p>Absolutely! DaisyUI comes with multiple themes and you can easily create your own custom themes using CSS variables.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer CTA -->
      <div class="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
        <div class="card-body items-center text-center">
          <h2 class="card-title text-3xl mb-2">Ready to get started?</h2>
          <p class="mb-4">Join thousands of developers using DaisyUI</p>
          <div class="card-actions">
            <button class="btn btn-neutral">Documentation</button>
            <button class="btn btn-ghost">GitHub</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// This component showcases various DaisyUI components
</script>

