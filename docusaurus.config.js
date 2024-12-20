// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'PWNVault',
  favicon: 'img/comp.svg',

  // Set the production url of your site here
  url: 'https://pwnvault.com',
  tagline: 'Own the web',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'pwnvault', // Usually your GitHub org/user name.
  projectName: 'pwnvault', // Usually your repo name.

  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',

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
          path: "./notes",
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // exclude: process.env.NODE_ENV == 'development' ? [''] : [],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        editUrl: 'https://github.com/pwnvault/notes/..',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
          
        },
      },
      // Replace with your project's social card
      navbar: {
        title: 'PWNVault',
        hideOnScroll: true,
        // logo: {
        //   alt: 'My Site Logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'PwnGuideSidebar',
            position: 'left',
            label: 'PWNGuides',
          },
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'CTFSidebar',
          //   position: 'left',
          //   label: 'Capture the Flag',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},

        ],
      },
      footer: {
        style: 'dark',
        links: [
  
          {
            label: `Built with Docusaurus`,
            to: '/',
          },

          {
            label: 'Contribute',
            to: '/contribute',
          },
          {
            label: 'Contact',
            to: '/contact',
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 6,
      },
    }),
    plugins: [require.resolve('docusaurus-lunr-search')],
    
  };
export default config;
