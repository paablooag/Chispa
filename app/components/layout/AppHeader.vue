<script setup lang="ts">
const info = useBusinessInfo()
const open = ref(false)
const route = useRoute()

const links = [
  { to: '/', label: 'Inicio' },
  { to: '/sobre-nosotros', label: 'Sobre nosotros' },
  { to: '/cumpleanos', label: 'Cumpleaños' },
  { to: '/talleres', label: 'Talleres' },
  { to: '/galeria', label: 'Galería' },
]

watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-tinta/10 bg-crema-100/95 backdrop-blur">
    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
      <NuxtLink to="/" class="flex items-center gap-2.5 shrink-0">
        <SparkMark class="h-8 w-8 text-arcilla" />
        <span class="font-display text-2xl leading-none text-tinta">Chispa</span>
      </NuxtLink>

      <nav class="hidden items-center gap-7 lg:flex">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="text-[15px] text-tinta-light transition hover:text-arcilla-600"
          active-class="!text-arcilla-600 subrayado-marcador"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-3 lg:flex">
        <a
          :href="info.telefonoHref"
          class="flex items-center gap-1.5 text-[15px] text-tinta-light transition hover:text-arcilla-600"
        >
          <IconGlyph name="phone" class="h-4 w-4" />
          {{ info.telefono }}
        </a>
        <a
          :href="info.whatsappHref"
          target="_blank"
          rel="noopener"
          class="inline-flex items-center gap-1.5 rounded-full bg-tinta px-4 py-2 text-sm font-medium text-crema-100 transition hover:-rotate-1 hover:bg-arcilla-600"
        >
          <IconGlyph name="chat" class="h-4 w-4" />
          Reserva por WhatsApp
        </a>
      </div>

      <button
        type="button"
        class="flex h-10 w-10 items-center justify-center rounded-full border border-tinta/15 text-tinta lg:hidden"
        :aria-expanded="open"
        aria-label="Abrir menú"
        @click="open = !open"
      >
        <IconGlyph :name="open ? 'close' : 'menu'" class="h-5 w-5" />
      </button>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div v-if="open" class="border-t border-tinta/10 bg-crema-100 px-5 py-4 lg:hidden">
        <nav class="flex flex-col gap-1">
          <NuxtLink
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            class="rounded-lg px-3 py-2.5 text-base text-tinta-light hover:bg-crema-300"
            active-class="!text-arcilla-600 !bg-crema-300"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>
        <div class="mt-3 flex flex-col gap-2 border-t border-tinta/10 pt-3">
          <a
            :href="info.telefonoHref"
            class="flex items-center gap-2 rounded-lg px-3 py-2.5 text-tinta-light"
          >
            <IconGlyph name="phone" class="h-4 w-4" />
            {{ info.telefono }}
          </a>
          <a
            :href="info.whatsappHref"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center justify-center gap-1.5 rounded-full bg-tinta px-4 py-3 text-sm font-medium text-crema-100"
          >
            <IconGlyph name="chat" class="h-4 w-4" />
            Reserva por WhatsApp
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
