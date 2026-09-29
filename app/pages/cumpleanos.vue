<script setup lang="ts">
const info = useBusinessInfo()

useSeoMeta({
  title: 'Cumpleaños infantiles en Granada con talleres · Chispa',
  description:
    'Organiza un cumpleaños infantil diferente en Granada: talleres de pintura y manualidades personalizados para que los peques se lo lleven hecho por ellos mismos.',
})

const incluye = [
  'Espacio del local reservado solo para vuestro grupo',
  'Taller de pintura o manualidades guiado y adaptado a la edad',
  'Materiales y delantales para no preocuparos de mancharse',
  'Un ratito final para merendar si queréis traer algo',
]

const politicas = [
  {
    icon: 'users' as const,
    titulo: 'Edad mínima',
    texto: 'Los talleres están pensados a partir de 4 años. Para grupos más pequeños, consúltanos.',
  },
  {
    icon: 'shield' as const,
    titulo: 'Aforo',
    texto: 'Trabajamos con grupos reducidos para poder atender bien a cada niño y niña; el aforo depende del taller elegido.',
  },
  {
    icon: 'clock' as const,
    titulo: 'Duración',
    texto: 'Cada celebración tiene un tiempo estimado que os confirmamos al reservar, según el taller y el grupo.',
  },
  {
    icon: 'chat' as const,
    titulo: 'Precios y reservas',
    texto: 'El precio depende del número de niños y del taller. Consúltanos por teléfono o WhatsApp y te damos presupuesto.',
  },
  {
    icon: 'close' as const,
    titulo: 'Cancelaciones',
    texto: 'Si necesitáis cambiar la fecha, avisadnos con la mayor antelación posible para poder reorganizar la agenda.',
  },
  {
    icon: 'check' as const,
    titulo: 'Normas del local',
    texto: 'Ropa cómoda que se pueda manchar y respeto por el espacio y el material: lo demás lo ponemos nosotros.',
  },
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:pt-20">
      <div class="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionKicker label="Fiestas de cumpleaños" />
          <h1 class="mt-4 font-display text-4xl leading-tight text-tinta sm:text-5xl">
            Cumpleaños infantiles diferentes, en Granada
          </h1>
          <p class="mt-5 max-w-lg text-lg leading-relaxed text-tinta-light">
            En lugar de un cumpleaños al uso, en Chispa cada niño y niña se sienta a crear:
            pintura o manualidades, a su ritmo, con ayuda de nuestro equipo y con algo
            hecho por ellos mismos para llevarse a casa.
          </p>
          <a
            :href="info.whatsappHref"
            target="_blank"
            rel="noopener"
            class="mt-7 inline-flex items-center gap-2 rounded-full bg-arcilla px-6 py-3.5 text-sm font-medium text-crema-100 shadow-soft transition hover:-rotate-1 hover:bg-arcilla-600"
          >
            <IconGlyph name="chat" class="h-4 w-4" />
            Reservar por WhatsApp
          </a>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <GalleryTile label="Cumple pintura" icon="brush" tono="arcilla" girar="izq" />
          <GalleryTile label="Cumple manualidades" icon="craft" tono="salvia" girar="der" />
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-14">
      <div class="mx-auto max-w-xl text-center">
        <SectionKicker label="Dos formas de celebrarlo" align="center" />
        <h2 class="mt-3 font-display text-3xl text-tinta">Elige el taller del cumple</h2>
      </div>
      <div class="mt-10 grid gap-5 sm:grid-cols-2">
        <ServiceCard
          icon="brush"
          title="Cumple Pintura"
          description="Cada invitado pinta su propia obra sobre lienzo o soporte de madera, con la técnica y los colores que más le gusten."
        />
        <ServiceCard
          icon="craft"
          title="Cumple Manualidades"
          description="Talleres artesanales por temáticas: desde cerámica hasta creaciones con papel y tela, según la edad del grupo."
        />
      </div>
    </section>

    <section class="border-y border-tinta/10 bg-crema-200">
      <div class="mx-auto max-w-6xl px-5 py-14">
        <SectionKicker label="Qué incluye" />
        <h2 class="mt-3 font-display text-3xl text-tinta">Todo listo para que solo vengáis</h2>
        <ul class="mt-8 grid gap-4 sm:grid-cols-2">
          <li
            v-for="item in incluye"
            :key="item"
            class="flex items-start gap-3 rounded-xl border border-tinta/10 bg-crema-100 p-4"
          >
            <IconGlyph name="check" class="mt-0.5 h-5 w-5 shrink-0 text-arcilla-600" />
            <span class="text-[15px] leading-relaxed text-tinta-light">{{ item }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-14">
      <SectionKicker label="Antes de reservar" />
      <h2 class="mt-3 font-display text-3xl text-tinta">Precios, edades y condiciones</h2>
      <p class="mt-2 max-w-2xl text-[15px] text-tinta-light">
        Confirmamos los detalles exactos por teléfono o WhatsApp, pero esto es lo esencial
        para que os hagáis una idea:
      </p>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <PolicyItem v-for="politica in politicas" :key="politica.titulo" v-bind="politica" />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 pb-20">
      <CtaBanner
        titulo="Cuéntanos cómo os lo imagináis"
        texto="Dinos la edad, cuántos seréis y la fecha, y te proponemos el taller que mejor encaje."
      />
    </section>
  </div>
</template>
