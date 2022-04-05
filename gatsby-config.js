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
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_TRACKING_ID
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          optimize_id: 'OPT_CONTAINER_ID',
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
      },
    },
  ]
}

