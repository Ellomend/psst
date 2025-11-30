<script setup lang="ts">
import { onMounted, onBeforeUnmount, ref } from 'vue'
import * as THREE from 'three'

const containerRef = ref<HTMLDivElement | null>(null)
let scene: THREE.Scene
let camera: THREE.PerspectiveCamera
let renderer: THREE.WebGLRenderer
let raycaster: THREE.Raycaster
let pointer: THREE.Vector2
let animationId: number
const cubes: THREE.Mesh[] = []

const initThree = () => {
  if (!containerRef.value) return

  // Scene
  scene = new THREE.Scene()
  scene.background = new THREE.Color(0xf0f0f0)

  // Camera
  camera = new THREE.PerspectiveCamera(
    70,
    containerRef.value.clientWidth / containerRef.value.clientHeight,
    0.1,
    100,
  )
  camera.position.z = 5

  // Renderer
  renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(containerRef.value.clientWidth, containerRef.value.clientHeight)
  containerRef.value.appendChild(renderer.domElement)

  // Raycaster
  raycaster = new THREE.Raycaster()
  pointer = new THREE.Vector2()

  // Lights
  const light = new THREE.DirectionalLight(0xffffff, 3)
  light.position.set(1, 1, 1).normalize()
  scene.add(light)

  const ambientLight = new THREE.AmbientLight(0x404040)
  scene.add(ambientLight)

  // Cubes
  const geometry = new THREE.BoxGeometry(0.5, 0.5, 0.5)

  for (let i = 0; i < 20; i++) {
    const object = new THREE.Mesh(
      geometry,
      new THREE.MeshLambertMaterial({ color: Math.random() * 0xffffff }),
    )

    object.position.x = Math.random() * 4 - 2
    object.position.y = Math.random() * 4 - 2
    object.position.z = Math.random() * 4 - 2

    object.rotation.x = Math.random() * 2 * Math.PI
    object.rotation.y = Math.random() * 2 * Math.PI
    object.rotation.z = Math.random() * 2 * Math.PI

    scene.add(object)
    cubes.push(object)
  }

  animate()
}

const animate = () => {
  animationId = requestAnimationFrame(animate)

  cubes.forEach((cube) => {
    cube.rotation.x += 0.005
    cube.rotation.y += 0.01
  })

  if (renderer && scene && camera) {
    renderer.render(scene, camera)
  }
}

const onPointerMove = (event: MouseEvent) => {
  if (!containerRef.value) return

  // Calculate pointer position in normalized device coordinates (-1 to +1) for both components
  const rect = containerRef.value.getBoundingClientRect()
  pointer.x = ((event.clientX - rect.left) / containerRef.value.clientWidth) * 2 - 1
  pointer.y = -((event.clientY - rect.top) / containerRef.value.clientHeight) * 2 + 1
}

const onClick = () => {
  if (!camera || !scene) return

  raycaster.setFromCamera(pointer, camera)
  const intersects = raycaster.intersectObjects(scene.children)

  if (intersects.length > 0) {
    const firstIntersect = intersects[0]
    if (firstIntersect) {
      const object = firstIntersect.object as THREE.Mesh
      // Don't change color of non-mesh objects (like lights helper if any)
      if (object.isMesh) {
        ;(object.material as THREE.MeshLambertMaterial).color.setHex(Math.random() * 0xffffff)
      }
    }
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
  if (containerRef.value) {
    containerRef.value.addEventListener('mousemove', onPointerMove)
    containerRef.value.addEventListener('click', onClick)
  }
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
  if (containerRef.value) {
    containerRef.value.removeEventListener('mousemove', onPointerMove)
    containerRef.value.removeEventListener('click', onClick)
  }
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
      <h1 class="text-3xl font-bold text-gray-800 mb-4">Interaction Demo</h1>
      <p class="text-gray-600">Click on cubes to change their color</p>
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
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 20px;
  left: 20px;
  pointer-events: none;
  background: rgba(255, 255, 255, 0.8);
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
