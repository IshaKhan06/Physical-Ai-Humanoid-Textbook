// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Bridging the Digital Brain and Physical Body',

  favicon: 'img/favicon.ico',

  // ✅ REQUIRED for Vercel (must NOT be empty)
  url: 'https://physical-ai-humanoid-textbook.vercel.app',
  baseUrl: '/',
  trailingSlash: false,

  // GitHub repo info (safe to keep)
  organizationName: 'IshaKhan06',
  projectName: 'Physical-Ai-Humanoid-Textbook',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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

          // ✅ Docs at ROOT (no /docs 404 issues)
          routeBasePath: '/',

          editUrl:
            'https://github.com/IshaKhan06/Physical-Ai-Humanoid-Textbook',
        },

        // ❌ Blog disabled
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
                to: '/modules/ros2-introduction',
              },
              {
                label: 'Simulation (Gazebo & Unity)',
                to: '/modules/simulation',
              },
              {
                label: 'AI Robot Brain',
                to: '/modules/ai-brain',
              },
              {
                label: 'Vision-Language-Action',
                to: '/modules/vla',
              },
              {
                label: 'Capstone Project',
                to: '/modules/capstone',
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
