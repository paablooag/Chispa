<script setup lang="ts">
const info = useBusinessInfo()

useSeoMeta({
  title: 'Chispa · Cumpleaños infantiles y talleres creativos en Granada',
  description:
    'Chispa es un local creativo en Granada especializado en cumpleaños infantiles con talleres personalizados, y talleres de pintura y manualidades para niños y adultos.',
  ogTitle: 'Chispa · El local creativo de Granada',
  ogDescription:
    'Cumpleaños infantiles diferentes y talleres de pintura y manualidades en Granada, para niños y para adultos.',
})

useSchemaOrg([
  defineLocalBusiness({
    name: info.nombre,
    description:
      'Local creativo en Granada para cumpleaños infantiles con talleres personalizados y talleres de pintura y manualidades para niños y adultos.',
    address: {
      addressLocality: 'Granada',
      addressRegion: 'Granada',
      addressCountry: 'ES',
    },
    telephone: '+34677127951',
    email: info.email,
    sameAs: [info.instagram.url, info.tiktok.url],
  }),
])

const servicios = [
  {
    icon: 'cake' as const,
    title: 'Cumpleaños infantiles',
    description:
      'Fiestas de cumpleaños con talleres a medida: cada niño y niña se va con lo que ha creado con sus manos.',
    to: '/cumpleanos',
    cta: 'Ver cumpleaños',
  },
  {
    icon: 'brush' as const,
    title: 'Talleres de pintura',
    description:
      'Sesiones de pintura para desconectar, para peques y para adultos, en un ambiente tranquilo y sin prisa.',
    to: '/talleres',
    cta: 'Ver talleres',
  },
  {
    icon: 'craft' as const,
    title: 'Talleres artesanales',
    description:
      'Cerámica, papel, telas y otros materiales: manualidades pensadas para hacer algo bonito y llevárselo a casa.',
    to: '/talleres',
    cta: 'Ver talleres',
  },
]

const pasos = [
  {
    numero: '01',
    titulo: 'Cuéntanos tu idea',
    texto: 'Llámanos o escríbenos por WhatsApp y te contamos disponibilidad y opciones.',
  },
  {
    numero: '02',
    titulo: 'Elegimos el plan',
    texto: 'Cumpleaños, taller puntual o evento privado: lo ajustamos a la edad y al grupo.',
  },
  {
    numero: '03',
    titulo: 'Nos vemos en Chispa',
    texto: 'Te esperamos en el local con todo preparado para que solo tengáis que venir a disfrutar.',
  },
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-6xl px-5 pt-14 pb-16 sm:pt-20 sm:pb-24">
      <div class="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <SectionKicker label="Local creativo en Granada" />
          <h1 class="mt-4 font-display text-4xl leading-[1.08] text-tinta sm:text-5xl lg:text-[3.4rem]">
            Cumpleaños y talleres que
            <span class="relative whitespace-nowrap">
              <span class="subrayado-marcador">encienden la chispa</span>
            </span>
            creativa
          </h1>
          <p class="mt-5 max-w-md text-lg leading-relaxed text-tinta-light">
            En Chispa celebramos cumpleaños infantiles con talleres personalizados y
            organizamos talleres de pintura y manualidades para niños y adultos, en pleno
            {{ info.ciudad }}.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-3">
            <a
              :href="info.whatsappHref"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 rounded-full bg-arcilla px-6 py-3.5 text-sm font-medium text-crema-100 shadow-soft transition hover:-rotate-1 hover:bg-arcilla-600"
            >
              <IconGlyph name="chat" class="h-4 w-4" />
              Reserva tu cumpleaños
            </a>
            <NuxtLink
              to="/talleres"
              class="inline-flex items-center gap-2 rounded-full border border-tinta/15 px-6 py-3.5 text-sm font-medium text-tinta transition hover:border-arcilla-400 hover:text-arcilla-600"
            >
              Ver talleres
              <IconGlyph name="arrow" class="h-3.5 w-3.5" />
            </NuxtLink>
          </div>
          <div class="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-tinta-light">
            <span class="flex items-center gap-1.5">
              <IconGlyph name="pin" class="h-4 w-4 text-arcilla-600" />
              {{ info.ciudad }}
            </span>
            <span class="flex items-center gap-1.5">
              <IconGlyph name="users" class="h-4 w-4 text-arcilla-600" />
              De 4 a 12 años, y también para adultos
            </span>
          </div>
        </div>

        <div class="relative mx-auto aspect-square w-full max-w-md">
          <div class="bg-textura absolute inset-4 rounded-blob bg-arcilla-100"></div>
          <div
            class="absolute left-6 top-8 flex h-28 w-28 rotar-leve items-center justify-center rounded-2xl border border-tinta/10 bg-crema-100 shadow-card"
          >
            <IconGlyph name="cake" class="h-10 w-10 text-arcilla-600" />
          </div>
          <div
            class="absolute bottom-10 right-4 flex h-32 w-32 rotar-leve-inv items-center justify-center rounded-2xl border border-tinta/10 bg-crema-100 shadow-card"
          >
            <IconGlyph name="brush" class="h-11 w-11 text-salvia-600" />
          </div>
          <div
            class="absolute bottom-4 left-1/3 flex h-20 w-20 items-center justify-center rounded-full border border-tinta/10 bg-mostaza/20 shadow-card"
          >
            <SparkMark class="h-8 w-8 text-mostaza-600" />
          </div>
        </div>
      </div>
    </section>

    <section class="border-y border-tinta/10 bg-crema-200">
      <div class="mx-auto grid max-w-6xl gap-10 px-5 py-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionKicker label="Quiénes somos" />
          <h2 class="mt-3 font-display text-3xl text-tinta">
            Un lugar donde celebrar, crear y compartir
          </h2>
        </div>
        <p class="text-lg leading-relaxed text-tinta-light">
          Chispa nació con una idea sencilla: crear un espacio en {{ info.ciudad }} donde
          hacer tus celebraciones especiales, disfrutar de lo que más te gusta y compartir
          momentos únicos. Cumpleaños infantiles diferentes, con talleres personalizados
          para los niños, y talleres y eventos para quienes ya no son tan niños.
          <NuxtLink to="/sobre-nosotros" class="font-medium text-arcilla-600 hover:underline">
            Conoce Chispa →
          </NuxtLink>
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-20">
      <div class="mx-auto max-w-xl text-center">
        <SectionKicker label="Lo que hacemos" align="center" />
        <h2 class="mt-3 font-display text-3xl text-tinta sm:text-4xl">Nuestros planes</h2>
      </div>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard v-for="servicio in servicios" :key="servicio.title" v-bind="servicio" />
      </div>
    </section>

    <section class="bg-tinta">
      <div class="mx-auto max-w-6xl px-5 py-20">
        <div class="mx-auto max-w-xl text-center">
          <p class="font-hand text-2xl text-mostaza">Sin líos, sin formularios</p>
          <h2 class="mt-3 font-display text-3xl text-crema-100 sm:text-4xl">Cómo reservar</h2>
          <p class="mt-3 text-[15px] text-crema-100/70">
            Las reservas se gestionan en el local, por teléfono o por WhatsApp: hablamos,
            cuadramos fecha y grupo, y listo.
          </p>
        </div>
        <div class="mt-12 grid gap-10 sm:grid-cols-3">
          <StepItem
            v-for="paso in pasos"
            :key="paso.numero"
            v-bind="paso"
            class="[&_h3]:text-crema-100 [&_p]:text-crema-100/70"
          />
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-20">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionKicker label="Un vistazo" />
          <h2 class="mt-3 font-display text-3xl text-tinta">Momentos en Chispa</h2>
        </div>
        <NuxtLink
          to="/galeria"
          class="inline-flex items-center gap-1.5 text-sm font-medium text-arcilla-600 hover:underline"
        >
          Ver galería completa
          <IconGlyph name="arrow" class="h-3.5 w-3.5" />
        </NuxtLink>
      </div>
      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
        <GalleryTile label="Fiestas" icon="cake" tono="arcilla" girar="izq" />
        <GalleryTile label="Pintura" icon="brush" tono="salvia" />
        <GalleryTile label="Manualidades" icon="craft" tono="mostaza" girar="der" />
        <GalleryTile label="El local" icon="pin" tono="tinta" />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 pb-20">
      <CtaBanner
        titulo="¿Celebramos algo juntos?"
        texto="Cuéntanos la edad, cuántos sois y qué os apetece hacer, y te preparamos un plan a medida."
      />
    </section>
  </div>
</template>
