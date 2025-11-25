// config/es-la.ts
import { SiteContent } from "@/types/site-content";

const esLaPageContent: SiteContent = {
  layout: {},
  welcome: {
    title: "Bienvenido a la Temporada 2025 del Servidor Bain de Hell Let Loose",
    description:
      "¡Únete a la batalla épica en el servidor Bain! La temporada 2025 trae nuevas estrategias, mapas actualizados y una comunidad vibrante. ¡Prepárate para la acción!",
    cta: "Ver Fragmentos",
  },
  pages: {
    home: {
      hero: {
        title: "Bastardos Inglórios",
        description:
          "Cruzamos el campo de batalla no por sed de sangre, sino porque sabemos que la gloria solo pertenece a los valientes que se atreven a enfrentarla.",
        socialTitle: "Sigue nuestras redes sociales",
      },
    },
  },
  ui: {
    header: {
      liveLabel: "PARTIDA EN VIVO",
      liveDotA11y: "en vivo",
    },
    buyVipForm: {
      title: "Acceso VIP",
      badgeText: "SIN FILA",
      heroText:
        "Al adquirir tu VIP, te despides de las filas y entras directamente al campo de batalla.",
      instructions:
        "Busca por tu nombre o pega tu Steam ID/Epic ID para encontrar tu cuenta. Después de seleccionar al jugador, ingresa tu correo electrónico para recibir el enlace de pago y la confirmación de la activación del VIP.",
      idLabel: "Nickname, Steam ID o Epic ID",
      idPlaceholder: "Pega aquí tu Nickname, Steam ID o Epic ID",
      conditionsTitle: "Condiciones para comprar VIP:",
      conditions: [
        "El usuario debe haber jugado al menos una vez en el servidor.",
      ],
      emailLabel: "Correo electrónico",
      emailPlaceholder: "Ingresa tu correo electrónico",
      emailHelp:
        "Ingresa el correo electrónico para recibir el enlace de pago y la confirmación de la activación del VIP.",
      planLabel: "PLAN",
      monthlyLabel: "Mensual",
      quarterlyLabel: "Trimestral",
      subtotalLabel: "SUBTOTAL",
      discountLabel: "DESCUENTO",
      totalLabel: "TOTAL DEL PLAN",
      submitLabel: "GENERAR ENLACE DE PAGO",
      currency: "R$",
    },
    buyVipButton: {
      buttonText: "Comprar VIP",
      a11yDescription: "Abrir panel lateral para comprar VIP",
    },
    buyVipHelp: {
      triggerLabel: "¿Cómo comprar VIP?",
      title: "Cómo comprar VIP",
      description:
        "Sigue los pasos para localizar tu ID, generar el pago y confirmar la activación del VIP.",
      steps: [
        {
          title: "1) Encuentra tu ID",
          body: "Busca tu apodo y selecciona de la lista, o pega directamente tu SteamID64 (17 dígitos) o Epic ID (32 caracteres hexadecimales).",
          examples: [
            "Ej. SteamID64: 76561198012345678",
            "Ej. Epic ID (hex 32): 4f3a9b1c2d3e4f5a6b7c8d9e0a1b2c3d",
            "Consejo: con apodo, escribe 3+ letras para ver sugerencias",
          ],
        },
        {
          title: "2) Proporciona un correo electrónico válido",
          body: "Ingresa tu correo electrónico correctamente — enviaremos el enlace de pago y la confirmación de activación del VIP.",
          examples: [],
        },
        {
          title: "3) Genera el enlace",
          body: "Haz clic en “Generar enlace de pago”. Serás redirigido a la página de pago y también recibirás el enlace por correo electrónico. El enlace es válido por 24 horas.",
          examples: [],
        },
        {
          title: "4) Activación automática",
          body: "Una vez confirmado el pago, tu VIP se activa automáticamente.",
          examples: [],
        },
        {
          title: "5) Cómo verificar la activación",
          body: "Busca nuevamente tu apodo o ID. Se mostrará el estado de VIP y la fecha de vencimiento.",
          examples: [],
        },
      ],
    },
    cookieBanner: {
      message:
        "Este sitio utiliza cookies esenciales para funcionar y, con tu consentimiento, para recordar tus preferencias. Puedes aceptar o rechazar.",
      accept: "Aceptar",
      reject: "Rechazar",
      learnMoreLabel: "Saber más",
      learnMoreHref: "/politicas-de-privacidade",
    },
    vipNotice: {
      title: "AVISO",
      subtitle: "ACCESO SIN COLA",
      headline: "COMPRA EL VIP EN EL SITIO WEB Y ÚNETE AL INSTANTE.",
      checkboxLabel: "No mostrar de nuevo",
      closeLabel: "CERRAR",
      hotkeyLabel: "[Y]",
    },
  },
};

export default esLaPageContent;
