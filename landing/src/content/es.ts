/** Spanish copy, one page for Mexico and Spain. Wording follows the app's own
 *  es-MX strings and App Store description ("tú"). Spanish searchers use the
 *  English term: Google autocomplete on 2026-11-09 (MX and ES) returned
 *  "no spend challenge pdf", "… rules", "… app" and "… tracker", while "reto
 *  sin gastar" and "mes sin gastar" returned nothing. "Reto de ahorro" means
 *  saving fixed amounts, which the app does not do. Prices are left out: they
 *  vary by storefront. */

import type { Content, Guide } from "./types";

const GUIDES: Guide[] = [
  {
    slug: "no-spend-challenge",
    published: "2026-11-09",
    updated: "2026-11-09",
    title: "No spend challenge: qué es, reglas y cómo contar tus días sin gastar",
    metaTitle: "No spend challenge: qué es, reglas y calendario en PDF",
    description:
      "El no spend challenge es un reto de contar los días sin gastar en lo que no necesitas. Las reglas, cómo aguantar un mes y un calendario PDF gratis.",
    intro:
      "El no spend challenge, o reto de no gastar, consiste en contar los días en los que no gastas en nada fuera de lo que decidiste de antemano que es esencial. Funciona cuando las reglas están escritas antes del primer día, cada día se registra y un tropiezo no lo termina.",
    sections: [
      {
        h: "Qué cuenta y qué no",
        p: [
          "Decide antes de empezar qué queda excluido. Casi todos excluyen la renta, los servicios, las compras del súper, el transporte al trabajo y las medicinas. Todo lo demás cuenta: el café para llevar, el pedido a domicilio de la noche, lo que agregas al carrito a las 11.",
          "Escribe tu regla en una sola frase que puedas revisar en un segundo. «La renta, los servicios y el súper no cuentan» es una regla. «Solo lo necesario» no lo es, porque la vas a negociar contigo en la caja.",
        ],
      },
      {
        h: "¿Cuánto tiempo?",
        p: [
          "Un mes es ideal para el primer intento, y enero funciona muy bien: los gastos de diciembre todavía se ven en la cuenta y mucha gente intenta lo mismo. Si prefieres no tener fecha de fin, conviértelo en una racha e intenta superar tu récord.",
        ],
      },
      {
        h: "Registra cada día, también los malos",
        p: [
          "Marca cada día que lograste y deja vacío el día en que gastaste. Al final del mes, los huecos te muestran exactamente qué días y qué situaciones te hicieron caer.",
          "Lo más fácil es que registrar el día tome un solo gesto, cada noche a la misma hora: una pluma y el calendario de abajo, o un widget en la pantalla de inicio.",
        ],
      },
      {
        h: "Un tropiezo no es un fracaso",
        p: [
          "Un día con gasto no termina el reto. Regístralo con honestidad y vuelve a empezar ese mismo día. Un mes con 26 días marcados es mucho mejor resultado que uno que abandonaste el día 9.",
          "FrugalStreak está hecha para esto: la racha actual vuelve a empezar, pero tu mejor racha y tus insignias se conservan. Ser honesto no te cuesta nada.",
        ],
      },
      {
        h: "¿Papel o app?",
        p: [
          "El calendario en PDF tiene una página por cada mes de 2027, con una casilla por día y una línea para tu regla. Pegado en el refri funciona muy bien.",
          "FrugalStreak es la misma idea en el iPhone: un toque en el widget registra el día, el calendario muestra las últimas cinco semanas y un recordatorio nocturno opcional solo llega los días que no has registrado. Sin cuenta y sin conexión bancaria.",
        ],
      },
    ],
    faq: [
      {
        q: "¿Qué es un no spend challenge?",
        a: "Un reto en el que, durante un tiempo, solo gastas en lo que decidiste de antemano que es esencial, como la renta, los servicios y el súper. Se cuentan los días que lo logras.",
      },
      {
        q: "¿El calendario es gratis?",
        a: "Sí. El PDF se descarga directamente, sin registro y sin correo electrónico.",
      },
    ],
    takeaway:
      "Una regla en una frase, una casilla marcada cada noche y, después de un tropiezo, volver a empezar ese mismo día.",
    related: [],
    printable: {
      file: "printables/no-spend-calendar-2027-es.pdf",
      label: "Descargar el calendario sin gastar 2027 (PDF gratis)",
    },
  },
];

export const es: Content = {
  lang: "es",
  ogLocale: "es_MX",
  langName: "Español",
  prefix: "es/",
  updated: "2026-11-09",

  app: { tagline: "Sin presupuesto. Solo una racha.", price: "Gratis" },
  meta: {
    title: "No spend challenge: app con widget y calendario – FrugalStreak",
    description:
      "Registra tus días sin gastar con un toque en el widget de la pantalla de inicio y velos en un calendario. Sin presupuesto ni banco. Gratis para iPhone y iPad.",
  },
  hero: {
    h1: "Un registro de días sin gastar que es solo una racha",
    sub:
      "Toca el widget de la pantalla de inicio cada día que pases sin una compra por impulso y mira cómo se llena el calendario. Sin presupuesto que armar y sin cuenta bancaria que conectar.",
    shot: {
      file: "hero",
      alt: "El widget grande de calendario y el widget pequeño de racha de FrugalStreak en un iPhone, con una racha de 100 días sin gastar",
      caption: "",
    },
  },
  gallery: {
    h: "Así se ve",
    shots: [
      {
        file: "streak",
        alt: "La pantalla principal de FrugalStreak: una racha de 100 días, tu regla, un botón para registrar y el calendario de las últimas cinco semanas",
        caption: "Tu racha, tu regla y las últimas cinco semanas",
      },
      {
        file: "widget-style",
        alt: "La pantalla de estilo del widget con vista previa clara y oscura y diez colores",
        caption: "Elige el color del widget, claro u oscuro",
      },
      {
        file: "archive",
        alt: "Insignias de logros y una lista de rachas anteriores con su duración y fechas",
        caption: "Insignias que conservas y todas tus rachas anteriores",
      },
    ],
  },
  features: [
    {
      h: "Registra desde la pantalla de inicio",
      p: "Todo el widget es un botón. Un toque y el día queda registrado, sin abrir FrugalStreak. También desde el Centro de control y con Siri.",
    },
    {
      h: "Tú decides qué cuenta",
      p: "Durante la configuración escribes tu regla en una frase, por ejemplo sin la renta, los servicios y el súper. Nada se clasifica ni se califica, así que no discutes contigo a las 9 de la noche sobre si un café rompió la regla.",
    },
    {
      h: "El calendario muestra tu racha",
      p: "Junto al contador ves las últimas cinco semanas. ¿Olvidaste registrar ayer? Tócalo en el calendario.",
    },
    {
      h: "Un recordatorio solo cuando hace falta",
      p: "El recordatorio nocturno opcional solo llega los días que no has registrado, con un botón para registrar desde la notificación. En la noche, la app y los widgets también muestran cuando el día de hoy sigue abierto.",
    },
    {
      h: "Insignias a los 3, 7, 14, 30 y 100 días",
      p: "Se ganan con tu mejor racha, no con la actual, así que volver a empezar nunca te quita una.",
    },
    {
      h: "Ser honesto no te cuesta nada",
      p: "¿Gastaste hoy? Tu racha actual vuelve a empezar y tu mejor racha se conserva en pantalla. Una app que te castigara por decir la verdad solo te enseñaría a mentirle.",
    },
    {
      h: "Sin cuenta y sin banco",
      p: "No tienes que registrarte ni iniciar sesión. Tu racha vive en tu dispositivo y la app funciona sin internet. FrugalStreak no puede leer nada de tus finanzas reales.",
    },
    {
      h: "iPhone, iPad y iPhone Duo",
      p: "En el iPad y en el iPhone Duo abierto, el calendario aparece junto a tu racha, y el diseño se ajusta al abrir y cerrar el teléfono. La app está en español, inglés, alemán y francés.",
    },
  ],
  pro: {
    h: "FrugalStreak desbloqueado",
    p: "Todo lo anterior es gratis y sin límite de tiempo. Una compra única agrega:",
    points: [
      "Tu archivo completo de rachas, con la duración y las fechas de cada una",
      "El widget de calendario en tamaño mediano y grande, con nueve semanas de un vistazo",
      "Colores personalizados para el widget, incluido Mono",
      "Registrar cualquier día anterior en el calendario",
      "Sin anuncio",
      "Registrar hoy y ayer, el contador, el calendario y las insignias siguen siendo gratis",
    ],
    pricing: "Un solo pago, sin suscripción.",
  },
  faq: [
    {
      q: "¿FrugalStreak es gratis?",
      a: "Sí. Registrar hoy y ayer, el contador de racha, el calendario, las insignias y el recordatorio nocturno son gratis y sin límite de tiempo. Una compra única opcional agrega el archivo de rachas, los widgets de calendario más grandes, colores para el widget y registrar días anteriores, y quita el pequeño anuncio.",
    },
    {
      q: "¿Tengo que conectar mi cuenta bancaria?",
      a: "No, y no se puede. FrugalStreak no tiene conexión bancaria, ni importación, ni servidor. El único dato es tu decisión de si hoy fue un día sin gastar.",
    },
    {
      q: "¿Qué cuenta como gasto?",
      a: "Lo decides tú. Durante la configuración escribes tu regla en una frase. La mayoría excluye la renta, los servicios y el súper, y cuenta todo lo demás.",
    },
    {
      q: "¿Tengo que abrir la app todos los días?",
      a: "No. Un toque en el widget registra el día sin abrir la app. También funcionan el Centro de control y Siri.",
    },
    {
      q: "¿Hay suscripción?",
      a: "No. Hay una compra única opcional y es tuya. Nada se renueva.",
    },
    {
      q: "¿Funciona sin internet?",
      a: "Sí. Todo, excepto la compra opcional, funciona sin conexión porque tu racha se guarda en el dispositivo.",
    },
  ],
  guides: GUIDES,

  ui: {
    navFeatures: "Funciones",
    navGuides: "Guías",
    navFaq: "Preguntas",
    download: "Descargar en el App Store",
    downloadAria: "Descargar {app} en el App Store",
    metaLine: "Gratis · iPhone y iPad · Sin cuenta · Sin internet",
    featuresH: "Qué hace",
    guidesH: "Guías",
    guidesLede: "Las reglas, el calendario y cómo seguir después de un tropiezo.",
    faqH: "Preguntas frecuentes",
    guideFaqH: "Preguntas sobre esto",
    readNext: "Sigue leyendo",
    callout:
      "lleva la cuenta en un solo número. Toca el widget cada día que no gastes, sin presupuesto y sin conexión bancaria.",
    ctaH: "Empieza tu racha hoy",
    ctaLede:
      "Elige tu regla, pon el widget en la pantalla de inicio y tócalo esta noche.",
    home: "Inicio",
    privacy: "Privacidad (en inglés)",
    terms: "Términos de uso (en inglés)",
    support: "Soporte",
    madeBy: "{app} está hecha por {author}.",
    notAffiliated:
      "Sin relación con Apple Inc. App Store es una marca de Apple Inc.",
    moreApps: "Más apps de Neil",
    languages: "Idioma",
    breadcrumb: "Ruta de navegación",
    updated: "Actualizado",
  },
};
