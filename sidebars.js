/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  integrationsSidebar: [{ type: 'autogenerated', dirName: 'integrations' }],
  docusaurusSidebar: [{ type: 'autogenerated', dirName: 'docusaurus' }],
  extensionsSidebar: [{ type: 'autogenerated', dirName: 'extensions' }],
  guidesSidebar: [{ type: 'autogenerated', dirName: 'guides' }],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;