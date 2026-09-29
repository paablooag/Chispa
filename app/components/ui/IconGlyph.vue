<script setup lang="ts">
export type IconName =
  | 'phone'
  | 'chat'
  | 'instagram'
  | 'tiktok'
  | 'menu'
  | 'close'
  | 'pin'
  | 'clock'
  | 'arrow'
  | 'check'
  | 'brush'
  | 'craft'
  | 'cake'
  | 'mail'
  | 'users'
  | 'shield'

withDefaults(
  defineProps<{
    name: IconName
    class?: string
  }>(),
  {
    class: 'h-5 w-5',
  },
)
</script>

<template>
  <svg
    :class="$props.class"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="1.6"
    stroke-linecap="round"
    stroke-linejoin="round"
    aria-hidden="true"
  >
    <path
      v-if="name === 'phone'"
      d="M7 3.5h2.6l1.4 3.6-1.8 1.6a11.8 11.8 0 0 0 5.6 5.6l1.6-1.8 3.6 1.4V17a1.5 1.5 0 0 1-1.6 1.5C12 17.8 6.2 12 5.5 6.1A1.5 1.5 0 0 1 7 3.5Z"
    />
    <template v-else-if="name === 'chat'">
      <path d="M4 12.3a8 8 0 1 1 3.4 6.5L4 20l1.2-3.7A7.9 7.9 0 0 1 4 12.3Z" />
      <path d="M9 11.8h6M9 14.6h4" />
    </template>
    <template v-else-if="name === 'instagram'">
      <rect x="3.5" y="3.5" width="17" height="17" rx="5.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" stroke="none" />
    </template>
    <template v-else-if="name === 'tiktok'">
      <path d="M13.8 3.8v10.6a3.3 3.3 0 1 1-2.2-3.1" />
      <path d="M13.8 3.8c.3 2 1.7 3.5 3.7 3.8" />
    </template>
    <template v-else-if="name === 'menu'">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </template>
    <template v-else-if="name === 'close'">
      <path d="M6 6l12 12M18 6L6 18" />
    </template>
    <template v-else-if="name === 'pin'">
      <path d="M12 21S5.5 14.7 5.5 9.9a6.5 6.5 0 1 1 13 0C18.5 14.7 12 21 12 21Z" />
      <circle cx="12" cy="9.7" r="2.2" />
    </template>
    <template v-else-if="name === 'clock'">
      <circle cx="12" cy="12" r="8.3" />
      <path d="M12 7.7V12l2.8 1.8" />
    </template>
    <path v-else-if="name === 'arrow'" d="M5 12h14M13 6l6 6-6 6" />
    <path v-else-if="name === 'check'" d="M5 12.5l4.5 4.5L19 7" />
    <template v-else-if="name === 'brush'">
      <path
        d="M15 3.8 20.2 9 11.6 17.6a3.4 3.4 0 0 1-4.8 0L5.6 16.4a1 1 0 0 1 0-1.4L15 3.8Z"
      />
      <path d="M5 19c.5-1.3 1.6-2 3-1.8" />
    </template>
    <template v-else-if="name === 'craft'">
      <circle cx="6.2" cy="6" r="2" />
      <circle cx="6.2" cy="18" r="2" />
      <path d="M7.8 7.3 19 18M7.8 16.7 19 6" />
    </template>
    <template v-else-if="name === 'cake'">
      <path d="M4.5 20.5v-7a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v7" />
      <path d="M4.5 16.5c1.4 1 2.6 1 4 0s2.6-1 4 0 2.6 1 4 0 2.6-1 3.5 0" />
      <path d="M9 11.5V8M12 11.5V7M15 11.5V8" />
      <path d="M12 4.3c-.9.9-.9 1.7 0 2.4.9-.7.9-1.5 0-2.4Z" />
    </template>
    <template v-else-if="name === 'mail'">
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
      <path d="M4 6.5l8 6.2 8-6.2" />
    </template>
    <template v-else-if="name === 'users'">
      <circle cx="9" cy="8.3" r="3" />
      <path d="M3.5 19c.8-3 2.9-4.5 5.5-4.5s4.7 1.5 5.5 4.5" />
      <path d="M15.5 5.3a3 3 0 0 1 0 5.9" />
      <path d="M15 14.7c2 .3 3.6 1.8 4.2 4.3" />
    </template>
    <template v-else-if="name === 'shield'">
      <path d="M12 3.5 19 6.3v5.1c0 4.6-3 7.4-7 9.1-4-1.7-7-4.5-7-9.1V6.3L12 3.5Z" />
      <path d="M9.2 12.2l1.9 1.9 3.7-3.9" />
    </template>
  </svg>
</template>
