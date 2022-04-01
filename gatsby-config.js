
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
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          }
        ],
      },
    },
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
