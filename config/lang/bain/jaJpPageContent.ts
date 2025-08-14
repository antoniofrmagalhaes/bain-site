import { BsDiscord } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';

export const jaJpPageContent = {
  layouts: {
    header: {
      homePageButton: {
        href: '/',
        label: 'BAIN',
        url: 'https://media.discordapp.net/attachments/1098376363364327485/1180680008063275058/logo.png?ex=66d1c731&is=66d075b1&hm=5479c91d2b1889b5f8c834ae4a0e808ac732a94f37fb1575f227cfa6c38f3a80&=&format=webp&quality=lossless&width=625&height=625',
      },
      nav: {
        links: [
          { type: 'link', isExternal: false, href: '/servers', label: '私たちの歴史' },
          { type: 'link', isExternal: false, href: '/servers', label: 'サーバー' },
          { type: 'link', isExternal: false, href: '/members', label: 'メンバー' },
          { type: 'link', isExternal: false, href: '/enlist', label: '入隊する' },
          { type: 'link', isExternal: false, href: '/events', label: 'イベント' },
          { type: 'link', isExternal: false, href: '/ranking', label: 'ランキング' },
        ],
      },
      leftNav: {
        links: [
          { type: 'link', isExternal: false, href: '/servers', label: '私たちの歴史' },
          { type: 'link', isExternal: false, href: '/servers', label: 'サーバー' },
          { type: 'link', isExternal: false, href: '/members', label: 'メンバー' },
          { type: 'link', isExternal: false, href: '/enlist', label: '入隊する' },
        ],
      },
      rightNav: {
        links: [
          { type: 'link', isExternal: false, href: '/events', label: 'イベント' },
          { type: 'link', isExternal: false, href: '/ranking', label: 'ランキング' },
        ],
      },
    },
  },
  pages: {
    home: {
      hero: {
        smallText: '» BAIN «',
        heading: '名誉ある無法者',
        subheading:
          '私たちは血の渇きのために戦場を横切るのではなく、栄光はそれに立ち向かう勇者にのみ属することを知っているからです。',
        ctaButton: {
          href: '/',
          variant: 'link',
          label: '私たちの専門家に相談する',
          isExternal: true,
          rightIcon: GoArrowUpRight,
        },
        ctaButtons: [
          {
            href: '/',
            variant: 'button',
            label: 'VIPを購入',
            isExternal: true,
          },
          {
            href: '/',
            variant: 'button',
            label: '私たちのDiscord',
            isExternal: true,
            rightIcon: BsDiscord,
          },
        ],
      },
    },
    ranking: {
      monthly: {
        heading: '今月のベストプレイヤー {MONTH}',
        subheading: '今月最もポイントを獲得した3人のプレイヤーは、翌月に無料のVIPアクセスを獲得します。',
        vipRewards: {
          firstPlace: '15日間のVIP',
          secondPlace: '10日間のVIP',
          thirdPlace: '5日間のVIP',
        },
        rankings: {
          place: '順位',
          player: 'プレイヤー',
          games: 'ゲーム数',
          support: 'サポート',
          defense: '防御',
          offense: '攻撃',
          kills: 'キル',
          deaths: 'デス',
        },
        rulesText:
          '今月最もポイントを獲得した3人のプレイヤーは、翌月に無料のVIPアクセスを獲得します。参加方法については、{rulesLink}を参照してください。',
        linkIndex: 11,
        rulesLinkText: 'ルール',
        rules: {
          title: '参加ルール',
          sections: [
            {
              title: 'プレイ時間',
              content:
                '参加資格を得るには、各プレイヤーが1試合で少なくとも30分間プレイする必要があります。この最低プレイ時間は、月間ランキングへの参加の有効性を確保するために必要です。',
            },
            {
              title: 'タイブレーク基準',
              content:
                'ポイントが同点の場合、勝利数が最も多いプレイヤーが勝者と見なされます。それでも同点の場合、アシスト数がタイブレーク基準として使用されます。',
            },
            {
              title: '除外事項',
              content:
                'チートやエクスプロイトを使用したプレイヤーは、自動的に失格となります。競技の公正性は最優先事項です。',
            },
            {
              title: '結果の確認',
              content:
                'すべての結果は月末に確認されます。不正が発見された場合、プレイヤーの参加は再評価され、無効とされる可能性があります。',
            },
            {
              title: 'ペナルティ',
              content:
                '試合を途中で放棄したプレイヤーは、ポイントが減点されます。繰り返しの違反は、月間ランキングからの失格につながる可能性があります。',
            },
            {
              title: '行動',
              content:
                'すべてのプレイヤーには、スポーツマンシップが期待されます。ハラスメントや攻撃的な言葉の使用などの有毒な行動は、警告または失格の対象となります。',
            },
            {
              title: '報酬',
              content:
                '報酬は翌月の初めに配布されます。上位3名に入ったプレイヤーは、イベントの告知で指定された賞品を受け取ります。',
            },
          ],
        },
        countdown: {
          eventEndText: 'イベント終了まで',
        },
        periodSelection: {
          label: '期間:',
          options: {
            monthly: '月次',
            seasson: 'シーズン',
          },
        },
      },
      seasson: {
        heading: 'シーズンのベストプレイヤー',
        subheading: '今月最もポイントを獲得した3人のプレイヤーは、翌月に無料のVIPアクセスを獲得します。',
        vipRewards: {
          firstPlace: '特別スキン',
          secondPlace: 'スキン',
          thirdPlace: 'スキン',
        },
        rankings: {
          place: '順位',
          player: 'プレイヤー',
          games: 'ゲーム数',
          support: 'サポート',
          defense: '防御',
          offense: '攻撃',
          kills: 'キル',
          deaths: 'デス',
        },
        rulesText:
          '今月最もポイントを獲得した3人のプレイヤーは、翌月に無料のVIPアクセスを獲得します。参加方法については、{rulesLink}を参照してください。',
        linkIndex: 11,
        rulesLinkText: 'ルール',
        rules: {
          title: '参加ルール',
          sections: [
            {
              title: 'プレイ時間',
              content:
                '参加資格を得るには、各プレイヤーが1試合で少なくとも30分間プレイする必要があります。この最低プレイ時間は、月間ランキングへの参加の有効性を確保するために必要です。',
            },
            {
              title: 'タイブレーク基準',
              content:
                'ポイントが同点の場合、勝利数が最も多いプレイヤーが勝者と見なされます。それでも同点の場合、アシスト数がタイブレーク基準として使用されます。',
            },
            {
              title: '除外事項',
              content:
                'チートやエクスプロイトを使用したプレイヤーは、自動的に失格となります。競技の公正性は最優先事項です。',
            },
            {
              title: '結果の確認',
              content:
                'すべての結果は月末に確認されます。不正が発見された場合、プレイヤーの参加は再評価され、無効とされる可能性があります。',
            },
            {
              title: 'ペナルティ',
              content:
                '試合を途中で放棄したプレイヤーは、ポイントが減点されます。繰り返しの違反は、月間ランキングからの失格につながる可能性があります。',
            },
            {
              title: '行動',
              content:
                'すべてのプレイヤーには、スポーツマンシップが期待されます。ハラスメントや攻撃的な言葉の使用などの有毒な行動は、警告または失格の対象となります。',
            },
            {
              title: '報酬',
              content:
                '報酬は翌月の初めに配布されます。上位3名に入ったプレイヤーは、イベントの告知で指定された賞品を受け取ります。',
            },
          ],
        },
        countdown: {
          eventEndText: 'イベント終了まで',
        },
        periodSelection: {
          label: '期間:',
          options: {
            monthly: '月次',
            seasson: 'シーズン',
          },
        },
      },
    },
  },
};
