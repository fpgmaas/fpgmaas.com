const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const postTemplate = path.resolve("./src/templates/post.js")
  const res = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  res.data.allMdx.edges.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `/blog/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })
}
