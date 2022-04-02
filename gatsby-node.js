const path = require('path')


module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve('./src/templates/blog.js')
    const res = await graphql(`
        query {
            allMdx{
                edges {
                    node {
                        frontmatter{
                            slug
                        }
                    }
                }
            }
        }
        `)

    res.data.allMdx.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/blog/${edge.node.frontmatter.slug}`,
            context: {
                slug: edge.node.frontmatter.slug
            }
        })
    })

}

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
      node: {
        fs: 'empty'
      }
    })
  }