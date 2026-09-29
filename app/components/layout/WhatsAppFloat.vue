<script setup lang="ts">
const info = useBusinessInfo()
</script>

<template>
  <a
    :href="info.whatsappHref"
    target="_blank"
    rel="noopener"
    aria-label="Escríbenos por WhatsApp"
    class="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-arcilla px-4 py-3 text-sm font-medium text-crema-100 shadow-soft transition hover:-translate-y-0.5 hover:bg-arcilla-600 sm:bottom-7 sm:right-7"
  >
    <IconGlyph name="chat" class="h-4 w-4" />
    <span class="hidden sm:inline">Escríbenos</span>
  </a>
</template>
