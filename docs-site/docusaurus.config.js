// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Bridging the Digital Brain and Physical Body',

  favicon: 'img/favicon.ico',

  // REQUIRED for Vercel
  url: 'https://physical-ai-humanoid-textbook.vercel.app',
  baseUrl: '/',
  trailingSlash: false,

  organizationName: 'IshaKhan06',
  projectName: 'Physical-Ai-Humanoid-Textbook',

  // Broken links behavior
  onBrokenLinks: 'throw', // strict build
  onBrokenMarkdownLinks: 'warn', // just warning

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

          // ✅ Docs under /docs (fixes navbar broken link)
          routeBasePath: 'docs',

          editUrl:
            'https://github.com/IshaKhan06/Physical-Ai-Humanoid-Textbook',
        },

        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: 'Physical AI Textbook',
        logo: {
          alt: 'Physical AI Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Modules',
            // points correctly to docs route
            docsPluginId: undefined,
          },
          {
            href: 'https://github.com/IshaKhan06/Physical-Ai-Humanoid-Textbook',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            title: 'Modules',
            items: [
              {
                label: 'ROS 2: Robotic Nervous System',
                to: '/docs/ros2-introduction',
              },
              {
                label: 'Simulation (Gazebo & Unity)',
                to: '/docs/simulation',
              },
              {
                label: 'AI Robot Brain',
                to: '/docs/ai-brain',
              },
              {
                label: 'Vision-Language-Action',
                to: '/docs/vla',
              },
              {
                label: 'Capstone Project',
                to: '/docs/capstone',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/physical-ai',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href:
                  'https://github.com/IshaKhan06/Physical-Ai-Humanoid-Textbook',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook`,
      },

      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

export default config;
