import { BsDiscord } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';

export const ptBrPageContent = {
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
          { type: 'link-button', label: 'NOSSA HISTÓRIA' },
          { type: 'link-button', label: 'SERVIDORES' },
          { type: 'link', isExternal: false, href: '/enlist', label: 'RECRUTAMENTO' },
        ],
      },
      rightNav: {
        links: [
          { type: 'link-button', label: 'Regras' },
          { type: 'chakra-link', isExternal: true, href: 'https://ranking.bainclan.com.br/', label: 'PARTIDA AO VIVO' },
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
          'Cruzamos o campo de batalha não por sede de sangue, mas porque sabemos que a glória só pertence aos bravos que ousam enfrentá-la.',
        ctaButtons: [
          {
            href: 'https://discord.gg/bainclan',
            variant: 'button',
            label: 'nosso discord',
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
        heading: 'Melhores jogadores do mês de {MONTH}',
        subheading: 'Os 3 jogadores que mais pontuarem neste mês ganharão VIP grátis no próximo mês.',
        vipRewards: {
          firstPlace: '15 dias de VIP',
          secondPlace: '10 dias de VIP',
          thirdPlace: '5 dias de VIP',
        },
        rankings: {
          place: 'Lugar',
          player: 'Jogador',
          games: 'Jogos',
          support: 'Suporte',
          defense: 'Defesa',
          offense: 'Ataque',
          kills: 'Kills',
          deaths: 'Deaths',
        },
        rulesText:
          'Os 3 jogadores que mais pontuarem neste mês ganharão VIP grátis no próximo mês. Consulte as {rulesLink} para saber como participar.',
        linkIndex: 11,
        rulesLinkText: 'regras',
        rules: {
          title: 'Regras para Participação',
          sections: [
            {
              title: 'Tempo de Jogo',
              content:
                'Para ser elegível, cada jogador deve participar de pelo menos 30 minutos de uma partida. Esse tempo mínimo é necessário para garantir a validade da participação no ranking do mês.',
            },
            {
              title: 'Critérios de Desempate',
              content:
                'Em caso de empate na pontuação, o jogador que tiver a maior quantidade de vitórias será considerado o vencedor. Se o empate persistir, o número de assistências será usado como critério de desempate.',
            },
            {
              title: 'Exclusões',
              content:
                'Jogadores que usarem quaisquer tipos de cheats ou exploits serão automaticamente desclassificados. A integridade da competição é nossa prioridade.',
            },
            {
              title: 'Revisão de Resultados',
              content:
                'Todos os resultados serão revisados ao final do mês. Caso seja detectada alguma irregularidade, a participação do jogador será reavaliada e poderá ser invalidada.',
            },
            {
              title: 'Penalidades',
              content:
                'Jogadores que abandonarem a partida antes do término serão penalizados com a perda de pontos. A reincidência pode levar à desclassificação do jogador do ranking mensal.',
            },
            {
              title: 'Comportamento',
              content:
                'É esperado que todos os jogadores mantenham uma conduta esportiva. Qualquer comportamento tóxico, como assédio ou uso de linguagem ofensiva, será motivo de advertência ou desclassificação.',
            },
            {
              title: 'Recompensas',
              content:
                'As recompensas serão distribuídas no início do mês seguinte. Os jogadores que ficarem entre os três primeiros colocados receberão prêmios conforme especificado no anúncio do evento.',
            },
          ],
        },
        countdown: {
          eventEndText: 'Evento terminará em',
        },
        periodSelection: {
          label: 'Período:',
          options: {
            monthly: 'Mensal',
            seasson: 'Temporada',
          },
        },
      },
      seasson: {
        heading: 'Melhores jogadores da temporada',
        subheading: 'Os 3 jogadores que mais pontuarem neste mês ganharão VIP grátis no próximo mês.',
        vipRewards: {
          firstPlace: 'Skin do cabelinho',
          secondPlace: 'Skin',
          thirdPlace: 'Skin',
        },
        rankings: {
          place: 'Lugar',
          player: 'Jogador',
          games: 'Jogos',
          support: 'Suporte',
          defense: 'Defesa',
          offense: 'Ataque',
          kills: 'Kills',
          deaths: 'Deaths',
        },
        rulesText:
          'Os 3 jogadores que mais pontuarem neste mês ganharão VIP grátis no próximo mês. Consulte as {rulesLink} para saber como participar.',
        linkIndex: 11,
        rulesLinkText: 'regras',
        rules: {
          title: 'Regras para Participação',
          sections: [
            {
              title: 'Tempo de Jogo',
              content:
                'Para ser elegível, cada jogador deve participar de pelo menos 30 minutos de uma partida. Esse tempo mínimo é necessário para garantir a validade da participação no ranking do mês.',
            },
            {
              title: 'Critérios de Desempate',
              content:
                'Em caso de empate na pontuação, o jogador que tiver a maior quantidade de vitórias será considerado o vencedor. Se o empate persistir, o número de assistências será usado como critério de desempate.',
            },
            {
              title: 'Exclusões',
              content:
                'Jogadores que usarem quaisquer tipos de cheats ou exploits serão automaticamente desclassificados. A integridade da competição é nossa prioridade.',
            },
            {
              title: 'Revisão de Resultados',
              content:
                'Todos os resultados serão revisados ao final do mês. Caso seja detectada alguma irregularidade, a participação do jogador será reavaliada e poderá ser invalidada.',
            },
            {
              title: 'Penalidades',
              content:
                'Jogadores que abandonarem a partida antes do término serão penalizados com a perda de pontos. A reincidência pode levar à desclassificação do jogador do ranking mensal.',
            },
            {
              title: 'Comportamento',
              content:
                'É esperado que todos os jogadores mantenham uma conduta esportiva. Qualquer comportamento tóxico, como assédio ou uso de linguagem ofensiva, será motivo de advertência ou desclassificação.',
            },
            {
              title: 'Recompensas',
              content:
                'As recompensas serão distribuídas no início do mês seguinte. Os jogadores que ficarem entre os três primeiros colocados receberão prêmios conforme especificado no anúncio do evento.',
            },
          ],
        },
        countdown: {
          eventEndText: 'Evento terminará em',
        },
        periodSelection: {
          label: 'Período:',
          options: {
            monthly: 'Mensal',
            seasson: 'Temporada',
          },
        },
      },
    },
    enlist: {
      sideMenu: {
        links: [{ type: 'link', label: 'Recrutamento BAIN', action: 'handleFirstPage' }],
      },
      video: {
        src: '/VIDEO_PROMO_BAIN_8mb.mp4',
        altText: 'Vídeo promocional do clã BAIN',
        overlay: 'rgba(0, 0, 0, 0.8)',
      },
      buttons: {
        enlist: {
          mobile: {
            label: 'ALISTE-SE JÁ',
          },
          desktop: {
            label: 'PREENCHER FORMULÁRIO DE ALISTAMENTO',
          },
        },
      },
      header: {
        title: 'Recrutamento BAIN',
        description:
          'Seja parte do nosso clã e viva intensamente as batalhas de Hell Let Loose. Aliste-se agora e entre para a história dos Bastardos Inglórios!',
      },
      guide: {
        title: 'Processo de Recrutamento',
        baseText:
          'Nossa comunidade é comprometida em proporcionar a melhor experiência no jogo {0}. Para garantir um ambiente colaborativo e competitivo, todos os membros precisam estar alinhados com nossos valores e regras. Por isso, é fundamental que você leia atentamente as {1} e as {2}. Essas diretrizes são essenciais para mantermos a qualidade, o respeito e a organização dentro do clã. Quando estiver pronto para começar sua jornada conosco, o primeiro passo é preencher o {3}.',
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
            content: 'regras de conduta',
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
            content: 'regras do servidor',
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
            content: 'formulário de alistamento',
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
            title: 'Processo de Recrutamento',
            subsections: [
              {
                number: '1.1',
                text: 'Preenchimento do formulário de alistamento.',
                tip: 'Você fornecerá suas informações de contato, SteamID ou GamePassID, apelido no jogo, ID do perfil do Discord e responderá a perguntas sobre seus conhecimentos gerais.',
              },
              {
                number: '1.2',
                text: 'Entrevista com os recrutadores e informações sobre o clã e o competitivo.',
                tip: 'Com o ID do perfil do Discord fornecido no formulário, um recrutador agendará uma entrevista via call. Se aprovado, o recrutador explicará as regras, o funcionamento do competitivo e as expectativas do clã.',
              },
              {
                number: '1.3',
                text: 'Período de avaliação com a tag »BAINr«.',
                tip: 'O recruta terá 30 dias para ser avaliado enquanto usa a tag.',
              },
              {
                number: '1.4',
                text: 'Requisitos durante o período de avaliação.',
                tip: 'Ser ativo no Discord, participar de partidas e seguir as regras são critérios fundamentais.',
              },
              {
                number: '1.5',
                text: 'Prova de Fogo.',
                tip: 'Ao final do período, o recruta passará por uma Prova de Fogo para determinar sua aceitação.',
              },
            ],
          },
        ],
      },
      conductRules: {
        title: 'Regras de Conduta',
        description:
          'As Regras de Conduta garantem um ambiente saudável e respeitoso entre os membros do clã. Todos devem seguir estas diretrizes para garantir harmonia e bom funcionamento da comunidade.',
        rules: [
          {
            number: '1',
            title: 'Respeito e Convivência',
            subsections: [
              {
                number: '1.1',
                text: 'Trate todos os membros com respeito, cordialidade e educação.',
                tip: 'Evite linguagem ofensiva, preconceituosa ou discriminatória em qualquer canal de comunicação.',
              },
              {
                number: '1.2',
                text: 'Respeite as diferenças culturais, religiosas e políticas.',
                tip: 'Debates são permitidos, desde que mantidos em tom respeitoso e amigável.',
              },
              {
                number: '1.3',
                text: 'Assédio e bullying não serão tolerados.',
                tip: 'Qualquer forma de intimidação, perseguição ou constrangimento é passível de punição.',
              },
            ],
          },
          {
            number: '2',
            title: 'Comportamento no Jogo',
            subsections: [
              {
                number: '2.1',
                text: 'Proibido o uso de cheats, hacks ou exploits.',
                tip: 'Qualquer vantagem injusta sobre outros jogadores é estritamente proibida.',
              },
              {
                number: '2.2',
                text: 'Jogue em equipe e colabore com os companheiros.',
                tip: 'A comunicação e o trabalho em equipe são essenciais para o sucesso do clã.',
              },
              {
                number: '2.3',
                text: 'Evite atitudes tóxicas durante as partidas.',
                tip: 'Não culpe ou xingue outros jogadores por erros ou derrotas.',
              },
            ],
          },
          {
            number: '3',
            title: 'Uso dos Canais de Comunicação',
            subsections: [
              {
                number: '3.1',
                text: 'Utilize os canais adequados para cada assunto.',
                tip: 'Isso ajuda a manter a organização e facilita a comunicação entre os membros.',
              },
              {
                number: '3.2',
                text: 'Evite spam e mensagens repetitivas.',
                tip: 'Mensagens em excesso podem atrapalhar a comunicação dos demais membros.',
              },
              {
                number: '3.3',
                text: 'Conteúdos impróprios são proibidos.',
                tip: 'Não compartilhe conteúdo adulto, violento ou ilegal nos canais do clã.',
              },
            ],
          },
          {
            number: '4',
            title: 'Comprometimento e Participação',
            subsections: [
              {
                number: '4.1',
                text: 'Seja ativo nas atividades do clã.',
                tip: 'A participação regular fortalece o clã e melhora a experiência de todos.',
              },
              {
                number: '4.2',
                text: 'Avise em caso de ausência prolongada.',
                tip: 'Informe aos líderes se precisar se ausentar por um período significativo.',
              },
              {
                number: '4.3',
                text: 'Contribua para um ambiente positivo.',
                tip: 'Sua atitude influencia a moral e a motivação dos demais membros.',
              },
            ],
          },
          {
            number: '5',
            title: 'Punições e Consequências',
            subsections: [
              {
                number: '5.1',
                text: 'Violação das regras resultará em punições.',
                tip: 'As punições podem variar de advertências a expulsão do clã, dependendo da gravidade.',
              },
              {
                number: '5.2',
                text: 'Reincidências agravam as penalidades.',
                tip: 'Múltiplas infrações serão tratadas com maior rigor pela liderança.',
              },
              {
                number: '5.3',
                text: 'Direito de defesa.',
                tip: 'O membro tem o direito de se defender perante a liderança em caso de acusação.',
              },
            ],
          },
        ],
      },
      serverRules: {
        title: 'Regras do Servidor',
        description:
          'Para garantir uma experiência de jogo justa, estabelecemos regras específicas para o servidor. Seguir essas diretrizes é essencial.',
        rules: [
          {
            number: '1',
            text: 'Obrigatoriedade de Oficial no Pelotão',
            tip: 'É estritamente necessário ter um oficial no pelotão com VOIP ativo e que fale português. Pelotões sem oficial poderão ser punidos com kick.',
          },
          {
            number: '2',
            text: 'Nível Mínimo para Classes Específicas',
            type: 'withinnerlist',
            innerList: [
              'Comandante: nível 70',
              'Vigia Recon: nível 50',
              'Comandante de Blindado: nível 30',
              'Oficial de Infantaria: nível 30',
            ],
            orientation: 'vertical',
          },
          {
            number: '3',
            text: 'Proibição de Blindados Monotripulados',
            tip: 'O uso de blindados pesados por apenas um jogador é proibido. Blindados devem ser operados por uma tripulação completa para garantir a efetividade no campo de batalha.',
          },
          {
            number: '4',
            text: 'Regras Durante o Seeding',
            type: 'withinnerlist',
            innerList: [
              'É proibido o uso de blindados e artilharias.',
              'Não é permitida a captura do 4º e 5º setor inimigo.',
              'Durante o seeding, a regra Nível Mínimo para Classes Específicas não está em vigor, ou seja, não existe nível mínimo para nenhuma classe, desde que as mesmas sejam permitidas pela moderação.',
            ],
            orientation: 'vertical',
          },
          {
            number: '5',
            text: 'Língua Oficial do Servidor',
            tip: 'A língua oficial do servidor é exclusivamente o português. Comunicações em outros idiomas não são permitidas.',
          },
          {
            number: '6',
            text: 'Comandante com VOIP e Fluente em Português',
            tip: 'É obrigatório ter um comandante com VOIP ativo que se comunique em português para coordenar as ações do time.',
          },
          {
            number: '7',
            text: 'Uso Adequado do VOIP e Rádio',
            tip: 'O uso abusivo do VOIP ou rádio (flood, spam ou música) será punido com kick ou ban, dependendo da gravidade.',
          },
          {
            number: '8',
            text: 'Proibição de Exploits e Bugs',
            tip: 'É proibido se aproveitar de bugs ou falhas do jogo para obter vantagem indevida. Jogadores que forem flagrados utilizando exploits serão punidos.',
          },
          {
            number: '9',
            text: 'Uso de Nomes ou Símbolos Inapropriados',
            tip: 'Nomes de usuário ou símbolos que contenham linguagem ofensiva, propaganda, conotações negativas, ou que façam referência a nazismo, fascismo (o verdadeiro), movimentos extremistas ou ideologias de ódio serão motivo de kick ou ban.',
          },
          {
            number: '10',
            text: 'Ajude a Semear o Servidor',
            tip: 'Jogadores que participam do seeding (ajudam a iniciar o servidor) ganham 24 horas de VIP gratuito como forma de agradecimento.',
          },
        ],
      },
    },
  },
  ui: {
    rulesButton: {
      buttonText: 'REGRAS',
      adminMessage: 'MENSAGEM ADMIN',
      serverName: 'BRASIL HELL',
      serverRulesButton: 'REGRAS DO SERVIDOR',
      conductRulesButton: 'REGRAS DE CONDUTA',
      confirmText: 'SIM',
      confirmShortcut: '[Y]',
      closeButton: 'FECHAR',
      newServerRules: {
        section1: [
          'Level mínimo (Brasil Hell 70 online)',
          '● Comandante 70',
          '● Vigia Recon 50',
          '● Comandante de Blindado 30',
          '● Oficial de Infantaria 20',
        ],
        section2: [
          'É obrigatorio ter um oficial no pelotão e com voip.',
          'É obrigatorio ter um comandante com voip e que fale português.',
          'A língua oficial do servidor é unicamente o português. Comunicações em outros idiomas não serão permitidas.',
          'Enquanto o servidor não atingir 40 jogadores, não será permitido o uso de blindados e artilharias. Também não será permitida a captura do 4º e 5º setor inimigo.',
        ],
        section3: [
          'Ajude a semear o servidor: até ter 40 jogadores no total, é proibido a captura do 4º e 5º ponto respectivamente. Jogadores que participam do seed ganham 24 horas de VIP free.',
        ],
      },
      conductRules: {
        prohibitedTitle: 'É PROIBIDO',
        section1: [
          '● Xingar ou cometer qualquer ato racista, xenofóbico, homofóbico, entre outros, seja pelo chat de texto ou de voz, resultará em punição/ban.',
          '● O uso de conta secundária no servidor. Caso seja descoberta, será aplicado banimento.',
          '● Uso de cheats (HACK) ou qualquer tipo de ferramenta para benefício próprio. Caso provado, o ban é permanente.',
          '● Qualquer tipo de propaganda/marketing ou divulgação de outros clãs que não seja realizada ou permitida pela administração.',
          '● Streamar sem ocultar o mapa. Desejável a live ter 10 min de delay.',
        ],
        section2: [
          'Uso de nome inapropriado: Nomes de usuário que contenham linguagem ofensiva, propaganda ou conotações negativas serão motivo de kick ou ban.',
          'Ameaçar outros jogadores ou praticar doxxing (divulgação de informações pessoais) resultará em banimento imediato.',
        ],
        section3: [
          'Banimentos serão aplicados mediante denúncias e provas das mesmas.',
          'Respeito às decisões da administração: As decisões tomadas pela administração são finais. No entanto, estamos abertos para discutir qualquer problema ou caso por meio de ticket em nosso Discord.',
        ],
      },
    },
    buyVipButton: {
      buttonText: 'COMPRE VIP',
      closeButtonAriaLabel: 'Fechar',
      modal: {
        titlePart1: 'SEJA',
        titlePart2: 'VIP',
        description:
          'Prepare-se para entrar em ação e garantir seu acesso VIP! Ao adquirir seu VIP, você se despede das filas e avança diretamente para o campo de batalha, além de ajudar a cobrir as despesas do nosso servidor. Suas contribuições são essenciais para mantermos tudo funcionando e garantir uma experiência épica para todos os soldados. Junte-se a nós nesta missão! Adquira seu VIP agora e faça parte da história!',
        plans: [
          {
            name: 'RECRUTA',
            price: 'R$ 0,00',
            imageSrc: '/albert-ev.png',
            altText: 'Recruta',
            description: 'Não tem outro jeito, enfrente fila para entrar no servidor...',
          },
          {
            name: 'SARGENTO',
            price: 'R$ 15,00',
            imageSrc: '/soldier.png',
            altText: 'Sargento',
            description: 'Garanta 30 dias sem precisar pegar filas por este valor',
          },
          {
            name: 'TENENTE',
            price: 'R$ 30,00',
            imageSrc: '/sarge.png',
            altText: 'Tenente',
            description: 'Garanta 2 meses sem precisar pegar filas por este valor',
          },
          {
            name: 'MAJOR',
            originalPrice: 'R$ 45,00',
            discountedPrice: 'R$ 40,00',
            imageSrc: '/major.png',
            altText: 'Major',
            description: 'Garanta 3 meses sem filas e aproveite nosso desconto exclusivo!',
          },
        ],
        ctaButtonText: 'GARANTA JÁ O SEU VIP',
      },
    },
  },
};
