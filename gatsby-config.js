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
