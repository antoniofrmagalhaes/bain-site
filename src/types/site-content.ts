// src/types/site-content.ts
export type SiteContent = {
  layout: Record<string, unknown>;
  welcome: {
    title: string;
    description: string;
    cta: string;
  };
  pages: {
    home: {
      hero: {
        title: string;
        description: string;
        socialTitle: string;
      };
    };
  };
  ui: {
    header: {
      liveLabel: string;
      liveDotA11y: string;
    };
    buyVipForm: {
      title: string;
      badgeText: string;
      heroText: string;
      instructions: string;
      idLabel: string;
      idPlaceholder: string;
      conditionsTitle: string;
      conditions: string[];
      emailLabel: string;
      emailPlaceholder: string;
      emailHelp: string;
      planLabel: string;
      monthlyLabel: string;
      quarterlyLabel: string;
      subtotalLabel: string;
      discountLabel: string;
      totalLabel: string;
      submitLabel: string;
      currency: string;
    };
    buyVipButton: {
      buttonText: string;
      a11yDescription: string;
    };
    buyVipHelp: {
      triggerLabel: string;
      title: string;
      description: string;
      steps: { title: string; body: string; examples?: string[] }[];
    };
    cookieBanner: {
      message: string;
      accept: string;
      reject: string;
      learnMoreLabel: string;
      learnMoreHref: string;
      regionLabel?: string;
      title?: string;
    };
    vipNotice: {
      title: string;
      subtitle: string;
      headline: string;
      checkboxLabel: string;
      closeLabel: string;
      hotkeyLabel: string;
    };
  };
};