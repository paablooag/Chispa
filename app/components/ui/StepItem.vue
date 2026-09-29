<script setup lang="ts">
defineProps<{
  numero: string
  titulo: string
  texto: string
}>()
</script>

<template>
  <div class="flex flex-col items-start">
    <span class="font-hand text-4xl leading-none text-mostaza-600">{{ numero }}</span>
    <h3 class="mt-2 font-display text-lg text-tinta">{{ titulo }}</h3>
    <p class="mt-1.5 text-[15px] leading-relaxed text-tinta-light">{{ texto }}</p>
  </div>
</template>
