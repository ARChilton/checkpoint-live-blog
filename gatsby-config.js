module.exports = {
  siteMetadata: {
    title: 'Checkpoint Live Blog',
    siteUrl: 'https://checkpointlive.com/blog',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-catch-links`,
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
  pathPrefix: '/blog',
}
