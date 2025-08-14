import { BsDiscord } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';

export const deDePageContent = {
  layouts: {
    header: {
      homePageButton: {
        href: '/',
        label: 'BAIN',
        url: 'https://media.discordapp.net/attachments/1098376363364327485/1180680008063275058/logo.png?ex=66d1c731&is=66d075b1&hm=5479c91d2b1889b5f8c834ae4a0e808ac732a94f37fb1575f227cfa6c38f3a80&=&format=webp&quality=lossless&width=625&height=625',
      },
      leftNav: {
        links: [
          { type: 'link', isExternal: false, href: '/', label: 'STARTSEITE' },
          { type: 'link-button', label: 'UNSERE GESCHICHTE' },
          { type: 'link-button', label: 'SERVER' },
          { type: 'link', isExternal: false, href: '/enlist', label: 'REKRUTIERUNG' },
        ],
      },
      rightNav: {
        links: [
          { type: 'link-button', label: 'REGELN' },
          { type: 'chakra-link', isExternal: true, href: 'https://ranking.bainclan.com.br/', label: 'LIVE-SPIEL' },
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
          'Wir überqueren das Schlachtfeld nicht aus Blutdurst, sondern weil wir wissen, dass Ruhm nur den Mutigen gehört, die es wagen, sich ihm zu stellen.',
        ctaButtons: [
          {
            href: 'https://discord.gg/bainclan',
            variant: 'button',
            label: 'Unser Discord',
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
        heading: 'Beste Spieler des Monats {MONTH}',
        subheading:
          'Die 3 Spieler mit den meisten Punkten in diesem Monat erhalten im nächsten Monat einen kostenlosen VIP-Zugang.',
        vipRewards: {
          firstPlace: '15 Tage VIP',
          secondPlace: '10 Tage VIP',
          thirdPlace: '5 Tage VIP',
        },
        rankings: {
          place: 'Platz',
          player: 'Spieler',
          games: 'Spiele',
          support: 'Unterstützung',
          defense: 'Verteidigung',
          offense: 'Angriff',
          kills: 'Kills',
          deaths: 'Tode',
        },
        rulesText:
          'Die 3 Spieler mit den meisten Punkten in diesem Monat erhalten im nächsten Monat einen kostenlosen VIP-Zugang. Siehe {rulesLink}, um zu erfahren, wie Sie teilnehmen können.',
        linkIndex: 11,
        rulesLinkText: 'Regeln',
        rules: {
          title: 'Teilnahmeregeln',
          sections: [
            {
              title: 'Spielzeit',
              content:
                'Um teilnahmeberechtigt zu sein, muss jeder Spieler mindestens 30 Minuten an einem Spiel teilnehmen. Diese Mindestspielzeit ist erforderlich, um die Gültigkeit der Teilnahme an der Monatsrangliste zu gewährleisten.',
            },
            {
              title: 'Tiebreaker-Kriterien',
              content:
                'Bei Punktegleichstand wird der Spieler mit den meisten Siegen als Gewinner betrachtet. Bei weiterhin bestehendem Gleichstand wird die Anzahl der Assists als Tiebreaker verwendet.',
            },
            {
              title: 'Ausschlüsse',
              content:
                'Spieler, die Cheats oder Exploits verwenden, werden automatisch disqualifiziert. Die Integrität des Wettbewerbs hat oberste Priorität.',
            },
            {
              title: 'Ergebnisprüfung',
              content:
                'Alle Ergebnisse werden am Ende des Monats überprüft. Sollte eine Unregelmäßigkeit festgestellt werden, wird die Teilnahme des Spielers neu bewertet und kann für ungültig erklärt werden.',
            },
            {
              title: 'Strafen',
              content:
                'Spieler, die ein Spiel vorzeitig verlassen, werden mit Punktabzug bestraft. Wiederholte Verstöße können zur Disqualifikation von der Monatsrangliste führen.',
            },
            {
              title: 'Verhalten',
              content:
                'Von allen Spielern wird erwartet, dass sie sportlich fair handeln. Jedes toxische Verhalten, wie Belästigung oder der Gebrauch von beleidigender Sprache, wird mit einer Verwarnung oder Disqualifikation geahndet.',
            },
            {
              title: 'Belohnungen',
              content:
                'Die Belohnungen werden zu Beginn des folgenden Monats verteilt. Die Spieler, die unter den ersten drei Plätzen landen, erhalten die im Veranstaltungsankündigung spezifizierten Preise.',
            },
          ],
        },
        countdown: {
          eventEndText: 'Das Event endet in',
        },
        periodSelection: {
          label: 'Zeitraum:',
          options: {
            monthly: 'Monatlich',
            seasson: 'Saison',
          },
        },
      },
      seasson: {
        heading: 'Beste Spieler der Saison',
        subheading:
          'Die 3 Spieler mit den meisten Punkten in diesem Monat erhalten im nächsten Monat einen kostenlosen VIP-Zugang.',
        vipRewards: {
          firstPlace: 'Spezial-Skin',
          secondPlace: 'Skin',
          thirdPlace: 'Skin',
        },
        rankings: {
          place: 'Platz',
          player: 'Spieler',
          games: 'Spiele',
          support: 'Unterstützung',
          defense: 'Verteidigung',
          offense: 'Angriff',
          kills: 'Kills',
          deaths: 'Tode',
        },
        rulesText:
          'Die 3 Spieler mit den meisten Punkten in diesem Monat erhalten im nächsten Monat einen kostenlosen VIP-Zugang. Siehe {rulesLink}, um zu erfahren, wie Sie teilnehmen können.',
        linkIndex: 11,
        rulesLinkText: 'Regeln',
        rules: {
          title: 'Teilnahmeregeln',
          sections: [
            {
              title: 'Spielzeit',
              content:
                'Um teilnahmeberechtigt zu sein, muss jeder Spieler mindestens 30 Minuten an einem Spiel teilnehmen. Diese Mindestspielzeit ist erforderlich, um die Gültigkeit der Teilnahme an der Monatsrangliste zu gewährleisten.',
            },
            {
              title: 'Tiebreaker-Kriterien',
              content:
                'Bei Punktegleichstand wird der Spieler mit den meisten Siegen als Gewinner betrachtet. Bei weiterhin bestehendem Gleichstand wird die Anzahl der Assists als Tiebreaker verwendet.',
            },
            {
              title: 'Ausschlüsse',
              content:
                'Spieler, die Cheats oder Exploits verwenden, werden automatisch disqualifiziert. Die Integrität des Wettbewerbs hat oberste Priorität.',
            },
            {
              title: 'Ergebnisprüfung',
              content:
                'Alle Ergebnisse werden am Ende des Monats überprüft. Sollte eine Unregelmäßigkeit festgestellt werden, wird die Teilnahme des Spielers neu bewertet und kann für ungültig erklärt werden.',
            },
            {
              title: 'Strafen',
              content:
                'Spieler, die ein Spiel vorzeitig verlassen, werden mit Punktabzug bestraft. Wiederholte Verstöße können zur Disqualifikation von der Monatsrangliste führen.',
            },
            {
              title: 'Verhalten',
              content:
                'Von allen Spielern wird erwartet, dass sie sportlich fair handeln. Jedes toxische Verhalten, wie Belästigung oder der Gebrauch von beleidigender Sprache, wird mit einer Verwarnung oder Disqualifikation geahndet.',
            },
            {
              title: 'Belohnungen',
              content:
                'Die Belohnungen werden zu Beginn des folgenden Monats verteilt. Die Spieler, die unter den ersten drei Plätzen landen, erhalten die im Veranstaltungsankündigung spezifizierten Preise.',
            },
          ],
        },
        countdown: {
          eventEndText: 'Das Event endet in',
        },
        periodSelection: {
          label: 'Zeitraum:',
          options: {
            monthly: 'Monatlich',
            seasson: 'Saison',
          },
        },
      },
    },
    enlist: {
      sideMenu: {
        links: [{ type: 'link', label: 'BAIN Rekrutierung', action: 'handleFirstPage' }],
      },
      video: {
        src: '/VIDEO_PROMO_BAIN_8mb.mp4',
        altText: 'Werbevideo des BAIN-Clans',
        overlay: 'rgba(0, 0, 0, 0.8)',
      },
      buttons: {
        enlist: {
          mobile: {
            label: 'JETZT REKRUTIEREN',
          },
          desktop: {
            label: 'REKRUTIERUNGSFORMULAR AUSFÜLLEN',
          },
        },
      },
      header: {
        title: 'BAIN Rekrutierung',
        description:
          'Werde Teil unseres Clans und erlebe die Schlachten von Hell Let Loose intensiv. Rekrutiere dich jetzt und werde Teil der Geschichte der Ruhmlosen Bastarde!',
      },
      guide: {
        title: 'Rekrutierungsprozess',
        baseText:
          'Unsere Gemeinschaft ist bestrebt, das beste Erlebnis im Spiel {0} zu bieten. Um ein kollaboratives und wettbewerbsfähiges Umfeld zu gewährleisten, müssen alle Mitglieder mit unseren Werten und Regeln übereinstimmen. Daher ist es wichtig, dass du die {1} und die {2} sorgfältig liest. Diese Richtlinien sind unerlässlich, um Qualität, Respekt und Organisation innerhalb des Clans aufrechtzuerhalten. Wenn du bereit bist, deine Reise mit uns zu beginnen, ist der erste Schritt, das {3} auszufüllen.',
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
            content: 'Verhaltensregeln',
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
            content: 'Serverregeln',
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
            content: 'Rekrutierungsformular',
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
            title: 'Rekrutierungsprozess',
            subsections: [
              {
                number: '1.1',
                text: 'Ausfüllen des Rekrutierungsformulars.',
                tip: 'Du gibst deine Kontaktdaten, SteamID oder GamePassID, Ingame-Spitznamen, Discord-Profil-ID an und beantwortest Fragen zu deinem Allgemeinwissen.',
              },
              {
                number: '1.2',
                text: 'Interview mit den Rekrutierern.',
                tip: 'Mit der im Formular angegebenen Discord-Profil-ID wird ein Rekrutierer ein Interview per Anruf planen.',
              },
              {
                number: '1.3',
                text: 'Informationen über den Clan und den Wettbewerb.',
                tip: 'Wenn du angenommen wirst, wird der Rekrutierer die Regeln, den Ablauf des Wettbewerbs und die Erwartungen des Clans erklären.',
              },
              {
                number: '1.4',
                text: 'Bewertungszeitraum mit dem Tag »BAINr«.',
                tip: 'Der Rekrut hat 30 Tage Zeit, um bewertet zu werden, während er den Tag verwendet.',
              },
              {
                number: '1.5',
                text: 'Anforderungen während des Bewertungszeitraums.',
                tip: 'Aktiv auf Discord zu sein, an Matches teilzunehmen und die Regeln zu befolgen, sind grundlegende Kriterien.',
              },
              {
                number: '1.6',
                text: 'Feuerprobe.',
                tip: 'Am Ende des Zeitraums wird der Rekrut eine Feuerprobe durchlaufen, um über die Aufnahme zu entscheiden.',
              },
            ],
          },
        ],
      },
      conductRules: {
        title: 'Verhaltensregeln',
        description:
          'Die Verhaltensregeln gewährleisten eine gesunde und respektvolle Umgebung unter den Clanmitgliedern. Alle müssen diese Richtlinien befolgen, um Harmonie und das reibungslose Funktionieren der Gemeinschaft sicherzustellen.',
        rules: [
          {
            number: '1',
            title: 'Respekt und Zusammenleben',
            subsections: [
              {
                number: '1.1',
                text: 'Behandle alle Mitglieder mit Respekt, Höflichkeit und Anstand.',
                tip: 'Vermeide beleidigende, voreingenommene oder diskriminierende Sprache in jedem Kommunikationskanal.',
              },
              {
                number: '1.2',
                text: 'Respektiere kulturelle, religiöse und politische Unterschiede.',
                tip: 'Debatten sind erlaubt, sofern sie respektvoll und freundlich geführt werden.',
              },
              {
                number: '1.3',
                text: 'Belästigung und Mobbing werden nicht toleriert.',
                tip: 'Jegliche Form von Einschüchterung, Verfolgung oder Bloßstellung wird bestraft.',
              },
            ],
          },
          {
            number: '2',
            title: 'Verhalten im Spiel',
            subsections: [
              {
                number: '2.1',
                text: 'Die Verwendung von Cheats, Hacks oder Exploits ist verboten.',
                tip: 'Jeder unfaire Vorteil gegenüber anderen Spielern ist strengstens untersagt.',
              },
              {
                number: '2.2',
                text: 'Spiele im Team und arbeite mit deinen Kameraden zusammen.',
                tip: 'Kommunikation und Teamarbeit sind wesentlich für den Erfolg des Clans.',
              },
              {
                number: '2.3',
                text: 'Vermeide toxisches Verhalten während der Matches.',
                tip: 'Beschuldige oder beleidige andere Spieler nicht für Fehler oder Niederlagen.',
              },
            ],
          },
          {
            number: '3',
            title: 'Verwendung der Kommunikationskanäle',
            subsections: [
              {
                number: '3.1',
                text: 'Verwende die entsprechenden Kanäle für jedes Thema.',
                tip: 'Dies hilft, die Organisation aufrechtzuerhalten und erleichtert die Kommunikation unter den Mitgliedern.',
              },
              {
                number: '3.2',
                text: 'Vermeide Spam und repetitive Nachrichten.',
                tip: 'Übermäßige Nachrichten können die Kommunikation anderer Mitglieder stören.',
              },
              {
                number: '3.3',
                text: 'Unangemessene Inhalte sind verboten.',
                tip: 'Teile keine erwachsenen, gewalttätigen oder illegalen Inhalte in den Clan-Kanälen.',
              },
            ],
          },
          {
            number: '4',
            title: 'Engagement und Teilnahme',
            subsections: [
              {
                number: '4.1',
                text: 'Sei aktiv bei Clan-Aktivitäten.',
                tip: 'Regelmäßige Teilnahme stärkt den Clan und verbessert die Erfahrung für alle.',
              },
              {
                number: '4.2',
                text: 'Melde dich bei längerer Abwesenheit.',
                tip: 'Informiere die Führung, wenn du für einen längeren Zeitraum abwesend sein musst.',
              },
              {
                number: '4.3',
                text: 'Trage zu einer positiven Umgebung bei.',
                tip: 'Deine Einstellung beeinflusst die Moral und Motivation der anderen Mitglieder.',
              },
            ],
          },
          {
            number: '5',
            title: 'Strafen und Konsequenzen',
            subsections: [
              {
                number: '5.1',
                text: 'Verstöße gegen die Regeln führen zu Strafen.',
                tip: 'Die Strafen können von Verwarnungen bis zum Ausschluss aus dem Clan reichen, abhängig von der Schwere.',
              },
              {
                number: '5.2',
                text: 'Wiederholte Verstöße verschärfen die Strafen.',
                tip: 'Mehrfache Verstöße werden von der Führung strenger behandelt.',
              },
              {
                number: '5.3',
                text: 'Recht auf Verteidigung.',
                tip: 'Das Mitglied hat das Recht, sich im Falle einer Anschuldigung vor der Führung zu verteidigen.',
              },
            ],
          },
        ],
      },
      serverRules: {
        title: 'Serverregeln',
        description:
          'Um ein faires Spielerlebnis zu gewährleisten, haben wir spezifische Regeln für den Server festgelegt. Die Einhaltung dieser Richtlinien ist unerlässlich.',
        rules: [
          {
            number: '1',
            text: 'Pflicht eines Offiziers im Trupp',
            tip: 'Es ist zwingend erforderlich, einen Offizier im Trupp mit aktivem VOIP zu haben, der Portugiesisch spricht. Trupps ohne Offizier können gekickt werden.',
          },
          {
            number: '2',
            text: 'Mindestlevel für bestimmte Klassen',
            type: 'withinnerlist',
            innerList: [
              'Kommandant: Level 70',
              'Aufklärer Beobachter: Level 50',
              'Panzerkommandant: Level 30',
              'Infanterie Offizier: Level 30',
            ],
            orientation: 'vertical',
          },
          {
            number: '3',
            text: 'Verbot von Ein-Mann-Panzern',
            tip: 'Die Nutzung schwerer Panzer durch nur einen Spieler ist verboten. Panzer müssen von einer vollständigen Besatzung betrieben werden, um Effektivität auf dem Schlachtfeld zu gewährleisten.',
          },
          {
            number: '4',
            text: 'Regeln während des Seedings',
            type: 'withinnerlist',
            innerList: [
              'Der Einsatz von Panzern und Artillerie ist verboten.',
              'Das Einnehmen des 4. und 5. feindlichen Sektors ist nicht erlaubt.',
              'Während des Seedings gilt die Regel Mindestlevel für bestimmte Klassen nicht; das heißt, es gibt kein Mindestlevel für Klassen, solange sie von der Moderation erlaubt sind.',
            ],
            orientation: 'vertical',
          },
          {
            number: '5',
            text: 'Offizielle Sprache des Servers',
            tip: 'Die offizielle Sprache des Servers ist ausschließlich Portugiesisch. Kommunikation in anderen Sprachen ist nicht erlaubt.',
          },
          {
            number: '6',
            text: 'Kommandant mit VOIP und fließend in Portugiesisch',
            tip: 'Es ist obligatorisch, einen Kommandanten mit aktivem VOIP zu haben, der sich auf Portugiesisch verständigt, um die Aktionen des Teams zu koordinieren.',
          },
          {
            number: '7',
            text: 'Angemessene Nutzung von VOIP und Funk',
            tip: 'Missbräuchliche Nutzung von VOIP oder Funk (Flooding, Spam oder Musik) wird je nach Schwere mit Kick oder Ban bestraft.',
          },
          {
            number: '8',
            text: 'Verbot von Exploits und Bugs',
            tip: 'Es ist verboten, Spielbugs oder -fehler auszunutzen, um unfaire Vorteile zu erlangen. Spieler, die beim Nutzen von Exploits erwischt werden, werden bestraft.',
          },
          {
            number: '9',
            text: 'Verwendung unangemessener Namen oder Symbole',
            tip: 'Benutzernamen oder Symbole, die beleidigende Sprache, Propaganda, negative Konnotationen enthalten oder auf Nationalsozialismus, echten Faschismus, extremistische Bewegungen oder Hassideologien verweisen, führen zu Kick oder Ban.',
          },
          {
            number: '10',
            text: 'Hilf beim Seeden des Servers',
            tip: 'Spieler, die beim Seeding helfen (beim Starten des Servers), erhalten als Dankeschön 24 Stunden VIP kostenlos.',
          },
        ],
      },
    },
  },
  ui: {
    rulesButton: {
      buttonText: 'REGELN',
      adminMessage: 'ADMIN-NACHRICHT',
      serverName: 'BRASIL HELL',
      serverRulesButton: 'SERVERREGELN',
      conductRulesButton: 'VERHALTENSREGELN',
      confirmText: 'JA',
      confirmShortcut: '[Y]',
      closeButton: 'SCHLIESSEN',
      newServerRules: {
        section1: [
          'Mindestlevel (Brasil Hell 70 online)',
          '● Kommandant 70',
          '● Aufklärer 50',
          '● Panzerkommandant 30',
          '● Infanterieoffizier 20',
        ],
        section2: [
          'Es ist verpflichtend, einen Offizier im Trupp mit Voice-Chat zu haben.',
          'Es ist verpflichtend, einen Kommandanten mit Voice-Chat zu haben, der Portugiesisch spricht.',
          'Die offizielle Sprache des Servers ist ausschließlich Portugiesisch. Kommunikation in anderen Sprachen ist nicht gestattet.',
          'Bis der Server 40 Spieler erreicht, ist die Nutzung von Panzern und Artillerie nicht erlaubt. Auch das Einnehmen des 4. und 5. feindlichen Sektors ist verboten.',
        ],
        section3: [
          'Helfen Sie, den Server zu füllen: Bis wir insgesamt 40 Spieler haben, ist das Einnehmen des 4. und 5. Punktes verboten. Spieler, die beim Seeding helfen, erhalten 24 Stunden kostenloses VIP.',
        ],
      },
      conductRules: {
        prohibitedTitle: 'ES IST VERBOTEN',
        section1: [
          '● Beleidigungen oder das Begehen von rassistischen, fremdenfeindlichen, homophoben Handlungen usw., sei es über Text- oder Voice-Chat, führen zu Strafe/Bann.',
          '● Verwendung eines sekundären Kontos auf dem Server. Wenn entdeckt, wird ein Bann ausgesprochen.',
          '● Nutzung von Cheats (HACK) oder jeglicher Art von Werkzeug zum eigenen Vorteil. Bei Nachweis ist der Bann permanent.',
          '● Jegliche Art von Werbung/Marketing oder Förderung anderer Clans, die nicht von der Administration durchgeführt oder erlaubt wird.',
          '● Streamen ohne Verbergen der Karte. Es wird empfohlen, dass der Livestream eine Verzögerung von 10 Minuten hat.',
        ],
        section2: [
          'Verwendung unangemessener Namen: Benutzernamen, die beleidigende Sprache, Werbung oder negative Konnotationen enthalten, führen zu Kick oder Bann.',
          'Drohungen gegen andere Spieler oder Doxxing (Veröffentlichung persönlicher Informationen) führen zu sofortigem Bann.',
        ],
        section3: [
          'Banns werden bei Meldungen und entsprechenden Beweisen angewendet.',
          'Respekt vor den Entscheidungen der Administration: Die von der Administration getroffenen Entscheidungen sind endgültig. Wir sind jedoch offen, jedes Problem oder jeden Fall über ein Ticket in unserem Discord zu besprechen.',
        ],
      },
    },
    buyVipButton: {
      buttonText: 'VIP KAUFEN',
      closeButtonAriaLabel: 'Schließen',
      modal: {
        titlePart1: 'WERDE',
        titlePart2: 'VIP',
        description:
          'Bereite dich darauf vor, ins Geschehen einzutauchen und dir deinen VIP-Zugang zu sichern! Durch den Erwerb deines VIP sagst du Warteschlangen Lebewohl und begibst dich direkt auf das Schlachtfeld, während du uns dabei hilfst, unsere Serverkosten zu decken. Deine Beiträge sind essentiell, um alles am Laufen zu halten und ein episches Erlebnis für alle Soldaten zu gewährleisten. Schließe dich uns auf dieser Mission an! Hol dir jetzt deinen VIP und werde Teil der Geschichte!',
        plans: [
          {
            name: 'REKRUT',
            price: '0,00',
            imageSrc: '/albert-ev.png',
            altText: 'Rekrut',
            description: 'Es gibt keinen anderen Weg, stell dich der Warteschlange, um auf den Server zu gelangen...',
          },
          {
            name: 'SERGEANT',
            price: '15,00 BRL',
            imageSrc: '/soldier.png',
            altText: 'Sergeant',
            description: 'Sichere dir 30 Tage ohne Warteschlangen für diesen Betrag',
          },
          {
            name: 'LEUTNANT',
            price: '30,00 BRL',
            imageSrc: '/sarge.png',
            altText: 'Leutnant',
            description: 'Sichere dir 2 Monate ohne Warteschlangen für diesen Betrag',
          },
          {
            name: 'MAJOR',
            originalPrice: '45,00 BRL',
            discountedPrice: '40,00 BRL',
            imageSrc: '/major.png',
            altText: 'Major',
            description: 'Sichere dir 3 Monate ohne Warteschlangen und genieße unseren exklusiven Rabatt!',
          },
        ],
        ctaButtonText: 'SICHERE DIR JETZT DEINEN VIP',
      },
    },
  },
};
