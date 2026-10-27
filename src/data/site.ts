import logos from './brand-logos.json';

export const site = {
  name: 'Tecni Center',
  owner: 'Alberto Yepes',
  tel: '+573166412601',
  telDisplay: '316 641 2601',
  // Add an email here to show it on the legal pages and footer.
  email: '',
  address: {
    street: 'Cra. 13 #7-13 B',
    area: 'Barrio 20 de Julio',
    city: 'Ibagué',
    region: 'Tolima',
  },
  geo: { lat: 4.4525649, lng: -75.1453621 },
  placeId: 'ChIJedzrtRrFOI4RInepivZlneE',
  hours: [
    { label: 'Lunes a viernes', text: '9:00 a. m. – 6:30 p. m.', days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '18:30' },
    { label: 'Sábado', text: '9:00 a. m. – 3:00 p. m.', days: ['Saturday'], opens: '09:00', closes: '15:00' },
    { label: 'Domingo', text: 'Cerrado', days: [], opens: '', closes: '' },
  ],
  // Last checked on the Google Business Profile: 2026-10-26.
  rating: { value: '5,0', count: 25 },
  updated: '26 de octubre de 2026',
};

export const wa = (text: string) => `https://wa.me/${site.tel.slice(1)}?text=${encodeURIComponent(text)}`;
export const waDefault = wa('Hola, necesito servicio técnico para mi equipo.');

export const links = {
  review: `https://search.google.com/local/writereview?placeid=${site.placeId}`,
  reviews: `https://www.google.com/maps/place/?q=place_id:${site.placeId}`,
  directions: `https://www.google.com/maps/dir/?api=1&destination=${site.geo.lat},${site.geo.lng}&destination_place_id=${site.placeId}`,
  waze: `https://waze.com/ul?ll=${site.geo.lat},${site.geo.lng}&navigate=yes`,
  embed: `https://www.google.com/maps?q=${site.geo.lat},${site.geo.lng}&z=17&output=embed`,
};

// Verbatim from Google Maps (es-CO), 2026-10-26. Names shortened on purpose.
export const reviews = [
  { who: 'Wilmer O.', text: 'Honestidad y buen servicio. Me reparo un televisor, que en otros lugares me habían cotizado el arreglo por mucho mucho más valor.…' },
  { who: 'Colombian driver', text: 'Muy buen servicio, garantizado y sin engaños, el señor Yepes lo asesora a uno con honestidad' },
  { who: 'José R.', text: 'Excelente servicio, honestidad y garantía es lo que te brindan en este lugar.. Muchas gracias señor yepez por su trabajo..' },
];

const logoNames = ['samsung', 'lg', 'sony', 'panasonic', 'bose', 'jbl', 'xiaomi', 'toshiba'];
export const brandLogos = logoNames.map((n) => logos.find((l) => l.name === n)!);
// No logo file in the icon set: shown as type until official files are added.
export const brandWordmarks = ['JVC', 'Hisense', 'TCL', 'Philips'];

export const faqs = [
  { q: '¿Cuánto cuesta el diagnóstico?', a: 'Depende del equipo y de la falla. Escríbanos por WhatsApp con la marca y lo que le pasa, y le orientamos. Le informamos antes de comenzar cualquier trabajo.' },
  { q: '¿Los trabajos tienen garantía?', a: 'Sí. Todos los trabajos incluyen garantía, y el diagnóstico también está garantizado. Las condiciones están en la política de garantía.' },
  { q: '¿Hacen servicio a domicilio?', a: 'Sí, el servicio a domicilio tiene un costo adicional. Escríbanos para confirmar la cobertura y el valor.' },
  { q: '¿Son servicio técnico autorizado?', a: 'Sí. Tecni Center es servicio técnico autorizado de las principales marcas de televisores y sonido, entre ellas Samsung, LG, JVC, Bose y JBL.' },
  { q: '¿Qué equipos reparan?', a: 'Televisores LED, LCD y Smart TV de todas las marcas, y equipos de sonido. También vendemos baterías telefónicas, auditivas, alcalinas y otras.' },
  { q: '¿Dónde están y en qué horario atienden?', a: `${site.address.street}, ${site.address.area}, ${site.address.city}. Lunes a viernes de 9:00 a. m. a 6:30 p. m. y sábados de 9:00 a. m. a 3:00 p. m.` },
];
