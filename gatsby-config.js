
module.exports = {
  siteMetadata: {
    title: 'Florian Maas',
    author: 'Florian Maas'
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1200,
        linkImagesToOriginal: false,
        wrapperStyle: `border-radius: 0.5em; overflow: hidden;`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        additionalData: `@import "${__dirname}/src/styles/colors.module.scss";`,
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [`gatsby-remark-images`]
      },
    },
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          google: {
            families: ['Quicksand']
          }
        }
      }
    ]
}

