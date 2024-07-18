// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Matthew Downs, Product Manager',
  tagline: '(Pardon my boilerplate: site is under construction.)',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Home',
        logo: {
          alt: 'Matthew animated',
          src: 'img/cartoonheadshot.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Resume',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/matthewadowns/resumesaurus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Site',
            items: [
              {
                label: 'Resume',
                to: '/docs/resume',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
            ],
          },
          {
            title: 'More Matthew',
            items: [
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/matthewadowns/',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/users/1341825/theutherside',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/matthewadowns',
              },
              {
                label: 'Email me',
                href: 'mailto:downs.matt@gmail.com',
              },
            ],
          },
          {
            title: 'Companies',
            items: [
              {
                label: 'Foursquare',
                href: 'https://foursquare.com',
              },
              {
                label: 'Rapid',
                href: 'https://rapidapi.com',
              },
              {
                label: 'Veeps',
                href: 'https://veeps.com',
              },
              {
                label: 'Eventbrite',
                href: 'https://eventbrite.com',
              },
              {
                label: 'Demandbase',
                href: 'https://demandbase.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Matthew Alan Downs <br/> Built with Docusaurus <br/> Hosted by Cloudflare`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
