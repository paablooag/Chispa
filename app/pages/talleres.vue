<script setup lang="ts">
const info = useBusinessInfo()

useSeoMeta({
  title: 'Talleres de pintura y manualidades en Granada · Chispa',
  description:
    'Talleres de pintura y manualidades en Granada para niños y adultos. Sesiones abiertas y planes privados para grupos, despedidas o celebraciones.',
})

const publicos = [
  {
    icon: 'cake' as const,
    title: 'Para peques',
    text: 'Talleres de pintura y manualidades adaptados por edades, ideales para tardes entre semana o findes.',
  },
  {
    icon: 'users' as const,
    title: 'Para adultos',
    text: 'Sesiones para desconectar de la rutina, en solitario, con amigos o en planes de grupo privados.',
  },
]

const politicas = [
  {
    icon: 'shield' as const,
    titulo: 'Plazas limitadas',
    texto: 'Cada taller tiene un aforo reducido para poder dar atención personalizada; se reserva plaza por orden de confirmación.',
  },
  {
    icon: 'brush' as const,
    titulo: 'Materiales incluidos',
    texto: 'No hace falta traer nada: el material del taller elegido va incluido en el precio.',
  },
  {
    icon: 'chat' as const,
    titulo: 'Inscripción',
    texto: 'Apúntate por teléfono o WhatsApp indicando el taller y la fecha que te interesa.',
  },
  {
    icon: 'close' as const,
    titulo: 'Cancelaciones',
    texto: 'Avísanos con antelación si no puedes venir, para poder ofrecer tu plaza a otra persona.',
  },
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:pt-20">
      <div class="mx-auto max-w-2xl text-center">
        <SectionKicker label="Talleres" align="center" />
        <h1 class="mt-4 font-display text-4xl text-tinta sm:text-5xl">
          Talleres de pintura y manualidades en Granada
        </h1>
        <p class="mt-5 text-lg leading-relaxed text-tinta-light">
          Espacio y tiempo para crear con las manos, sin prisa. Tenemos talleres para
          niños y para adultos, tanto en sesiones abiertas como en grupos privados.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-10">
      <div class="grid gap-5 sm:grid-cols-2">
        <ServiceCard
          icon="brush"
          title="Talleres de pintura"
          description="Óleo, acrílico o acuarela sobre lienzo, guiados paso a paso, para quien nunca ha pintado y para quien ya tiene experiencia."
        />
        <ServiceCard
          icon="craft"
          title="Talleres artesanales"
          description="Manualidades por temporadas y temáticas: cerámica, papel, textil y otros materiales según el taller programado."
        />
      </div>
    </section>

    <section class="border-y border-tinta/10 bg-crema-200">
      <div class="mx-auto max-w-6xl px-5 py-14">
        <SectionKicker label="Para todas las edades" />
        <h2 class="mt-3 font-display text-3xl text-tinta">¿Para quién son los talleres?</h2>
        <div class="mt-8 grid gap-5 sm:grid-cols-2">
          <div
            v-for="publico in publicos"
            :key="publico.title"
            class="rounded-2xl border border-tinta/10 bg-crema-100 p-6"
          >
            <IconGlyph :name="publico.icon" class="h-6 w-6 text-arcilla-600" />
            <h3 class="mt-3 font-display text-xl text-tinta">{{ publico.title }}</h3>
            <p class="mt-1.5 text-[15px] leading-relaxed text-tinta-light">{{ publico.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-14">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionKicker label="Horario orientativo" />
          <h2 class="mt-3 font-display text-3xl text-tinta">Cuándo puedes venir</h2>
          <p class="mt-3 text-[15px] leading-relaxed text-tinta-light">
            Los días y horas de cada taller varían según la temporada; te confirmamos el
            calendario actualizado al reservar.
          </p>
        </div>
        <ul class="space-y-3">
          <li
            v-for="franja in info.horario"
            :key="franja.dias"
            class="flex items-center justify-between rounded-xl border border-tinta/10 bg-crema-100 px-5 py-4"
          >
            <span class="flex items-center gap-2.5 font-medium text-tinta">
              <IconGlyph name="clock" class="h-4 w-4 text-arcilla-600" />
              {{ franja.dias }}
            </span>
            <span class="text-tinta-light">{{ franja.horas }}</span>
          </li>
        </ul>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-14">
      <SectionKicker label="Antes de apuntarte" />
      <h2 class="mt-3 font-display text-3xl text-tinta">Lo esencial</h2>
      <div class="mt-8 grid gap-4 sm:grid-cols-2">
        <PolicyItem v-for="politica in politicas" :key="politica.titulo" v-bind="politica" />
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 pb-20">
      <CtaBanner
        titulo="¿Te apuntas a un taller?"
        texto="Escríbenos y te contamos qué talleres tenemos programados y cómo apuntarte."
      />
    </section>
  </div>
</template>
