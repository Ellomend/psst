<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import * as THREE from 'three'

const container = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let cube: THREE.Mesh
let animationId: number

const init = () => {
  if (!container.value) return

  // Scene
  scene = new THREE.Scene()

  // Camera
  camera = new THREE.PerspectiveCamera(75, container.value.clientWidth / container.value.clientHeight, 0.1, 1000)
  camera.position.z = 2

  // Renderer
  renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
  container.value.appendChild(renderer.domElement)

  // Object (Icosahedron for a "crystal" look)
  const geometry = new THREE.IcosahedronGeometry(1, 0)
  const material = new THREE.MeshBasicMaterial({
    color: 0x00ffff,
    wireframe: true,
    transparent: true,
    opacity: 0.8
  })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // Animation
  const animate = () => {
    animationId = requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}

const onResize = () => {
  if (!container.value || !camera || !renderer) return
  camera.aspect = container.value.clientWidth / container.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(container.value.clientWidth, container.value.clientHeight)
}

onMounted(() => {
  init()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  cancelAnimationFrame(animationId)
  window.removeEventListener('resize', onResize)
  if (renderer) {
    renderer.dispose()
  }
})
</script>

<template>
  <div class="card bg-base-100 shadow-xl border border-info/30 h-full">
    <div class="card-body relative overflow-hidden">
      <h2 class="card-title text-info z-10">Artifact Analysis</h2>
      <div ref="container" class="absolute inset-0 w-full h-full"></div>
      <div class="absolute bottom-4 right-4 z-10 text-xs font-mono text-info opacity-70">
        SCANNING...
      </div>
    </div>
  </div>
</template>
