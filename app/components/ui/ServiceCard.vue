<script setup lang="ts">
import type { IconName } from './IconGlyph.vue'

defineProps<{
  icon: IconName
  title: string
  description: string
  to?: string
  cta?: string
}>()

const NuxtLinkTag = resolveComponent('NuxtLink')
</script>

<template>
  <component
    :is="to ? NuxtLinkTag : 'div'"
    :to="to"
    class="group flex flex-col rounded-2xl border border-tinta/10 bg-crema-100 p-6 shadow-card transition hover:-translate-y-1 hover:border-arcilla-300"
  >
    <div
      class="flex h-12 w-12 items-center justify-center rounded-full bg-arcilla-50 text-arcilla-600 transition group-hover:bg-arcilla group-hover:text-crema-100"
    >
      <IconGlyph :name="icon" class="h-5 w-5" />
    </div>
    <h3 class="mt-5 font-display text-xl text-tinta">{{ title }}</h3>
    <p class="mt-2 text-[15px] leading-relaxed text-tinta-light">{{ description }}</p>
    <span
      v-if="to"
      class="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-arcilla-600"
    >
      {{ cta || 'Saber más' }}
      <IconGlyph name="arrow" class="h-3.5 w-3.5 transition group-hover:translate-x-1" />
    </span>
  </component>
</template>
