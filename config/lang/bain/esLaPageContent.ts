import { BsDiscord } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';

export const esLaPageContent = {
  layouts: {
    header: {
      homePageButton: {
        href: '/',
        label: 'BAIN',
        url: 'https://media.discordapp.net/attachments/1098376363364327485/1180680008063275058/logo.png?ex=66d1c731&is=66d075b1&hm=5479c91d2b1889b5f8c834ae4a0e808ac732a94f37fb1575f227cfa6c38f3a80&=&format=webp&quality=lossless&width=625&height=625',
      },
      leftNav: {
        links: [
          { type: 'link', isExternal: false, href: '/', label: 'INICIO' },
          { type: 'link-button', label: 'NUESTRA HISTORIA' },
          { type: 'link-button', label: 'SERVIDORES' },
          { type: 'link', isExternal: false, href: '/enlist', label: 'RECLUTAMIENTO' },
        ],
      },
      rightNav: {
        links: [
          { type: 'link-button', label: 'REGLAS' },
          { type: 'chakra-link', isExternal: true, href: 'https://ranking.bainclan.com.br/', label: 'PARTIDA EN VIVO' },
        ],
      },
    },
  },
  pages: {
    home: {
      hero: {
        smallText: '» BAIN «',
        heading: 'Bastardos Inglórios',
        subheading:
          'Cruzamos el campo de batalla no por sed de sangre, sino porque sabemos que la gloria solo pertenece a los valientes que se atreven a enfrentarla.',
        ctaButtons: [
          {
            href: 'https://discord.gg/bainclan',
            variant: 'button',
            label: 'nuestro discord',
            isExternal: true,
            rightIcon: BsDiscord,
          },
          {
            href: 'https://www.instagram.com/bastardos.inglorios_bain/',
            variant: 'button',
            label: 'instagram',
            isExternal: true,
            rightIcon: RiInstagramLine,
          },
        ],
      },
    },
    ranking: {
      monthly: {
        heading: 'Mejores jugadores del mes de {MONTH}',
        subheading: 'Los 3 jugadores con más puntos este mes recibirán VIP gratis el próximo mes.',
        vipRewards: {
          firstPlace: '15 días de VIP',
          secondPlace: '10 días de VIP',
          thirdPlace: '5 días de VIP',
        },
        rankings: {
          place: 'Lugar',
          player: 'Jugador',
          games: 'Juegos',
          support: 'Soporte',
          defense: 'Defensa',
          offense: 'Ataque',
          kills: 'Kills',
          deaths: 'Muertes',
        },
        rulesText:
          'Los 3 jugadores con más puntos este mes recibirán VIP gratis el próximo mes. Consulta las {rulesLink} para saber cómo participar.',
        linkIndex: 11,
        rulesLinkText: 'reglas',
        rules: {
          title: 'Reglas para Participar',
          sections: [
            {
              title: 'Tiempo de Juego',
              content:
                'Para ser elegible, cada jugador debe participar al menos 30 minutos en una partida. Este tiempo mínimo es necesario para asegurar la validez de la participación en el ranking del mes.',
            },
            {
              title: 'Criterios de Desempate',
              content:
                'En caso de empate en puntos, el jugador con la mayor cantidad de victorias será considerado el ganador. Si el empate persiste, el número de asistencias se usará como criterio de desempate.',
            },
            {
              title: 'Exclusiones',
              content:
                'Los jugadores que utilicen cualquier tipo de trampas o exploits serán automáticamente descalificados. La integridad de la competencia es nuestra prioridad.',
            },
            {
              title: 'Revisión de Resultados',
              content:
                'Todos los resultados serán revisados al final del mes. Si se detecta alguna irregularidad, la participación del jugador será reevaluada y podría ser invalidada.',
            },
            {
              title: 'Penalidades',
              content:
                'Los jugadores que abandonen la partida antes de que termine serán penalizados con la pérdida de puntos. La reincidencia puede llevar a la descalificación del jugador del ranking mensual.',
            },
            {
              title: 'Comportamiento',
              content:
                'Se espera que todos los jugadores mantengan una conducta deportiva. Cualquier comportamiento tóxico, como acoso o uso de lenguaje ofensivo, será motivo de advertencia o descalificación.',
            },
            {
              title: 'Recompensas',
              content:
                'Las recompensas se distribuirán a principios del mes siguiente. Los jugadores que queden entre los tres primeros recibirán premios según lo especificado en el anuncio del evento.',
            },
          ],
        },
        countdown: {
          eventEndText: 'El evento terminará en',
        },
        periodSelection: {
          label: 'Período:',
          options: {
            monthly: 'Mensual',
            seasson: 'Temporada',
          },
        },
      },
      seasson: {
        heading: 'Mejores jugadores de la temporada',
        subheading: 'Los 3 jugadores con más puntos este mes recibirán VIP gratis el próximo mes.',
        vipRewards: {
          firstPlace: 'Skin del cabellito',
          secondPlace: 'Skin',
          thirdPlace: 'Skin',
        },
        rankings: {
          place: 'Lugar',
          player: 'Jugador',
          games: 'Juegos',
          support: 'Soporte',
          defense: 'Defensa',
          offense: 'Ataque',
          kills: 'Kills',
          deaths: 'Muertes',
        },
        rulesText:
          'Los 3 jugadores con más puntos este mes recibirán VIP gratis el próximo mes. Consulta las {rulesLink} para saber cómo participar.',
        linkIndex: 11,
        rulesLinkText: 'reglas',
        rules: {
          title: 'Reglas para Participar',
          sections: [
            {
              title: 'Tiempo de Juego',
              content:
                'Para ser elegible, cada jugador debe participar al menos 30 minutos en una partida. Este tiempo mínimo es necesario para asegurar la validez de la participación en el ranking del mes.',
            },
            {
              title: 'Criterios de Desempate',
              content:
                'En caso de empate en puntos, el jugador con la mayor cantidad de victorias será considerado el ganador. Si el empate persiste, el número de asistencias se usará como criterio de desempate.',
            },
            {
              title: 'Exclusiones',
              content:
                'Los jugadores que utilicen cualquier tipo de trampas o exploits serán automáticamente descalificados. La integridad de la competencia es nuestra prioridad.',
            },
            {
              title: 'Revisión de Resultados',
              content:
                'Todos los resultados serán revisados al final del mes. Si se detecta alguna irregularidad, la participación del jugador será reevaluada y podría ser invalidada.',
            },
            {
              title: 'Penalidades',
              content:
                'Los jugadores que abandonen la partida antes de que termine serán penalizados con la pérdida de puntos. La reincidencia puede llevar a la descalificación del jugador del ranking mensual.',
            },
            {
              title: 'Comportamiento',
              content:
                'Se espera que todos los jugadores mantengan una conducta deportiva. Cualquier comportamiento tóxico, como acoso o uso de lenguaje ofensivo, será motivo de advertencia o descalificación.',
            },
            {
              title: 'Recompensas',
              content:
                'Las recompensas se distribuirán a principios del mes siguiente. Los jugadores que queden entre los tres primeros recibirán premios según lo especificado en el anuncio del evento.',
            },
          ],
        },
        countdown: {
          eventEndText: 'El evento terminará en',
        },
        periodSelection: {
          label: 'Período:',
          options: {
            monthly: 'Mensual',
            seasson: 'Temporada',
          },
        },
      },
    },
    enlist: {
      sideMenu: {
        links: [{ type: 'link', label: 'Reclutamiento BAIN', action: 'handleFirstPage' }],
      },
      video: {
        src: '/VIDEO_PROMO_BAIN_8mb.mp4',
        altText: 'Video promocional del clan BAIN',
        overlay: 'rgba(0, 0, 0, 0.8)',
      },
      buttons: {
        enlist: {
          mobile: {
            label: 'ALÍSTATE AHORA',
          },
          desktop: {
            label: 'LLENAR FORMULARIO DE ALISTAMIENTO',
          },
        },
      },
      header: {
        title: 'Reclutamiento BAIN',
        description:
          'Sé parte de nuestro clan y vive intensamente las batallas de Hell Let Loose. ¡Alístate ahora y forma parte de la historia de los Bastardos Ingloriosos!',
      },
      guide: {
        title: 'Proceso de Reclutamiento',
        baseText:
          'Nuestra comunidad está comprometida en proporcionar la mejor experiencia en el juego {0}. Para garantizar un ambiente colaborativo y competitivo, todos los miembros deben estar alineados con nuestros valores y reglas. Por eso, es fundamental que leas atentamente las {1} y las {2}. Estas directrices son esenciales para mantener la calidad, el respeto y la organización dentro del clan. Cuando estés listo para comenzar tu viaje con nosotros, el primer paso es completar el {3}.',
        components: [
          {
            index: 0,
            content: 'Hell Let Loose',
            type: 'externalLink',
            props: {
              color: 'teal.500',
              href: 'https://store.steampowered.com/app/686810/Hell_Let_Loose/',
              isExternal: true,
            },
          },
          {
            index: 1,
            content: 'reglas de conducta',
            type: 'link',
            props: {
              color: 'teal.500',
              actionType: 'setViewIndex',
              actionValue: 1,
              cursor: 'pointer',
            },
          },
          {
            index: 2,
            content: 'reglas del servidor',
            type: 'link',
            props: {
              color: 'teal.500',
              actionType: 'setViewIndex',
              actionValue: 2,
              cursor: 'pointer',
            },
          },
          {
            index: 3,
            content: 'formulario de alistamiento',
            type: 'externalLinkWithIcon',
            props: {
              color: 'brand.500',
              href: '/',
              isExternal: true,
              icon: 'RiExternalLinkLine',
            },
          },
        ],
        sections: [
          {
            number: '1',
            title: 'Proceso de Reclutamiento',
            subsections: [
              {
                number: '1.1',
                text: 'Llenado del formulario de alistamiento.',
                tip: 'Proporcionarás tu información de contacto, SteamID o GamePassID, apodo en el juego, ID de perfil de Discord y responderás preguntas sobre tus conocimientos generales.',
              },
              {
                number: '1.2',
                text: 'Entrevista con los reclutadores.',
                tip: 'Con el ID de perfil de Discord proporcionado en el formulario, un reclutador programará una entrevista vía llamada.',
              },
              {
                number: '1.3',
                text: 'Información sobre el clan y el competitivo.',
                tip: 'Si eres aprobado, el reclutador explicará las reglas, el funcionamiento del competitivo y las expectativas del clan.',
              },
              {
                number: '1.4',
                text: 'Período de evaluación con la etiqueta »BAINr«.',
                tip: 'El recluta tendrá 30 días para ser evaluado mientras usa la etiqueta.',
              },
              {
                number: '1.5',
                text: 'Requisitos durante el período de evaluación.',
                tip: 'Ser activo en Discord, participar en partidas y seguir las reglas son criterios fundamentales.',
              },
              {
                number: '1.6',
                text: 'Prueba de Fuego.',
                tip: 'Al final del período, el recluta pasará por una Prueba de Fuego para determinar su aceptación.',
              },
            ],
          },
        ],
      },
      conductRules: {
        title: 'Reglas de Conducta',
        description:
          'Las Reglas de Conducta garantizan un ambiente saludable y respetuoso entre los miembros del clan. Todos deben seguir estas directrices para garantizar la armonía y el buen funcionamiento de la comunidad.',
        rules: [
          {
            number: '1',
            title: 'Respeto y Convivencia',
            subsections: [
              {
                number: '1.1',
                text: 'Trata a todos los miembros con respeto, cordialidad y educación.',
                tip: 'Evita lenguaje ofensivo, prejuicioso o discriminatorio en cualquier canal de comunicación.',
              },
              {
                number: '1.2',
                text: 'Respeta las diferencias culturales, religiosas y políticas.',
                tip: 'Los debates están permitidos, siempre que se mantengan en tono respetuoso y amigable.',
              },
              {
                number: '1.3',
                text: 'El acoso y el bullying no serán tolerados.',
                tip: 'Cualquier forma de intimidación, persecución o humillación es susceptible de sanción.',
              },
            ],
          },
          {
            number: '2',
            title: 'Comportamiento en el Juego',
            subsections: [
              {
                number: '2.1',
                text: 'Prohibido el uso de cheats, hacks o exploits.',
                tip: 'Cualquier ventaja injusta sobre otros jugadores está estrictamente prohibida.',
              },
              {
                number: '2.2',
                text: 'Juega en equipo y colabora con tus compañeros.',
                tip: 'La comunicación y el trabajo en equipo son esenciales para el éxito del clan.',
              },
              {
                number: '2.3',
                text: 'Evita actitudes tóxicas durante las partidas.',
                tip: 'No culpes o insultes a otros jugadores por errores o derrotas.',
              },
            ],
          },
          {
            number: '3',
            title: 'Uso de los Canales de Comunicación',
            subsections: [
              {
                number: '3.1',
                text: 'Utiliza los canales adecuados para cada asunto.',
                tip: 'Esto ayuda a mantener la organización y facilita la comunicación entre los miembros.',
              },
              {
                number: '3.2',
                text: 'Evita el spam y mensajes repetitivos.',
                tip: 'Los mensajes excesivos pueden obstaculizar la comunicación de los demás miembros.',
              },
              {
                number: '3.3',
                text: 'Contenido inapropiado está prohibido.',
                tip: 'No compartas contenido adulto, violento o ilegal en los canales del clan.',
              },
            ],
          },
          {
            number: '4',
            title: 'Compromiso y Participación',
            subsections: [
              {
                number: '4.1',
                text: 'Sé activo en las actividades del clan.',
                tip: 'La participación regular fortalece el clan y mejora la experiencia de todos.',
              },
              {
                number: '4.2',
                text: 'Avisa en caso de ausencia prolongada.',
                tip: 'Informa a los líderes si necesitas ausentarte por un período significativo.',
              },
              {
                number: '4.3',
                text: 'Contribuye a un ambiente positivo.',
                tip: 'Tu actitud influye en la moral y motivación de los demás miembros.',
              },
            ],
          },
          {
            number: '5',
            title: 'Sanciones y Consecuencias',
            subsections: [
              {
                number: '5.1',
                text: 'La violación de las reglas resultará en sanciones.',
                tip: 'Las sanciones pueden variar desde advertencias hasta la expulsión del clan, dependiendo de la gravedad.',
              },
              {
                number: '5.2',
                text: 'Las reincidencias agravan las penalidades.',
                tip: 'Múltiples infracciones serán tratadas con mayor rigor por el liderazgo.',
              },
              {
                number: '5.3',
                text: 'Derecho a defensa.',
                tip: 'El miembro tiene derecho a defenderse ante el liderazgo en caso de acusación.',
              },
            ],
          },
        ],
      },
      serverRules: {
        title: 'Reglas del Servidor',
        description:
          'Para garantizar una experiencia de juego justa, hemos establecido reglas específicas para el servidor. Seguir estas directrices es esencial.',
        rules: [
          {
            number: '1',
            text: 'Obligatoriedad de Oficial en el Pelotón',
            tip: 'Es estrictamente necesario tener un oficial en el pelotón con VOIP activo y que hable portugués. Pelotones sin oficial podrán ser expulsados.',
          },
          {
            number: '2',
            text: 'Nivel Mínimo para Clases Específicas',
            type: 'withinnerlist',
            innerList: [
              'Comandante: nivel 70',
              'Observador de Reconocimiento: nivel 50',
              'Comandante de Tanque: nivel 30',
              'Oficial de Infantería: nivel 30',
            ],
            orientation: 'vertical',
          },
          {
            number: '3',
            text: 'Prohibición de Tanques Tripulados por una Persona',
            tip: 'El uso de tanques pesados por un solo jugador está prohibido. Los tanques deben ser operados por una tripulación completa para garantizar la efectividad en el campo de batalla.',
          },
          {
            number: '4',
            text: 'Reglas Durante el Seeding',
            type: 'withinnerlist',
            innerList: [
              'Está prohibido el uso de tanques y artillería.',
              'No se permite la captura del 4º y 5º sector enemigo.',
              'Durante el seeding, la regla de Nivel Mínimo para Clases Específicas no está en vigor; es decir, no existe nivel mínimo para ninguna clase, siempre que sean permitidas por la moderación.',
            ],
            orientation: 'vertical',
          },
          {
            number: '5',
            text: 'Idioma Oficial del Servidor',
            tip: 'El idioma oficial del servidor es exclusivamente el portugués. No se permiten comunicaciones en otros idiomas.',
          },
          {
            number: '6',
            text: 'Comandante con VOIP y Fluidez en Portugués',
            tip: 'Es obligatorio tener un comandante con VOIP activo que se comunique en portugués para coordinar las acciones del equipo.',
          },
          {
            number: '7',
            text: 'Uso Adecuado del VOIP y Radio',
            tip: 'El uso abusivo del VOIP o radio (flood, spam o música) será sancionado con expulsión o baneo, dependiendo de la gravedad.',
          },
          {
            number: '8',
            text: 'Prohibición de Exploits y Bugs',
            tip: 'Está prohibido aprovecharse de bugs o fallos del juego para obtener ventaja indebida. Los jugadores que sean sorprendidos utilizando exploits serán sancionados.',
          },
          {
            number: '9',
            text: 'Uso de Nombres o Símbolos Inapropiados',
            tip: 'Nombres de usuario o símbolos que contengan lenguaje ofensivo, propaganda, connotaciones negativas, o que hagan referencia al nazismo, fascismo (el verdadero), movimientos extremistas o ideologías de odio serán motivo de expulsión o baneo.',
          },
          {
            number: '10',
            text: 'Ayuda a Sembrar el Servidor',
            tip: 'Los jugadores que participan en el seeding (ayudan a iniciar el servidor) ganan 24 horas de VIP gratuito como forma de agradecimiento.',
          },
        ],
      },
    },
  },
  ui: {
    rulesButton: {
      buttonText: 'REGLAS',
      adminMessage: 'MENSAJE ADMIN',
      serverName: 'BRASIL HELL',
      serverRulesButton: 'REGLAS DEL SERVIDOR',
      conductRulesButton: 'REGLAS DE CONDUCTA',
      confirmText: 'SÍ',
      confirmShortcut: '[Y]',
      closeButton: 'CERRAR',
      newServerRules: {
        section1: [
          'Nivel mínimo (Brasil Hell 70 en línea)',
          '● Comandante 70',
          '● Observador de Reconocimiento 50',
          '● Comandante de Blindado 30',
          '● Oficial de Infantería 20',
        ],
        section2: [
          'Es obligatorio tener un oficial en el pelotón con chat de voz.',
          'Es obligatorio tener un comandante con chat de voz que hable portugués.',
          'El idioma oficial del servidor es exclusivamente portugués. No se permiten comunicaciones en otros idiomas.',
          'Hasta que el servidor alcance 40 jugadores, no se permite el uso de blindados y artillería. Tampoco se permite capturar el 4º y 5º sector enemigo.',
        ],
        section3: [
          'Ayuda a sembrar el servidor: hasta tener un total de 40 jugadores, está prohibido capturar el 4º y 5º punto respectivamente. Los jugadores que participen en el seeding reciben 24 horas de VIP gratis.',
        ],
      },
      conductRules: {
        prohibitedTitle: 'ESTÁ PROHIBIDO',
        section1: [
          '● Insultar o cometer cualquier acto racista, xenófobo, homofóbico, entre otros, ya sea por chat de texto o de voz, resultará en castigo/baneo.',
          '● El uso de una cuenta secundaria en el servidor. Si se descubre, se aplicará un baneo.',
          '● Uso de cheats (HACK) o cualquier tipo de herramienta para beneficio propio. Si se prueba, el baneo es permanente.',
          '● Cualquier tipo de publicidad/marketing o promoción de otros clanes que no sea realizada o permitida por la administración.',
          '● Transmitir en vivo sin ocultar el mapa. Se recomienda que el directo tenga un retraso de 10 minutos.',
        ],
        section2: [
          'Uso de nombres inapropiados: Los nombres de usuario que contengan lenguaje ofensivo, publicidad o connotaciones negativas serán motivo de expulsión o baneo.',
          'Amenazar a otros jugadores o practicar doxxing (divulgación de información personal) resultará en baneo inmediato.',
        ],
        section3: [
          'Los baneos se aplicarán mediante denuncias y pruebas de las mismas.',
          'Respeto a las decisiones de la administración: Las decisiones tomadas por la administración son finales. Sin embargo, estamos abiertos a discutir cualquier problema o caso a través de un ticket en nuestro Discord.',
        ],
      },
    },
    buyVipButton: {
      buttonText: 'COMPRAR VIP',
      closeButtonAriaLabel: 'Cerrar',
      modal: {
        titlePart1: 'CONVIÉRTETE EN',
        titlePart2: 'VIP',
        description:
          '¡Prepárate para entrar en acción y asegurar tu acceso VIP! Al adquirir tu VIP, te despides de las colas y avanzas directamente al campo de batalla, además de ayudar a cubrir los gastos de nuestro servidor. Tus contribuciones son esenciales para mantener todo funcionando y garantizar una experiencia épica para todos los soldados. ¡Únete a nosotros en esta misión! ¡Adquiere tu VIP ahora y sé parte de la historia!',
        plans: [
          {
            name: 'RECLUTA',
            price: '$0.00',
            imageSrc: '/albert-ev.png',
            altText: 'Recluta',
            description: 'No hay otra manera, enfréntate a la cola para entrar al servidor...',
          },
          {
            name: 'SARGENTO',
            price: '$15.00 BRL',
            imageSrc: '/soldier.png',
            altText: 'Sargento',
            description: 'Asegura 30 días sin necesidad de hacer cola por este monto',
          },
          {
            name: 'TENIENTE',
            price: '$30.00 BRL',
            imageSrc: '/sarge.png',
            altText: 'Teniente',
            description: 'Asegura 2 meses sin necesidad de hacer cola por este monto',
          },
          {
            name: 'MAYOR',
            originalPrice: '$45.00',
            discountedPrice: '$40.00 BRL',
            imageSrc: '/major.png',
            altText: 'Mayor',
            description: '¡Asegura 3 meses sin colas y disfruta de nuestro descuento exclusivo!',
          },
        ],
        ctaButtonText: 'ASEGURA TU VIP AHORA',
      },
    },
  },
};
