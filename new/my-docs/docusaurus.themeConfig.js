// docusaurus.config.js
const config = {
  // ...
  themeConfig: {
    // ...
  },
  presets: [
    [
      'classic',
      {
        docs: { /* ... */ },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};