
module.exports = {
  siteMetadata: {
    title: `Florian Maas`,
    description: `Data Scientist by trade & web developer enthusiast.`,
    author: `Florian Maas`,
    url: `https://www.fpgmaas.com`
  },
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-plugin-catch-links`,
    'gatsby-plugin-react-helmet',
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
        gatsbyRemarkPlugins: [`gatsby-remark-images`, `gatsby-remark-autolink-headers`],
        remarkPlugins: [
          [require('gatsby-remark-vscode').remarkPlugin, {
            theme: 'Monokai'
          }]
        ]
      },
    }
  ]
}

