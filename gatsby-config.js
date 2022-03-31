
module.exports = {
  siteMetadata: {
    title: 'Florian Maas',
    author: 'Florian Maas'
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}
