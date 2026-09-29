<script setup lang="ts">
const info = useBusinessInfo()

useSeoMeta({
  title: 'Galería · Chispa, local creativo en Granada',
  description:
    'Un vistazo a los cumpleaños infantiles y talleres de pintura y manualidades que hacemos en Chispa, nuestro local creativo en Granada.',
})

const tiles = [
  { label: 'Cumple de pintura', icon: 'cake' as const, tono: 'arcilla' as const, girar: 'izq' as const },
  { label: 'Taller de acuarela', icon: 'brush' as const, tono: 'salvia' as const, girar: '' as const },
  { label: 'Manualidades en grupo', icon: 'craft' as const, tono: 'mostaza' as const, girar: 'der' as const },
  { label: 'Nuestro rincón', icon: 'pin' as const, tono: 'tinta' as const, girar: '' as const },
  { label: 'Peques creando', icon: 'users' as const, tono: 'salvia' as const, girar: 'izq' as const },
  { label: 'Cumple de manualidades', icon: 'craft' as const, tono: 'arcilla' as const, girar: '' as const },
  { label: 'Detalles hechos a mano', icon: 'brush' as const, tono: 'mostaza' as const, girar: 'der' as const },
  { label: 'Taller en grupo', icon: 'chat' as const, tono: 'tinta' as const, girar: 'izq' as const },
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-3xl px-5 pt-14 pb-8 text-center sm:pt-20">
      <SectionKicker label="Galería" align="center" />
      <h1 class="mt-4 font-display text-4xl text-tinta sm:text-5xl">Momentos en Chispa</h1>
      <p class="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-tinta-light">
        Estamos vistiendo esta galería con fotos reales de nuestros cumpleaños y talleres.
        Mientras tanto, en Instagram vamos subiendo el día a día del local.
      </p>
      <a
        :href="info.instagram.url"
        target="_blank"
        rel="noopener"
        class="mt-6 inline-flex items-center gap-2 rounded-full bg-tinta px-6 py-3 text-sm font-medium text-crema-100 transition hover:-rotate-1 hover:bg-arcilla-600"
      >
        <IconGlyph name="instagram" class="h-4 w-4" />
        Síguenos en Instagram
      </a>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-12">
      <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        <GalleryTile v-for="tile in tiles" :key="tile.label" v-bind="tile" />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 pb-20">
      <CtaBanner
        titulo="¿Quieres ser la próxima foto de esta galería?"
        texto="Reserva tu cumpleaños o tu plaza en un taller y ven a crear algo bonito con nosotros."
      />
    </section>
  </div>
</template>
