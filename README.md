# Chispa — web

Web de Chispa, local creativo en Granada (cumpleaños infantiles con talleres
personalizados, y talleres de pintura y manualidades para niños y adultos).
Construida con Nuxt 4 + Tailwind CSS v4, orientada a SEO local para Granada.

## Desarrollo

```bash
npm install
npm run dev
```

Se sirve en `http://localhost:3000`.

## Producción

El sitio es 100% estático (sin backend ni contenido dinámico), así que el
comando de build es `generate`, no `build`:

```bash
npm run generate
```

Esto deja el sitio listo en `.output/public/`, para subir a cualquier
hosting estático (Netlify, Vercel, Cloudflare Pages, etc.). Para previsualizar
ese resultado en local: `npx serve .output/public`.

## Estructura

- `app/pages/` — Inicio, Sobre nosotros, Cumpleaños, Talleres, Galería.
- `app/components/layout/` — cabecera, pie y botón flotante de WhatsApp.
- `app/components/ui/` — tarjetas, iconos y demás piezas reutilizables.
- `app/composables/useBusinessInfo.ts` — datos de contacto centralizados
  (teléfono, redes, horario, dirección...).
- `nuxt.config.ts` — SEO (título, sitemap, robots, schema.org), fuentes y
  Tailwind.

## Pendiente de confirmar por el cliente

El cuestionario de briefing dejó varios datos sin concretar. Están marcados
con `TODO cliente` en `app/composables/useBusinessInfo.ts` y en
`nuxt.config.ts`:

- **Dominio real** (ahora mismo el sitio usa `https://www.chispagranada.es`
  como marcador de posición en `nuxt.config.ts` → `site.url`).
- **Email de contacto** definitivo (el formulario decía "no sabemos").
- **Dirección exacta** del local (solo se indicó "Granada").
- **Horario** real de apertura.
- **Usuarios de Instagram y TikTok** reales.
- **Fotos reales** del local, cumpleaños y talleres, para sustituir los
  marcadores de la Galería.
- **Precios y aforo exactos**, hoy descritos como "consultar por teléfono o
  WhatsApp" en Cumpleaños y Talleres.
