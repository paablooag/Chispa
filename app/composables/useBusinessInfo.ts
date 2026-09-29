/**
 * Datos de contacto y negocio centralizados.
 * Varios campos son marcadores de posición porque el cuestionario de
 * briefing no los concretó (email, dirección exacta, horario, usuarios de
 * redes sociales). Buscar "TODO cliente" para localizarlos y sustituirlos.
 */
export const useBusinessInfo = () => {
  return {
    nombre: 'Chispa',
    nombreLegal: 'Chispa',
    eslogan: 'El local creativo de Granada',
    telefono: '677 12 79 51',
    telefonoHref: 'tel:+34677127951',
    whatsappHref: 'https://wa.me/34677127951',
    // TODO cliente: confirmar email definitivo, el formulario no lo concretó.
    email: 'info@chispa.com',
    ciudad: 'Granada',
    // TODO cliente: dirección exacta del local para el mapa y el SEO local.
    direccion: 'Granada, España',
    instagram: {
      // TODO cliente: usuario real de Instagram.
      usuario: '@chispa.granada',
      url: 'https://www.instagram.com/chispa.granada',
    },
    tiktok: {
      // TODO cliente: usuario real de TikTok.
      usuario: '@chispa.granada',
      url: 'https://www.tiktok.com/@chispa.granada',
    },
    // TODO cliente: horario real de apertura.
    horario: [
      { dias: 'Martes a viernes', horas: '17:00 – 20:30' },
      { dias: 'Sábados', horas: '10:30 – 14:00 y 17:00 – 20:30' },
      { dias: 'Domingos y lunes', horas: 'Cerrado (grupos con cita previa)' },
    ],
  }
}
