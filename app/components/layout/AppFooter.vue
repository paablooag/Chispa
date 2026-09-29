<script setup lang="ts">
const info = useBusinessInfo()
const year = new Date().getFullYear()

const links = [
  { to: '/sobre-nosotros', label: 'Sobre nosotros' },
  { to: '/cumpleanos', label: 'Cumpleaños' },
  { to: '/talleres', label: 'Talleres' },
  { to: '/galeria', label: 'Galería' },
]
</script>

<template>
  <footer class="bg-tinta text-crema-100">
    <div class="mx-auto max-w-6xl px-5 py-14">
      <div class="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div class="flex items-center gap-2.5">
            <SparkMark class="h-8 w-8 text-mostaza" />
            <span class="font-display text-2xl">Chispa</span>
          </div>
          <p class="mt-3 max-w-xs text-[15px] leading-relaxed text-crema-100/70">
            Un rincón creativo en {{ info.ciudad }} para cumpleaños que no se olvidan y
            talleres de pintura y manualidades para todas las edades.
          </p>
          <div class="mt-5 flex items-center gap-3">
            <a
              :href="info.instagram.url"
              target="_blank"
              rel="noopener"
              aria-label="Instagram de Chispa"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-crema-100/20 transition hover:border-mostaza hover:text-mostaza"
            >
              <IconGlyph name="instagram" class="h-4 w-4" />
            </a>
            <a
              :href="info.tiktok.url"
              target="_blank"
              rel="noopener"
              aria-label="TikTok de Chispa"
              class="flex h-9 w-9 items-center justify-center rounded-full border border-crema-100/20 transition hover:border-mostaza hover:text-mostaza"
            >
              <IconGlyph name="tiktok" class="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <p class="font-display text-sm uppercase tracking-[0.14em] text-crema-100/50">
            Explora
          </p>
          <nav class="mt-4 flex flex-col gap-2.5">
            <NuxtLink
              v-for="link in links"
              :key="link.to"
              :to="link.to"
              class="text-[15px] text-crema-100/85 transition hover:text-mostaza"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>
        </div>

        <div>
          <p class="font-display text-sm uppercase tracking-[0.14em] text-crema-100/50">
            Visítanos
          </p>
          <ul class="mt-4 space-y-3 text-[15px] text-crema-100/85">
            <li class="flex items-start gap-2.5">
              <IconGlyph name="pin" class="mt-0.5 h-4 w-4 shrink-0 text-mostaza" />
              <span>{{ info.direccion }}</span>
            </li>
            <li class="flex items-start gap-2.5">
              <IconGlyph name="phone" class="mt-0.5 h-4 w-4 shrink-0 text-mostaza" />
              <a :href="info.telefonoHref" class="hover:text-mostaza">{{ info.telefono }}</a>
            </li>
            <li class="flex items-start gap-2.5">
              <IconGlyph name="mail" class="mt-0.5 h-4 w-4 shrink-0 text-mostaza" />
              <a :href="`mailto:${info.email}`" class="hover:text-mostaza">{{ info.email }}</a>
            </li>
            <li class="flex items-start gap-2.5">
              <IconGlyph name="clock" class="mt-0.5 h-4 w-4 shrink-0 text-mostaza" />
              <span class="flex flex-col">
                <span v-for="franja in info.horario" :key="franja.dias">
                  <strong class="font-medium text-crema-100">{{ franja.dias }}:</strong>
                  {{ franja.horas }}
                </span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col gap-3 border-t border-crema-100/15 pt-6 text-sm text-crema-100/55 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>© {{ year }} Chispa · Local creativo en {{ info.ciudad }}</p>
        <p>Reservas por teléfono, WhatsApp o pasándote por el local</p>
      </div>
    </div>
  </footer>
</template>
