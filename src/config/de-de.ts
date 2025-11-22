// config/de-de.ts
import { SiteContent } from "@/types/site-content";

const dePageContent: SiteContent = {
  layout: {},
  welcome: {
    title: "Willkommen zur Saison 2025 des Hell Let Loose Bain-Servers",
    description:
      "Schließe dich dem epischen Kampf auf dem Bain-Server an! Die Saison 2025 bringt neue Strategien, aktualisierte Karten und eine lebendige Gemeinschaft. Bereite dich auf Action vor!",
    cta: "Fragmente ansehen",
  },
  pages: {
    home: {
      hero: {
        title: "Inglourious Basterds",
        description:
          "Wir durchqueren das Schlachtfeld nicht aus Blutdurst, sondern weil wir wissen, dass Ruhm nur den Mutigen gehört, die es wagen, ihm entgegenzutreten.",
        socialTitle: "Folge uns in den sozialen Medien",
      },
    },
  },
  ui: {
    header: {
      liveLabel: "LIVE-SPIEL",
      liveDotA11y: "live",
    },
    buyVipForm: {
      title: "VIP-Zugang",
      badgeText: "KEINE WARTESCHLANGE",
      heroText:
        "Mit einem VIP-Zugang verabschiedest du dich von Warteschlangen und gehst direkt auf das Schlachtfeld.",
      instructions:
        "Suche nach deinem Namen oder füge deine Steam-ID/Epic-ID ein, um dein Konto zu finden. Nachdem du den Spieler ausgewählt hast, gib deine E-Mail-Adresse ein, um den Zahlungslink und die Bestätigung deiner VIP-Aktivierung zu erhalten.",
      idLabel: "Nickname, Steam-ID oder Epic-ID",
      idPlaceholder:
        "Füge hier deinen Nickname, deine Steam-ID oder Epic-ID ein",
      conditionsTitle: "Bedingungen für den VIP-Kauf:",
      conditions: ["Du musst mindestens einmal auf dem Server gespielt haben."],
      emailLabel: "E-Mail",
      emailPlaceholder: "Gib deine E-Mail-Adresse ein",
      emailHelp:
        "Gib deine E-Mail-Adresse ein, um den Zahlungslink und die Bestätigung deiner VIP-Aktivierung zu erhalten.",
      planLabel: "PLAN",
      monthlyLabel: "Monatlich",
      quarterlyLabel: "Vierteljährlich",
      subtotalLabel: "ZWISCHENSUMME",
      discountLabel: "RABATT",
      totalLabel: "GESAMTBETRAG DES PLANS",
      submitLabel: "ZAHLUNGS-LINK ERSTELLEN",
      currency: "R$",
    },
    buyVipButton: {
      buttonText: "VIP kaufen",
      a11yDescription: "Seitenpanel öffnen, um VIP zu kaufen",
    },
    buyVipHelp: {
      triggerLabel: "Wie kaufe ich VIP?",
      title: "Wie man VIP kauft",
      description:
        "Folge den Schritten, um deine ID zu finden, die Zahlung zu generieren und die VIP-Aktivierung zu bestätigen.",
      steps: [
        {
          title: "1) Finde deine ID",
          body: "Suche nach deinem Nicknamen und wähle aus der Liste, oder füge direkt deine SteamID64 (17 Ziffern) oder Epic ID (32 hexadezimale Zeichen) ein.",
          examples: [
            "Beisp. SteamID64: 76561198012345678",
            "Beisp. Epic ID (hex 32): 4f3a9b1c2d3e4f5a6b7c8d9e0a1b2c3d",
            "Tipp: Bei Nicknamen, gib 3+ Buchstaben ein, um Vorschläge zu sehen",
          ],
        },
        {
          title: "2) Gib eine gültige E-Mail-Adresse an",
          body: "Gib deine E-Mail-Adresse korrekt ein — wir senden den Zahlungslink und die Bestätigung der VIP-Aktivierung.",
          examples: [],
        },
        {
          title: "3) Generiere den Link",
          body: "Klicke auf „Zahlungslink generieren“. Du wirst zur Zahlungsseite weitergeleitet und erhältst den Link auch per E-Mail. Der Link ist 24 Stunden gültig.",
          examples: [],
        },
        {
          title: "4) Automatische Aktivierung",
          body: "Sobald die Zahlung bestätigt ist, wird dein VIP automatisch aktiviert.",
          examples: [],
        },
        {
          title: "5) Wie man die Aktivierung überprüft",
          body: "Suche erneut nach deinem Nicknamen oder deiner ID. Der VIP-Status und das Ablaufdatum werden angezeigt.",
          examples: [],
        },
      ],
    },
    cookieBanner: {
      message:
        "Diese Website verwendet essenzielle Cookies, um zu funktionieren, und mit deiner Zustimmung, um deine Präferenzen zu speichern. Du kannst akzeptieren oder ablehnen.",
      accept: "Akzeptieren",
      reject: "Ablehnen",
      learnMoreLabel: "Erfahre mehr",
      learnMoreHref: "/datenschutzrichtlinie",
    },
    vipNotice: {
      title: "HINWEIS",
      subtitle: "WARTESCHLANGENFREIER ZUGANG",
      headline: "KAUFE VIP AUF DER WEBSITE UND TRET SOFORT BEI.",
      checkboxLabel: "Nicht erneut anzeigen",
      closeLabel: "SCHLIESSEN",
      hotkeyLabel: "[Y]",
    },
  },
};

export default dePageContent;
