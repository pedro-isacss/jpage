module.exports = {
  presets: [
    [
      require.resolve('@docusaurus/core/lib/babel/preset'),
      {
        gtag: {
          trackingID: 'G-FN1W6KN2R6',
          anonymizeIP: true,
        },
      },
    ],
  ],
};