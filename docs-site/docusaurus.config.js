// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Physical AI & Humanoid Robotics Textbook',
  tagline: 'Bridging the Digital Brain and Physical Body',
  favicon: 'img/favicon.ico',

  // Production URL for Vercel deployment
  url: 'https://physical-ai-humanoid-textbook-delta.vercel.app', // Using your specific working URL
  baseUrl: '/',

  // Vercel deployment config
  organizationName: 'IshaKhan06',
  projectName: 'Physical-Ai-Humanoid-Textbook',
  // deploymentBranch is only needed for GitHub Pages

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ur'], // Include Urdu
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/IshaKhan06/Physical-Ai-Humanoid-Textbook/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false, // Disable blog
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
                to: '/docs/modules/ros2-introduction',
              },
              {
                label: 'Gazebo & Unity: Digital Twin',
                to: '/docs/modules/simulation',
              },
              {
                label: 'NVIDIA Isaac: AI Robot Brain',
                to: '/docs/modules/ai-brain',
              },
              {
                label: 'Vision-Language-Action',
                to: '/docs/modules/vla',
              },
              {
                label: 'Capstone: Autonomous Humanoid',
                to: '/docs/modules/capstone',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/physical-ai',
              },
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
                href: 'https://github.com/IshaKhan06/Physical-Ai-Humanoid-Textbook',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Textbook. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    },
};

module.exports = config;
