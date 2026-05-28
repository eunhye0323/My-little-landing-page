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
        links: [
          {
            text: t(locale, 'nav.generation'),
            href: getRelativeLocaleUrl(locale, '/features/generation/'),
          },
          {
            text: t(locale, 'nav.evaluation'),
            href: getRelativeLocaleUrl(locale, '/features/evaluation/'),
          },
        ],
      },
      {
        text: t(locale, 'nav.useCases'),
        href: getRelativeLocaleUrl(locale, '/use-cases/'),
        links: [
          {
            text: t(locale, 'nav.brainImaging'),
            href: getRelativeLocaleUrl(locale, '/use-cases/brain-imaging/'),
          },
          {
            text: t(locale, 'nav.breastCancer'),
            href: getRelativeLocaleUrl(locale, '/use-cases/breast-cancer/'),
          },
        ],
      },
      {
        text: t(locale, 'nav.publications'),
        href: getRelativeLocaleUrl(locale, '/publications/'),
      },
      {
        text: t(locale, 'nav.docs'),
        href: externalLinks.docs,
      },
      {
        text: t(locale, 'nav.researchTeam'),
        href: getRelativeLocaleUrl(locale, '/about/'),
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
          { text: t(locale, 'nav.generation'), href: getRelativeLocaleUrl(locale, '/features/generation/') },
          { text: t(locale, 'nav.evaluation'), href: getRelativeLocaleUrl(locale, '/features/evaluation/') },
        ],
      },
      {
        title: t(locale, 'nav.useCases'),
        links: [
          { text: t(locale, 'nav.brainImaging'), href: getRelativeLocaleUrl(locale, '/use-cases/brain-imaging/') },
          { text: t(locale, 'nav.breastCancer'), href: getRelativeLocaleUrl(locale, '/use-cases/breast-cancer/') },
        ],
      },
      {
        title: t(locale, 'footer.resources'),
        links: [
          { text: t(locale, 'nav.publications'), href: getRelativeLocaleUrl(locale, '/publications/') },
          { text: t(locale, 'nav.docs'), href: externalLinks.docs },
        ],
      },
      {
        title: t(locale, 'footer.company'),
        links: [{ text: t(locale, 'footer.about'), href: getRelativeLocaleUrl(locale, '/about/') }],
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
