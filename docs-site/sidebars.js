// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['modules/index'],
    },
    {
      type: 'category',
      label: 'Core Modules',
      items: [
        'modules/ros2-introduction',
        'modules/simulation',
        'modules/ai-brain',
        'modules/vla'
      ],
    },
    {
      type: 'category',
      label: 'Hands-on Labs',
      items: [
        'labs/ros2-lab'
      ],
    },
    {
      type: 'category',
      label: 'Capstone Project',
      items: [
        'modules/capstone'
      ],
    }
  ],
};

module.exports = sidebars;