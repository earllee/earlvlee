module.exports = {
  siteMetadata: {
    title: `Earl V. Lee`,
    altTitle: `EarlL.ee`
  },
  plugins: [
    // Plugins
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-10750769-11",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Enables Google Optimize using your container Id
        optimizeId: "GTM-NR97FR5",
        // This setting determines how often site speed tracking beacons will be sent. By default, 1% of users will be automatically be tracked.
        siteSpeedSampleRate: 100,
        cookieDomain: "earlvlee.com"
      }
    },

    // Sources
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`
      }
    },

    // Transformers
    `gatsby-transformer-remark`
  ]
};
