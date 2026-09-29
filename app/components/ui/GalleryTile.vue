<script setup lang="ts">
import type { IconName } from './IconGlyph.vue'

withDefaults(
  defineProps<{
    label: string
    icon: IconName
    tono?: 'arcilla' | 'salvia' | 'mostaza' | 'tinta'
    girar?: 'izq' | 'der' | ''
  }>(),
  {
    tono: 'arcilla',
    girar: '',
  },
)

const tonos: Record<string, string> = {
  arcilla: 'bg-arcilla-50 text-arcilla-600',
  salvia: 'bg-salvia-100 text-salvia-600',
  mostaza: 'bg-mostaza/15 text-mostaza-600',
  tinta: 'bg-tinta text-crema-300',
}

const giros: Record<string, string> = {
  izq: 'rotar-leve',
  der: 'rotar-leve-inv',
  '': '',
}
</script>

<template>
  <figure
    class="bg-textura relative flex aspect-[4/5] flex-col items-center justify-center gap-3 rounded-2xl border border-tinta/10 p-4 text-center shadow-card transition hover:-translate-y-1"
    :class="[tonos[tono], giros[girar]]"
  >
    <IconGlyph :name="icon" class="h-8 w-8 opacity-70" />
    <figcaption class="font-hand text-lg leading-tight opacity-80">{{ label }}</figcaption>
  </figure>
</template>
