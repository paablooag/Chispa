<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    class?: string
  }>(),
  {
    class: 'h-8 w-8',
  },
)
</script>

<template>
  <svg
    :class="props.class"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M15 2.5c1.1 6.6 2.3 9.9 7.5 12.5-5.2 2.6-6.4 5.9-7.5 12.5-1.1-6.6-2.3-9.9-7.5-12.5 5.2-2.6 6.4-5.9 7.5-12.5Z"
      fill="currentColor"
    />
    <circle cx="25.5" cy="7" r="2.1" fill="currentColor" opacity="0.7" />
  </svg>
</template>
