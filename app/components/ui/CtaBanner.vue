<script setup lang="ts">
withDefaults(
  defineProps<{
    titulo: string
    texto: string
  }>(),
  {},
)

const info = useBusinessInfo()
</script>

<template>
  <section class="relative overflow-hidden rounded-3xl bg-tinta px-6 py-14 text-center sm:px-14">
    <div class="bg-textura absolute inset-0"></div>
    <SparkMark class="relative mx-auto h-9 w-9 text-mostaza" />
    <h2 class="relative mt-4 font-display text-3xl text-crema-100 sm:text-4xl">
      {{ titulo }}
    </h2>
    <p class="relative mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-crema-100/75">
      {{ texto }}
    </p>
    <div class="relative mt-7 flex flex-wrap items-center justify-center gap-3">
      <a
        :href="info.whatsappHref"
        target="_blank"
        rel="noopener"
        class="inline-flex items-center gap-2 rounded-full bg-arcilla px-6 py-3 text-sm font-medium text-crema-100 transition hover:-rotate-1 hover:bg-arcilla-600"
      >
        <IconGlyph name="chat" class="h-4 w-4" />
        Escríbenos por WhatsApp
      </a>
      <a
        :href="info.telefonoHref"
        class="inline-flex items-center gap-2 rounded-full border border-crema-100/25 px-6 py-3 text-sm font-medium text-crema-100 transition hover:border-mostaza hover:text-mostaza"
      >
        <IconGlyph name="phone" class="h-4 w-4" />
        {{ info.telefono }}
      </a>
    </div>
  </section>
</template>
