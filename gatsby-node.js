const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const cmsPages = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "pages/*" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsPages.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query for cmsPages')
  }

  cmsPages.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: slug,
      component: templateKey
        ? path.resolve(`./src/templates/${templateKey}/index.tsx`)
        : path.resolve(`./src/templates/default.tsx`),
      context: { id: node.id },
    })
  })

  const cmsAuthors = await graphql(`
    {
      allMdx(filter: { frontmatter: { templateKey: { glob: "authors/*" } } }) {
        edges {
          node {
            id
            frontmatter {
              templateKey
              slug
            }
          }
        }
      }
    }
  `)

  if (cmsAuthors.errors) {
    reporter.panicOnBuild(
      '🚨  ERROR: Loading "createPages" query for cmsAuthors'
    )
  }

  cmsAuthors.data.allMdx.edges.forEach(({ node }) => {
    const { templateKey, slug } = node.frontmatter
    createPage({
      path: `/authors/${slug}`,
      component: templateKey
        ? path.resolve(`./src/templates/${templateKey}.tsx`)
        : path.resolve(`./src/templates/default.tsx`),
      context: { id: node.id },
    })
  })
}
