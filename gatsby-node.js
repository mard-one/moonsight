const path = require("path")
const data = require("./src/data/open-positions/index.json")
const { createFilePath } = require("gatsby-source-filesystem")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "Mdx") {
    const sourceInstanceName = getNode(node.parent).sourceInstanceName
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: "slug",
      node,
      value: `/${sourceInstanceName}${value}`,
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

  const resultProjects = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "projects" } }) {
        edges {
          node {
            childMdx {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  console.log("resultProjects", resultProjects)
  if (resultProjects.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  resultProjects.data.allFile.edges.forEach(({ node }) => {
    console.log("node.childMdx.fields.slug", node.childMdx.fields.slug)
    createPage({
      path: node.childMdx.fields.slug,
      component: path.resolve(`./src/layout/projects.js`),
      context: {
        id: node.childMdx.id,
      },
    })
  })

  const resultCareer = await graphql(`
    query {
      allFile(filter: { sourceInstanceName: { eq: "career" } }) {
        edges {
          node {
            childMdx {
              id
              fields {
                slug
              }
            }
          }
        }
      }
    }
  `)
  console.log("resultCareer", resultCareer)
  if (resultCareer.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }
  resultCareer.data.allFile.edges.forEach(({ node }) => {
    console.log("node.childMdx.fields.slug", node.childMdx.fields.slug)
    createPage({
      path: node.childMdx.fields.slug,
      component: path.resolve(`./src/layout/openPositions.js`),
      context: {
        id: node.childMdx.id,
      },
    })
  })
}
