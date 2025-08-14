import { BsDiscord } from 'react-icons/bs';
import { GoArrowUpRight } from 'react-icons/go';

export const arabicPageContent = {
  layouts: {
    header: {
      homePageButton: {
        href: '/',
        label: 'BAIN',
        url: 'https://media.discordapp.net/attachments/1098376363364327485/1180680008063275058/logo.png?ex=66d1c731&is=66d075b1&hm=5479c91d2b1889b5f8c834ae4a0e808ac732a94f37fb1575f227cfa6c38f3a80&=&format=webp&quality=lossless&width=625&height=625',
      },
      nav: {
        links: [
          { type: 'link', isExternal: false, href: '/servers', label: 'تاريخنا' },
          { type: 'link', isExternal: false, href: '/servers', label: 'الخوادم' },
          { type: 'link', isExternal: false, href: '/members', label: 'الأعضاء' },
          { type: 'link', isExternal: false, href: '/enlist', label: 'التجنيد' },
          { type: 'link', isExternal: false, href: '/events', label: 'الفعاليات' },
          { type: 'link', isExternal: false, href: '/ranking', label: 'التصنيف' },
        ],
      },
      leftNav: {
        links: [
          { type: 'link', isExternal: false, href: '/servers', label: 'تاريخنا' },
          { type: 'link', isExternal: false, href: '/servers', label: 'الخوادم' },
          { type: 'link', isExternal: false, href: '/members', label: 'الأعضاء' },
          { type: 'link', isExternal: false, href: '/enlist', label: 'التجنيد' },
        ],
      },
      rightNav: {
        links: [
          { type: 'link', isExternal: false, href: '/events', label: 'الفعاليات' },
          { type: 'link', isExternal: false, href: '/ranking', label: 'التصنيف' },
        ],
      },
    },
  },
  pages: {
    home: {
      hero: {
        smallText: '» BAIN «',
        heading: 'الأوغاد المشينون',
        subheading:
          'نعبر ساحة المعركة ليس من أجل العطش للدماء، بل لأننا نعلم أن المجد ينتمي فقط للشجعان الذين يجرؤون على مواجهتها.',
        ctaButton: {
          href: '/',
          variant: 'link',
          label: 'تحدث مع أحد خبرائنا',
          isExternal: true,
          rightIcon: GoArrowUpRight,
        },
        ctaButtons: [
          {
            href: '/',
            variant: 'button',
            label: 'شراء VIP',
            isExternal: true,
          },
          {
            href: '/',
            variant: 'button',
            label: 'ديسكورد الخاص بنا',
            isExternal: true,
            rightIcon: BsDiscord,
          },
        ],
      },
    },
    ranking: {
      monthly: {
        heading: 'أفضل اللاعبين لشهر {MONTH}',
        subheading: 'أفضل 3 لاعبين في هذا الشهر سيحصلون على وصول VIP مجاني في الشهر المقبل.',
        vipRewards: {
          firstPlace: '15 يوم من VIP',
          secondPlace: '10 أيام من VIP',
          thirdPlace: '5 أيام من VIP',
        },
        rankings: {
          place: 'المكان',
          player: 'اللاعب',
          games: 'الألعاب',
          support: 'الدعم',
          defense: 'الدفاع',
          offense: 'الهجوم',
          kills: 'القتل',
          deaths: 'الوفيات',
        },
        rulesText:
          'أفضل 3 لاعبين في هذا الشهر سيحصلون على وصول VIP مجاني في الشهر المقبل. تحقق من {rulesLink} لمعرفة كيفية المشاركة.',
        linkIndex: 11,
        rulesLinkText: 'القواعد',
        rules: {
          title: 'قواعد المشاركة',
          sections: [
            {
              title: 'وقت اللعب',
              content:
                'لكي تكون مؤهلاً، يجب أن يشارك كل لاعب لمدة 30 دقيقة على الأقل في المباراة. هذا الوقت الأدنى ضروري لضمان صحة المشاركة في التصنيف الشهري.',
            },
            {
              title: 'معايير كسر التعادل',
              content:
                'في حالة التعادل، سيتم اعتبار اللاعب الذي يحقق أكبر عدد من الانتصارات هو الفائز. إذا استمر التعادل، سيتم استخدام عدد المساعدات كمعيار لكسر التعادل.',
            },
            {
              title: 'الاستثناءات',
              content:
                'سيتم استبعاد اللاعبين الذين يستخدمون أي نوع من الغش أو الاستغلال تلقائيًا. نزاهة المنافسة هي أولويتنا.',
            },
            {
              title: 'مراجعة النتائج',
              content:
                'سيتم مراجعة جميع النتائج في نهاية الشهر. إذا تم اكتشاف أي مخالفات، ستتم إعادة تقييم مشاركة اللاعب وقد يتم إبطالها.',
            },
            {
              title: 'العقوبات',
              content:
                'سيتم معاقبة اللاعبين الذين يغادرون المباراة قبل انتهائها بفقدان النقاط. قد تؤدي الجرائم المتكررة إلى الاستبعاد من التصنيف الشهري.',
            },
            {
              title: 'السلوك',
              content:
                'من المتوقع أن يحافظ جميع اللاعبين على الروح الرياضية. أي سلوك سام، مثل التحرش أو اللغة المسيئة، سيؤدي إلى تحذير أو استبعاد.',
            },
            {
              title: 'المكافآت',
              content:
                'سيتم توزيع المكافآت في بداية الشهر المقبل. سيحصل اللاعبون الذين يحتلون المراكز الثلاثة الأولى على الجوائز المحددة في إعلان الفعالية.',
            },
          ],
        },
        countdown: {
          eventEndText: 'ينتهي الحدث في',
        },
        periodSelection: {
          label: 'الفترة:',
          options: {
            monthly: 'شهري',
            seasson: 'موسم',
          },
        },
      },
      seasson: {
        heading: 'أفضل اللاعبين لهذا الموسم',
        subheading: 'أفضل 3 لاعبين في هذا الشهر سيحصلون على وصول VIP مجاني في الشهر المقبل.',
        vipRewards: {
          firstPlace: 'جلد حصري',
          secondPlace: 'جلد',
          thirdPlace: 'جلد',
        },
        rankings: {
          place: 'المكان',
          player: 'اللاعب',
          games: 'الألعاب',
          support: 'الدعم',
          defense: 'الدفاع',
          offense: 'الهجوم',
          kills: 'القتل',
          deaths: 'الوفيات',
        },
        rulesText:
          'أفضل 3 لاعبين في هذا الشهر سيحصلون على وصول VIP مجاني في الشهر المقبل. تحقق من {rulesLink} لمعرفة كيفية المشاركة.',
        linkIndex: 11,
        rulesLinkText: 'القواعد',
        rules: {
          title: 'قواعد المشاركة',
          sections: [
            {
              title: 'وقت اللعب',
              content:
                'لكي تكون مؤهلاً، يجب أن يشارك كل لاعب لمدة 30 دقيقة على الأقل في المباراة. هذا الوقت الأدنى ضروري لضمان صحة المشاركة في التصنيف الشهري.',
            },
            {
              title: 'معايير كسر التعادل',
              content:
                'في حالة التعادل، سيتم اعتبار اللاعب الذي يحقق أكبر عدد من الانتصارات هو الفائز. إذا استمر التعادل، سيتم استخدام عدد المساعدات كمعيار لكسر التعادل.',
            },
            {
              title: 'الاستثناءات',
              content:
                'سيتم استبعاد اللاعبين الذين يستخدمون أي نوع من الغش أو الاستغلال تلقائيًا. نزاهة المنافسة هي أولويتنا.',
            },
            {
              title: 'مراجعة النتائج',
              content:
                'سيتم مراجعة جميع النتائج في نهاية الشهر. إذا تم اكتشاف أي مخالفات، ستتم إعادة تقييم مشاركة اللاعب وقد يتم إبطالها.',
            },
            {
              title: 'العقوبات',
              content:
                'سيتم معاقبة اللاعبين الذين يغادرون المباراة قبل انتهائها بفقدان النقاط. قد تؤدي الجرائم المتكررة إلى الاستبعاد من التصنيف الشهري.',
            },
            {
              title: 'السلوك',
              content:
                'من المتوقع أن يحافظ جميع اللاعبين على الروح الرياضية. أي سلوك سام، مثل التحرش أو اللغة المسيئة، سيؤدي إلى تحذير أو استبعاد.',
            },
            {
              title: 'المكافآت',
              content:
                'سيتم توزيع المكافآت في بداية الشهر المقبل. سيحصل اللاعبون الذين يحتلون المراكز الثلاثة الأولى على الجوائز المحددة في إعلان الفعالية.',
            },
          ],
        },
        countdown: {
          eventEndText: 'ينتهي الحدث في',
        },
        periodSelection: {
          label: 'الفترة:',
          options: {
            monthly: 'شهري',
            seasson: 'موسم',
          },
        },
      },
    },
  },
};
