import { getRelativeLocaleUrl } from 'astro:i18n';
import type { Locale } from '~/i18n';
import { t } from '~/i18n';
import { externalLinks } from '~/config/externalLinks';

export function getHeaderData(locale: Locale) {
  return {
    links: [
      {
        text: t(locale, 'nav.features'),
        href: getRelativeLocaleUrl(locale, '/features/'),
      },
      {
        text: t(locale, 'nav.useCases'),
        href: getRelativeLocaleUrl(locale, '/use-cases/'),
      },
      {
        text: t(locale, 'nav.publications'),
        href: getRelativeLocaleUrl(locale, '/publications/'),
      },
      {
        text: t(locale, 'nav.docs'),
        href: externalLinks.docs,
      },
    ],
    actions: [
      // {
      //   text: t(locale, 'nav.download'),
      //   href: externalLinks.download,
      //   target: '_blank',
      // },
    ],
  };
}

export function getFooterData(locale: Locale) {
  return {
    links: [
      {
        title: t(locale, 'nav.features'),
        links: [
          { text: t(locale, 'nav.generation'), href: getRelativeLocaleUrl(locale, '/features/') + '#generation' },
          { text: t(locale, 'nav.evaluation'), href: getRelativeLocaleUrl(locale, '/features/') + '#evaluation' },
        ],
      },
      {
        title: t(locale, 'nav.useCases'),
        links: [
          { text: t(locale, 'nav.useCases'), href: getRelativeLocaleUrl(locale, '/use-cases/') },
        ],
      },
      {
        title: t(locale, 'footer.resources'),
        links: [
          { text: t(locale, 'nav.publications'), href: getRelativeLocaleUrl(locale, '/publications/') },
          { text: t(locale, 'nav.docs'), href: externalLinks.docs },
        ],
      },
    ],
    secondaryLinks: [],
    socialLinks: [
      // { ariaLabel: 'X', icon: 'tabler:brand-x', href: externalLinks.social.x },
      // { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: externalLinks.social.instagram },
      // { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: externalLinks.social.facebook },
      { ariaLabel: 'Github', icon: 'tabler:brand-github', href: externalLinks.social.github },
    ],
    footNote: `${t(locale, 'footer.ack')}`,
  };
}
