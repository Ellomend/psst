<template>
  <div class="drawing-container">
    <v-stage ref="stage" :config="stageSize" @dragstart="handleDragstart" @dragend="handleDragend">
      <v-layer ref="layer">
        <v-star
          v-for="item in list"
          :key="item.id"
          :config="{
            x: item.x,
            y: item.y,
            rotation: item.rotation,
            id: item.id,
            numPoints: 5,
            innerRadius: 30,
            outerRadius: 50,
            fill: '#89b717',
            opacity: 0.8,
            draggable: true,
            scaleX: dragItemId === item.id ? item.scale * 1.2 : item.scale,
            scaleY: dragItemId === item.id ? item.scale * 1.2 : item.scale,
            shadowColor: 'black',
            shadowBlur: 10,
            shadowOffsetX: dragItemId === item.id ? 15 : 5,
            shadowOffsetY: dragItemId === item.id ? 15 : 5,
            shadowOpacity: 0.6,
          }"
        />
        <v-rect v-for="item in items" :key="item.id" :config="item" />
      </v-layer>
    </v-stage>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { minusPercent, toKonvaCabinetWithItems, useRandomData } from '@/helpers/random.ts'
import type { Cabinet } from '@/domain-types.ts'
import type { RectConfig as KonvaRectConfig } from 'konva/lib/shapes/Rect'

const stageSize = {
  width: minusPercent(window.innerWidth, 4),
  height: minusPercent(window.innerHeight, 18),
}

const { generateRandomData } = useRandomData()

const cabinet = ref<Cabinet>(generateRandomData(stageSize.width, stageSize.height))
const items = ref<KonvaRectConfig[]>(toKonvaCabinetWithItems(cabinet.value))

const list = ref<unknown[]>([])
const dragItemId = ref(null)

const handleDragstart = (e) => {
  // save drag element:
  dragItemId.value = e.target.id()
  // move current element to the top:
  const item = list.value.find((i) => i.id === dragItemId.value)
  const index = list.value.indexOf(item)
  list.value.splice(index, 1)
  list.value.push(item)
}

const handleDragend = () => {
  dragItemId.value = null
}

onMounted(() => {
  for (let n = 0; n < 30; n++) {
    list.value.push({
      id: Math.round(Math.random() * 10000).toString(),
      x: Math.random() * stageSize.width,
      y: Math.random() * stageSize.height,
      rotation: Math.random() * 180,
      scale: Math.random(),
    })
  }
})
</script>
