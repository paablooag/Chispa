<script setup lang="ts">
defineProps<{
  label: string
  align?: 'left' | 'center'
}>()
</script>

<template>
  <p
    class="inline-flex items-center gap-2 font-hand text-2xl leading-none text-arcilla-600"
    :class="align === 'center' ? 'justify-center' : ''"
  >
    <SparkMark class="h-4 w-4 -translate-y-0.5" />
    {{ label }}
  </p>
</template>
