<script setup lang="ts">
import type { IconName } from './IconGlyph.vue'

defineProps<{
  icon: IconName
  titulo: string
  texto: string
}>()
</script>

<template>
  <div class="flex gap-3.5 rounded-xl border border-tinta/10 bg-crema-100 p-4">
    <IconGlyph :name="icon" class="mt-0.5 h-5 w-5 shrink-0 text-salvia-600" />
    <div>
      <h4 class="font-medium text-tinta">{{ titulo }}</h4>
      <p class="mt-1 text-sm leading-relaxed text-tinta-light">{{ texto }}</p>
    </div>
  </div>
</template>
