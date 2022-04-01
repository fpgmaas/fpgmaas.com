
module.exports = {
  siteMetadata: {
    title: 'Florian Maas',
    author: 'Florian Maas'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/styles/colors.scss";`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/md-posts`,
      },
    },
    `gatsby-transformer-remark`,
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Quicksand']
          }
        }
      },
      `gatsby-plugin-catch-links`
    ]
}
