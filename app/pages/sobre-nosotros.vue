<script setup lang="ts">
const info = useBusinessInfo()

useSeoMeta({
  title: 'Sobre nosotros · Chispa, local creativo en Granada',
  description:
    'Conoce Chispa, el local creativo de Granada donde nacen cumpleaños infantiles con talleres personalizados y talleres de pintura y manualidades para todas las edades.',
})

const valores = [
  {
    icon: 'brush' as const,
    title: 'Creatividad de verdad',
    text: 'Cada actividad está pensada para crear algo con las manos, no solo para pasar el rato.',
  },
  {
    icon: 'users' as const,
    title: 'Grupos pequeños',
    text: 'Trabajamos en grupos reducidos para poder atender a cada niño y cada niña como se merece.',
  },
  {
    icon: 'craft' as const,
    title: 'Hecho a mano',
    text: 'Nada de plantillas repetidas: cada taller y cada fiesta se adapta a quién la celebra.',
  },
  {
    icon: 'shield' as const,
    title: 'Espacio cuidado',
    text: 'Un local pensado para que niños y adultos se sientan cómodos, seguros y como en casa.',
  },
]
</script>

<template>
  <div>
    <section class="mx-auto max-w-4xl px-5 pt-14 pb-6 text-center sm:pt-20">
      <SectionKicker label="Sobre nosotros" align="center" />
      <h1 class="mt-4 font-display text-4xl text-tinta sm:text-5xl">
        Un lugar donde hacer tus celebraciones especiales
      </h1>
      <p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-tinta-light">
        Chispa es un local creativo en {{ info.ciudad }} pensado para disfrutar de lo que
        más te gusta y compartir momentos únicos: cumpleaños infantiles diferentes, con
        talleres personalizados para los niños, y talleres y eventos para adultos.
      </p>
    </section>

    <section class="mx-auto max-w-4xl px-5 py-10">
      <div class="rounded-2xl border border-tinta/10 bg-crema-200 p-8 sm:p-10">
        <p class="font-hand text-2xl text-arcilla-600">Detrás de Chispa</p>
        <p class="mt-3 text-lg leading-relaxed text-tinta-light">
          Al frente del local está <strong class="text-tinta">Lucrecia López Rodríguez</strong>,
          encargada de que cada cumpleaños y cada taller salga a medida de quien lo celebra.
          Si tienes alguna idea especial en mente, cuéntanosla: es justo el tipo de encargos
          que más nos gustan.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-14">
      <div class="mx-auto max-w-xl text-center">
        <SectionKicker label="Cómo somos" align="center" />
        <h2 class="mt-3 font-display text-3xl text-tinta">Lo que nos diferencia</h2>
      </div>
      <div class="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="valor in valores"
          :key="valor.title"
          class="rounded-2xl border border-tinta/10 bg-crema-100 p-6"
        >
          <div
            class="flex h-11 w-11 items-center justify-center rounded-full bg-salvia-100 text-salvia-600"
          >
            <IconGlyph :name="valor.icon" class="h-5 w-5" />
          </div>
          <h3 class="mt-4 font-display text-lg text-tinta">{{ valor.title }}</h3>
          <p class="mt-1.5 text-[15px] leading-relaxed text-tinta-light">{{ valor.text }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 py-14">
      <div class="grid gap-10 rounded-3xl bg-crema-200 p-8 sm:p-12 lg:grid-cols-2">
        <div>
          <SectionKicker label="Para quién es Chispa" />
          <h2 class="mt-3 font-display text-2xl text-tinta">Un plan para cada edad</h2>
          <p class="mt-3 text-[15px] leading-relaxed text-tinta-light">
            Diseñamos las actividades pensando en dos públicos muy distintos, y les damos a
            cada uno su espacio.
          </p>
        </div>
        <div class="grid gap-4 sm:grid-cols-2">
          <div class="rounded-2xl border border-tinta/10 bg-crema-100 p-5">
            <IconGlyph name="cake" class="h-6 w-6 text-arcilla-600" />
            <h3 class="mt-3 font-display text-lg text-tinta">Peques de 4 a 12 años</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-tinta-light">
              Cumpleaños con talleres de pintura y manualidades adaptados a su edad.
            </p>
          </div>
          <div class="rounded-2xl border border-tinta/10 bg-crema-100 p-5">
            <IconGlyph name="brush" class="h-6 w-6 text-salvia-600" />
            <h3 class="mt-3 font-display text-lg text-tinta">Adultos</h3>
            <p class="mt-1.5 text-sm leading-relaxed text-tinta-light">
              Talleres y eventos para desconectar, en grupo o en planes privados.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-5 pb-20">
      <CtaBanner
        titulo="Ven a conocer Chispa"
        texto="Escríbenos y te contamos cómo es el local y qué plan encaja mejor con lo que buscas."
      />
    </section>
  </div>
</template>
