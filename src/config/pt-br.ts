// config/pt-br.ts
import { SiteContent } from "@/types/site-content";

const ptBrPageContent: SiteContent = {
  layout: {},
  welcome: {
    title: "Bem-vindo à Temporada 2025 do Servidor Bain de Hell Let Loose",
    description:
      "Junte-se à batalha épica no servidor Bain! A temporada 2025 traz novas estratégias, mapas atualizados e uma comunidade vibrante. Prepare-se para a ação!",
    cta: "Ver Fragmentos",
  },
  pages: {
    home: {
      hero: {
        title: "Bastardos Inglórios",
        description:
          "Cruzamos o campo de batalha não por sede de sangue, mas porque sabemos que a glória só pertence aos bravos que ousam enfrentá-la.",
        socialTitle: "Siga nossas redes sociais",
      },
    },
  },
  ui: {
    header: {
      liveLabel: "PARTIDA AO VIVO",
      liveDotA11y: "ao vivo",
    },
    buyVipForm: {
      title: "Acesso VIP",
      badgeText: "SEM FILA",
      heroText:
        "Ao adquirir seu VIP, você se despede das filas e avança diretamente para o campo de batalha.",
      instructions:
        "Busque pelo seu nome ou cole o seu Steam ID/Epic ID para localizar sua conta. Após selecionar o jogador, informe seu e-mail para receber o link de pagamento e a confirmação da ativação do VIP.",
      idLabel: "Nickname, ID Steam ou Epic ID",
      idPlaceholder: "Cole aqui o seu Nickname, ID Steam ou Epic ID",
      conditionsTitle: "Condições para comprar VIP:",
      conditions: ["Usuário deve ter jogado pelo menos 1 vez no servidor."],
      emailLabel: "E-mail",
      emailPlaceholder: "Digite seu e-mail",
      emailHelp:
        "Informe o e-mail para receber o link de pagamento e a confirmação da ativação do VIP.",
      planLabel: "PLANO",
      monthlyLabel: "Mensal",
      quarterlyLabel: "Trimestral",
      subtotalLabel: "SUBTOTAL",
      discountLabel: "DESCONTO",
      totalLabel: "TOTAL DO PLANO",
      submitLabel: "GERAR LINK DE PAGAMENTO",
      currency: "R$",
    },
    buyVipButton: {
      buttonText: "Comprar VIP",
      a11yDescription: "Abrir painel lateral para comprar VIP",
    },
    buyVipHelp: {
      triggerLabel: "Como comprar VIP?",
      title: "Como comprar VIP",
      description:
        "Siga os passos para localizar seu ID, gerar o pagamento e confirmar a ativação do VIP.",
      steps: [
        {
          title: "1) Encontre seu ID",
          body: "Pesquise pelo seu nickname e selecione na lista, ou cole diretamente seu SteamID64 (17 dígitos) ou Epic ID (32 caracteres hexadecimais).",
          examples: [
            "Ex. SteamID64: 76561198012345678",
            "Ex. Epic ID (hex 32): 4f3a9b1c2d3e4f5a6b7c8d9e0a1b2c3d",
            "Dica: com nickname, digite 3+ letras para ver sugestões",
          ],
        },
        {
          title: "2) Informe um e-mail válido",
          body: "Digite seu e-mail corretamente — enviaremos o link do pagamento e também a confirmação da ativação do VIP.",
          examples: [],
        },
        {
          title: "3) Gere o link",
          body: "Clique em “Gerar link de pagamento”. Você será redirecionado para o PIX e também receberá o link no seu e-mail. O link é válido por 24h",
          examples: [],
        },
        {
          title: "4) Ativação automática",
          body: "Após o pagamento ser confirmado, seu VIP é ativado automaticamente.",
          examples: [],
        },
        {
          title: "5) Como verificar a ativação",
          body: "Pesquise novamente pelo seu nickname ou ID. O status de VIP e a data de expiração serão exibidos.",
          examples: [],
        },
      ],
    },
    cookieBanner: {
      message:
        "Este site usa cookies essenciais para funcionar e, com seu consentimento, para lembrar suas preferências. Você pode aceitar ou recusar.",
      accept: "Aceitar",
      reject: "Recusar",
      learnMoreLabel: "Saiba mais",
      learnMoreHref: "/politicas-de-privacidade",
    },
    vipNotice: {
      title: "AVISO",
      subtitle: "ACESSO SEM FILA",
      headline: "COMPRE O VIP PELO SITE E ENTRE NA HORA.",
      checkboxLabel: "Não mostrar novamente",
      closeLabel: "FECHAR",
      hotkeyLabel: "[Y]",
    },
  },
};

export default ptBrPageContent;
