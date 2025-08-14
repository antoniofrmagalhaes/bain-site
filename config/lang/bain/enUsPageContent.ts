import { BsDiscord } from 'react-icons/bs';
import { RiInstagramLine } from 'react-icons/ri';

export const enUsPageContent = {
  layouts: {
    header: {
      homePageButton: {
        href: '/',
        label: 'BAIN',
        url: 'https://media.discordapp.net/attachments/1098376363364327485/1180680008063275058/logo.png?ex=66d1c731&is=66d075b1&hm=5479c91d2b1889b5f8c834ae4a0e808ac732a94f37fb1575f227cfa6c38f3a80&=&format=webp&quality=lossless&width=625&height=625',
      },
      leftNav: {
        links: [
          { type: 'link', isExternal: false, href: '/', label: 'HOME' },
          { type: 'link-button', label: 'OUR HISTORY' },
          { type: 'link-button', label: 'SERVERS' },
          { type: 'link', isExternal: false, href: '/enlist', label: 'RECRUITMENT' },
        ],
      },
      rightNav: {
        links: [
          { type: 'link-button', label: 'RULES' },
          { type: 'chakra-link', isExternal: true, href: 'https://ranking.bainclan.com.br/', label: 'LIVE MATCH' },
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
          'We cross the battlefield not out of bloodlust, but because we know that glory belongs only to the brave who dare to face it.',
        ctaButtons: [
          {
            href: 'https://discord.gg/bainclan',
            variant: 'button',
            label: 'Our Discord',
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
        heading: 'Best Players of the Month for {MONTH}',
        subheading: 'The top 3 players this month will receive free VIP access next month.',
        vipRewards: {
          firstPlace: '15 days of VIP',
          secondPlace: '10 days of VIP',
          thirdPlace: '5 days of VIP',
        },
        rankings: {
          place: 'Place',
          player: 'Player',
          games: 'Games',
          support: 'Support',
          defense: 'Defense',
          offense: 'Offense',
          kills: 'Kills',
          deaths: 'Deaths',
        },
        rulesText:
          'The top 3 players this month will receive free VIP access next month. Check the {rulesLink} for how to participate.',
        linkIndex: 11,
        rulesLinkText: 'rules',
        rules: {
          title: 'Participation Rules',
          sections: [
            {
              title: 'Play Time',
              content:
                'To be eligible, each player must participate in at least 30 minutes of a match. This minimum time is necessary to ensure the validity of participation in the monthly ranking.',
            },
            {
              title: 'Tie-breaking Criteria',
              content:
                'In case of a tie, the player with the most wins will be considered the winner. If the tie persists, the number of assists will be used as the tiebreaker.',
            },
            {
              title: 'Exclusions',
              content:
                'Players using any types of cheats or exploits will be automatically disqualified. The integrity of the competition is our priority.',
            },
            {
              title: 'Result Review',
              content:
                'All results will be reviewed at the end of the month. If any irregularities are detected, the player’s participation will be re-evaluated and may be invalidated.',
            },
            {
              title: 'Penalties',
              content:
                'Players who leave the match before it ends will be penalized with a loss of points. Repeated offenses may lead to disqualification from the monthly ranking.',
            },
            {
              title: 'Conduct',
              content:
                'All players are expected to maintain sportsmanship. Any toxic behavior, such as harassment or offensive language, will result in a warning or disqualification.',
            },
            {
              title: 'Rewards',
              content:
                'Rewards will be distributed at the beginning of the next month. Players who place in the top three will receive the prizes specified in the event announcement.',
            },
          ],
        },
        countdown: {
          eventEndText: 'Event ends in',
        },
        periodSelection: {
          label: 'Period:',
          options: {
            monthly: 'Monthly',
            seasson: 'Season',
          },
        },
      },
      seasson: {
        heading: 'Best Players of the Season',
        subheading: 'The top 3 players this month will receive free VIP access next month.',
        vipRewards: {
          firstPlace: 'Exclusive Skin',
          secondPlace: 'Skin',
          thirdPlace: 'Skin',
        },
        rankings: {
          place: 'Place',
          player: 'Player',
          games: 'Games',
          support: 'Support',
          defense: 'Defense',
          offense: 'Offense',
          kills: 'Kills',
          deaths: 'Deaths',
        },
        rulesText:
          'The top 3 players this month will receive free VIP access next month. Check the {rulesLink} for how to participate.',
        linkIndex: 11,
        rulesLinkText: 'rules',
        rules: {
          title: 'Participation Rules',
          sections: [
            {
              title: 'Play Time',
              content:
                'To be eligible, each player must participate in at least 30 minutes of a match. This minimum time is necessary to ensure the validity of participation in the monthly ranking.',
            },
            {
              title: 'Tie-breaking Criteria',
              content:
                'In case of a tie, the player with the most wins will be considered the winner. If the tie persists, the number of assists will be used as the tiebreaker.',
            },
            {
              title: 'Exclusions',
              content:
                'Players using any types of cheats or exploits will be automatically disqualified. The integrity of the competition is our priority.',
            },
            {
              title: 'Result Review',
              content:
                'All results will be reviewed at the end of the month. If any irregularities are detected, the player’s participation will be re-evaluated and may be invalidated.',
            },
            {
              title: 'Penalties',
              content:
                'Players who leave the match before it ends will be penalized with a loss of points. Repeated offenses may lead to disqualification from the monthly ranking.',
            },
            {
              title: 'Conduct',
              content:
                'All players are expected to maintain sportsmanship. Any toxic behavior, such as harassment or offensive language, will result in a warning or disqualification.',
            },
            {
              title: 'Rewards',
              content:
                'Rewards will be distributed at the beginning of the next month. Players who place in the top three will receive the prizes specified in the event announcement.',
            },
          ],
        },
        countdown: {
          eventEndText: 'Event ends in',
        },
        periodSelection: {
          label: 'Period:',
          options: {
            monthly: 'Monthly',
            seasson: 'Season',
          },
        },
      },
    },
    enlist: {
      sideMenu: {
        links: [{ type: 'link', label: 'BAIN Recruitment', action: 'handleFirstPage' }],
      },
      video: {
        src: '/VIDEO_PROMO_BAIN_8mb.mp4',
        altText: 'Promotional video of the BAIN clan',
        overlay: 'rgba(0, 0, 0, 0.8)',
      },
      buttons: {
        enlist: {
          mobile: {
            label: 'ENLIST NOW',
          },
          desktop: {
            label: 'FILL OUT ENLISTMENT FORM',
          },
        },
      },
      header: {
        title: 'BAIN Recruitment',
        description:
          'Be part of our clan and experience the battles of Hell Let Loose intensely. Enlist now and become part of the Inglorious Bastards history!',
      },
      guide: {
        title: 'Recruitment Process',
        baseText:
          'Our community is committed to providing the best experience in the game {0}. To ensure a collaborative and competitive environment, all members need to be aligned with our values and rules. Therefore, it is essential that you carefully read the {1} and the {2}. These guidelines are essential to maintain quality, respect, and organization within the clan. When you are ready to start your journey with us, the first step is to fill out the {3}.',
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
            content: 'code of conduct',
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
            content: 'server rules',
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
            content: 'enlistment form',
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
            title: 'Recruitment Process',
            subsections: [
              {
                number: '1.1',
                text: 'Filling out the enlistment form.',
                tip: 'You will provide your contact information, SteamID or GamePassID, in-game nickname, Discord profile ID, and answer questions about your general knowledge.',
              },
              {
                number: '1.2',
                text: 'Interview with the recruiters.',
                tip: 'Using the Discord profile ID provided in the form, a recruiter will schedule an interview via call.',
              },
              {
                number: '1.3',
                text: 'Information about the clan and competitive play.',
                tip: 'If approved, the recruiter will explain the rules, how competitive play works, and the clan’s expectations.',
              },
              {
                number: '1.4',
                text: 'Evaluation period with the tag »BAINr«.',
                tip: 'The recruit will have 30 days to be evaluated while using the tag.',
              },
              {
                number: '1.5',
                text: 'Requirements during the evaluation period.',
                tip: 'Being active on Discord, participating in matches, and following the rules are fundamental criteria.',
              },
              {
                number: '1.6',
                text: 'Trial by Fire.',
                tip: 'At the end of the period, the recruit will undergo a Trial by Fire to determine acceptance.',
              },
            ],
          },
        ],
      },
      conductRules: {
        title: 'Code of Conduct',
        description:
          'The Code of Conduct ensures a healthy and respectful environment among clan members. Everyone must follow these guidelines to guarantee harmony and proper functioning of the community.',
        rules: [
          {
            number: '1',
            title: 'Respect and Coexistence',
            subsections: [
              {
                number: '1.1',
                text: 'Treat all members with respect, cordiality, and politeness.',
                tip: 'Avoid offensive, prejudiced, or discriminatory language in any communication channel.',
              },
              {
                number: '1.2',
                text: 'Respect cultural, religious, and political differences.',
                tip: 'Debates are allowed, provided they remain respectful and friendly.',
              },
              {
                number: '1.3',
                text: 'Harassment and bullying will not be tolerated.',
                tip: 'Any form of intimidation, persecution, or embarrassment is subject to punishment.',
              },
            ],
          },
          {
            number: '2',
            title: 'In-Game Behavior',
            subsections: [
              {
                number: '2.1',
                text: 'Use of cheats, hacks, or exploits is prohibited.',
                tip: 'Any unfair advantage over other players is strictly prohibited.',
              },
              {
                number: '2.2',
                text: 'Play as a team and collaborate with teammates.',
                tip: 'Communication and teamwork are essential for the clan’s success.',
              },
              {
                number: '2.3',
                text: 'Avoid toxic attitudes during matches.',
                tip: 'Do not blame or insult other players for mistakes or losses.',
              },
            ],
          },
          {
            number: '3',
            title: 'Use of Communication Channels',
            subsections: [
              {
                number: '3.1',
                text: 'Use the appropriate channels for each subject.',
                tip: 'This helps maintain organization and facilitates communication among members.',
              },
              {
                number: '3.2',
                text: 'Avoid spam and repetitive messages.',
                tip: 'Excessive messages can hinder communication for other members.',
              },
              {
                number: '3.3',
                text: 'Inappropriate content is prohibited.',
                tip: 'Do not share adult, violent, or illegal content in the clan’s channels.',
              },
            ],
          },
          {
            number: '4',
            title: 'Commitment and Participation',
            subsections: [
              {
                number: '4.1',
                text: 'Be active in clan activities.',
                tip: 'Regular participation strengthens the clan and improves everyone’s experience.',
              },
              {
                number: '4.2',
                text: 'Notify in case of prolonged absence.',
                tip: 'Inform the leaders if you need to be absent for a significant period.',
              },
              {
                number: '4.3',
                text: 'Contribute to a positive environment.',
                tip: 'Your attitude influences the morale and motivation of other members.',
              },
            ],
          },
          {
            number: '5',
            title: 'Punishments and Consequences',
            subsections: [
              {
                number: '5.1',
                text: 'Violation of the rules will result in punishments.',
                tip: 'Punishments can range from warnings to expulsion from the clan, depending on the severity.',
              },
              {
                number: '5.2',
                text: 'Repeat offenses aggravate penalties.',
                tip: 'Multiple infractions will be treated with greater rigor by the leadership.',
              },
              {
                number: '5.3',
                text: 'Right to defense.',
                tip: 'Members have the right to defend themselves before the leadership in case of accusation.',
              },
            ],
          },
        ],
      },
      serverRules: {
        title: 'Server Rules',
        description:
          'To ensure a fair gaming experience, we have established specific rules for the server. Following these guidelines is essential.',
        rules: [
          {
            number: '1',
            text: 'Mandatory Squad Officer',
            tip: 'It is strictly necessary to have an officer in the squad with active VOIP who speaks Portuguese. Squads without an officer may be kicked.',
          },
          {
            number: '2',
            text: 'Minimum Level for Specific Classes',
            type: 'withinnerlist',
            innerList: [
              'Commander: level 70',
              'Recon Spotter: level 50',
              'Tank Commander: level 30',
              'Infantry Officer: level 30',
            ],
            orientation: 'vertical',
          },
          {
            number: '3',
            text: 'Prohibition of One-Man Tanks',
            tip: 'The use of heavy tanks by only one player is prohibited. Tanks must be operated by a full crew to ensure effectiveness on the battlefield.',
          },
          {
            number: '4',
            text: 'Rules During Seeding',
            type: 'withinnerlist',
            innerList: [
              'The use of tanks and artillery is prohibited.',
              'Capturing the 4th and 5th enemy sectors is not allowed.',
              'During seeding, the Minimum Level for Specific Classes rule is not in effect; that is, there is no minimum level for any class, provided they are permitted by moderation.',
            ],
            orientation: 'vertical',
          },
          {
            number: '5',
            text: 'Official Language of the Server',
            tip: 'The official language of the server is exclusively Portuguese. Communications in other languages are not allowed.',
          },
          {
            number: '6',
            text: 'Commander with VOIP and Fluent in Portuguese',
            tip: 'It is mandatory to have a commander with active VOIP who communicates in Portuguese to coordinate team actions.',
          },
          {
            number: '7',
            text: 'Proper Use of VOIP and Radio',
            tip: 'Abusive use of VOIP or radio (flooding, spam, or music) will be punished with kick or ban, depending on the severity.',
          },
          {
            number: '8',
            text: 'Prohibition of Exploits and Bugs',
            tip: 'It is prohibited to take advantage of game bugs or glitches to gain undue advantage. Players caught using exploits will be punished.',
          },
          {
            number: '9',
            text: 'Use of Inappropriate Names or Symbols',
            tip: 'Usernames or symbols containing offensive language, propaganda, negative connotations, or that reference Nazism, true fascism, extremist movements, or hate ideologies will be grounds for kick or ban.',
          },
          {
            number: '10',
            text: 'Help Seed the Server',
            tip: 'Players who participate in seeding (helping to start the server) receive 24 hours of free VIP as a form of gratitude.',
          },
        ],
      },
    },
  },
  ui: {
    rulesButton: {
      buttonText: 'RULES',
      adminMessage: 'ADMIN MESSAGE',
      serverName: 'BRASIL HELL',
      serverRulesButton: 'SERVER RULES',
      conductRulesButton: 'CODE OF CONDUCT',
      confirmText: 'YES',
      confirmShortcut: '[Y]',
      closeButton: 'CLOSE',
      newServerRules: {
        section1: [
          'Minimum Level (Brasil Hell 70 online)',
          '● Commander 70',
          '● Recon Spotter 50',
          '● Armored Commander 30',
          '● Infantry Officer 20',
        ],
        section2: [
          'It is mandatory to have an officer in the squad with voice chat.',
          'It is mandatory to have a commander with voice chat who speaks Portuguese.',
          'The official language of the server is exclusively Portuguese. Communications in other languages are not permitted.',
          'Until the server reaches 40 players, the use of armored vehicles and artillery is not allowed. Capturing the 4th and 5th enemy sectors is also prohibited.',
        ],
        section3: [
          'Help seed the server: until we have a total of 40 players, capturing the 4th and 5th points is prohibited. Players who participate in seeding receive 24 hours of free VIP.',
        ],
      },
      conductRules: {
        prohibitedTitle: 'IT IS PROHIBITED',
        section1: [
          '● Insulting or committing any racist, xenophobic, homophobic acts, among others, whether through text or voice chat, will result in punishment/ban.',
          '● Using a secondary account on the server. If discovered, a ban will be applied.',
          '● Use of cheats (HACK) or any type of tool for personal gain. If proven, the ban is permanent.',
          '● Any type of advertising/marketing or promotion of other clans not carried out or permitted by the administration.',
          '● Streaming without hiding the map. It is recommended that the live stream has a 10-minute delay.',
        ],
        section2: [
          'Use of inappropriate names: Usernames containing offensive language, advertising, or negative connotations will result in kick or ban.',
          'Threatening other players or practicing doxxing (disclosure of personal information) will result in immediate banishment.',
        ],
        section3: [
          'Bans will be applied upon reports and proof thereof.',
          'Respect for the administration’s decisions: Decisions made by the administration are final. However, we are open to discussing any problem or case through a ticket on our Discord.',
        ],
      },
    },
    buyVipButton: {
      buttonText: 'BUY VIP',
      closeButtonAriaLabel: 'Close',
      modal: {
        titlePart1: 'BECOME',
        titlePart2: 'VIP',
        description:
          'Get ready to jump into action and secure your VIP access! By acquiring your VIP, you say goodbye to queues and head straight to the battlefield, while helping cover our server expenses. Your contributions are essential to keep everything running and ensure an epic experience for all soldiers. Join us on this mission! Get your VIP now and be part of history!',
        plans: [
          {
            name: 'RECRUIT',
            price: '$0.00',
            imageSrc: '/albert-ev.png',
            altText: 'Recruit',
            description: "There's no other way, face the queue to enter the server...",
          },
          {
            name: 'SERGEANT',
            price: '$15.00 BRL',
            imageSrc: '/soldier.png',
            altText: 'Sergeant',
            description: 'Ensure 30 days without needing to queue for this amount',
          },
          {
            name: 'LIEUTENANT',
            price: '$30.00 BRL',
            imageSrc: '/sarge.png',
            altText: 'Lieutenant',
            description: 'Ensure 2 months without needing to queue for this amount',
          },
          {
            name: 'MAJOR',
            originalPrice: '$45.00',
            discountedPrice: '$40.00 BRL',
            imageSrc: '/major.png',
            altText: 'Major',
            description: 'Ensure 3 months without queues and enjoy our exclusive discount!',
          },
        ],
        ctaButtonText: 'GET YOUR VIP NOW',
      },
    },
  },
};
