const path = require("path")
const data = require("./src/data/open-positions/index.json")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `/projects${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  data.openPositions.forEach(position => {
    createPage({
      path: `/career/` + position.relPath, //TODO: Optimize so you don't have to do this
      component: path.resolve(`./src/layout/openPositions.js`),
      context: {
        data: position,
      },
    })
  })

  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  const projects = result.data.allMdx.edges
  projects.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/layout/projects.js`),
      context: {
        id: node.id,
        slug: node.fields.slug,
      },
    })
  })
}
