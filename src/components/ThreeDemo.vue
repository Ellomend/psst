<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let cube: THREE.Mesh
let animationId: number

const initThree = () => {
  if (!containerRef.value) return

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0x1a1a1a)

  // Camera
  camera = new THREE.PerspectiveCamera(
    75,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    1000,
  )
  camera.position.z = 5

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  containerRef.value.appendChild(renderer.domElement)

  // Cube
  const geometry = new THREE.BoxGeometry(2, 2, 2)
  const material = new THREE.MeshPhongMaterial({
    color: 0x00ff00,
    specular: 0x555555,
    shininess: 30,
  })
  cube = new THREE.Mesh(geometry, material)
  scene.add(cube)

  // Light
  const light = new THREE.DirectionalLight(0xffffff, 3)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)

  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)

  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  if (cube) {
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
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
      <h1 class="text-3xl font-bold text-white mb-4">Three.js Demo</h1>
      <p class="text-gray-300">A simple rotating cube in Vue 3</p>
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
  pointer-events: none; /* Let clicks pass through to the canvas if needed */
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 8px;
}
</style>
