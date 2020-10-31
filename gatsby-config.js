module.exports = {
  siteMetadata: {
    title: `Bartek's website`,
    shortTitle: `Bartek Pacia`,
    description: `Bartek Pacia's personal website.`,
    author: `@bartekpacia`,
    lang: `en`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
}
