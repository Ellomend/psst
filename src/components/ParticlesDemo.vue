<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let particlesMesh: THREE.Points
let animationId: number

const initThree = () => {
  if (!containerRef.value) return

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050505)
  scene.fog = new THREE.FogExp2(0x050505, 0.002)

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    1,
    2000,
  )
  camera.position.z = 1000

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  containerRef.value.appendChild(renderer.domElement)

  // Particles
  const geometry = new THREE.BufferGeometry()
  const vertices = []

  for (let i = 0; i < 10000; i++) {
    const x = 2000 * Math.random() - 1000
    const y = 2000 * Math.random() - 1000
    const z = 2000 * Math.random() - 1000
    vertices.push(x, y, z)
  }

  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3))

  const material = new THREE.PointsMaterial({
    color: 0x88ccff,
    size: 2,
    sizeAttenuation: true,
  })

  particlesMesh = new THREE.Points(geometry, material)
  scene.add(particlesMesh)

  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  if (particlesMesh) {
    particlesMesh.rotation.x += 0.0005
    particlesMesh.rotation.y += 0.001
  }

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

const handleResize = () => {
  if (!containerRef.value || !camera || !renderer) return

  camera.aspect = containerRef.value.clientWidth / containerRef.value.clientHeight
  camera.updateProjectionMatrix()
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
}

onMounted(() => {
  initThree()
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)
  if (renderer) {
    renderer.dispose()
    if (containerRef.value && renderer.domElement) {
      containerRef.value.removeChild(renderer.domElement)
    }
  }
})
</script>

<template>
  <div class="three-container">
    <div ref="containerRef" class="canvas-container"></div>
    <div class="overlay">
      <h1 class="text-3xl font-bold text-white mb-4">Particles Demo</h1>
      <p class="text-gray-300">10,000 particles in a 3D space</p>
    </div>
  </div>
</template>

<style scoped>
.three-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
}

.canvas-container {
  width: 100%;
  height: 100%;
}

.overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 8px;
}
</style>
