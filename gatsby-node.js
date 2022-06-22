const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              slug
              type
            }
          }
        }
      }
    }
  `)

  const posts = result.data.allMdx.edges


  // Create blog posts pages.

  const postTemplate = path.resolve("./src/templates/post.js")
  posts.forEach(edge => {
    createPage({
      component: postTemplate,
      path: `/blog/${edge.node.frontmatter.slug}`,
      context: {
        slug: edge.node.frontmatter.slug,
      },
    })
  })

  
  // Create blog post list pages

  const postsPerPage = 2
   // we only want to include posts with type 'post', since only they will be shown in the list of blogposts.
  const posts_to_show = posts.filter(e => e.node.frontmatter.type === "post")   
  const numPages = Math.ceil(posts_to_show.length / postsPerPage)
  const blogListTemplate = path.resolve("./src/templates/blog-list.js")
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `blog/` : `blog/${i + 1}`,
      component: blogListTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })
}
