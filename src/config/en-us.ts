// config/en-us.ts
import { SiteContent } from "@/types/site-content";

const enUsPageContent: SiteContent = {
  layout: {},
  welcome: {
    title: "Welcome to the 2025 Season of Hell Let Loose Bain Server",
    description:
      "Join the epic battle on the Bain server! The 2025 season brings new strategies, updated maps, and a vibrant community. Get ready for action!",
    cta: "View Fragments",
  },
  pages: {
    home: {
      hero: {
        title: "Bastardos Inglórios",
        description:
          "We cross the battlefield not out of a thirst for blood, but because we know glory belongs only to the brave who dare to face it.",
        socialTitle: "Follow our social media",
      },
    },
  },
  ui: {
    header: {
      liveLabel: "LIVE MATCH",
      liveDotA11y: "live",
    },
    buyVipForm: {
      title: "VIP Access",
      badgeText: "NO QUEUE",
      heroText:
        "When you purchase VIP, you say goodbye to waiting lines and go straight into the battlefield.",
      instructions:
        "Search for your name or paste your Steam ID/Epic ID to find your account. After selecting the player, enter your email to receive the payment link and the confirmation of your VIP activation.",
      idLabel: "Nickname, Steam ID or Epic ID",
      idPlaceholder: "Paste your Nickname, Steam ID or Epic ID here",
      conditionsTitle: "Conditions to purchase VIP:",
      conditions: ["You must have played on the server at least once."],
      emailLabel: "Email",
      emailPlaceholder: "Enter your email",
      emailHelp:
        "Enter the email to receive the payment link and the confirmation of your VIP activation.",
      planLabel: "PLAN",
      monthlyLabel: "Monthly",
      quarterlyLabel: "Quarterly",
      subtotalLabel: "SUBTOTAL",
      discountLabel: "DISCOUNT",
      totalLabel: "TOTAL PLAN",
      submitLabel: "GENERATE PAYMENT LINK",
      currency: "R$",
    },
    buyVipButton: {
      buttonText: "Buy VIP",
      a11yDescription: "Open side panel to purchase VIP",
    },
    buyVipHelp: {
      triggerLabel: "How to buy VIP?",
      title: "How to Buy VIP",
      description:
        "Follow the steps to locate your ID, generate the payment, and confirm VIP activation.",
      steps: [
        {
          title: "1) Find your ID",
          body: "Search for your nickname and select from the list, or paste your SteamID64 (17 digits) or Epic ID (32 hexadecimal characters) directly.",
          examples: [
            "Ex. SteamID64: 76561198012345678",
            "Ex. Epic ID (hex 32): 4f3a9b1c2d3e4f5a6b7c8d9e0a1b2c3d",
            "Tip: with nickname, type 3+ letters to see suggestions",
          ],
        },
        {
          title: "2) Provide a valid email",
          body: "Enter your email correctly — we will send the payment link and VIP activation confirmation.",
          examples: [],
        },
        {
          title: "3) Generate the link",
          body: "Click “Generate payment link”. You will be redirected to the payment page and also receive the link via email. The link is valid for 24 hours.",
          examples: [],
        },
        {
          title: "4) Automatic activation",
          body: "Once the payment is confirmed, your VIP is activated automatically.",
          examples: [],
        },
        {
          title: "5) How to verify activation",
          body: "Search again for your nickname or ID. The VIP status and expiration date will be displayed.",
          examples: [],
        },
      ],
    },
    cookieBanner: {
      message:
        "This site uses essential cookies to function and, with your consent, to remember your preferences. You can accept or reject.",
      accept: "Accept",
      reject: "Reject",
      learnMoreLabel: "Learn more",
      learnMoreHref: "/politicas-de-privacidade",
    },
    vipNotice: {
      title: "NOTICE",
      subtitle: "QUEUE-FREE ACCESS",
      headline: "BUY VIP ON THE WEBSITE AND JOIN INSTANTLY.",
      checkboxLabel: "Do not show again",
      closeLabel: "CLOSE",
      hotkeyLabel: "[Y]",
    },
  },
};

export default enUsPageContent;
