const path = require("path")
const data = require("./src/data/open-positions/index.json")


exports.createPages = ({ actions }) => {
  const { createPage } = actions

  const template = path.resolve(`src/templates/open-positions.js`)

  data.openPositions.forEach((position) => {

    createPage({
      path: `/career/` + position.relPath, //TODO: Optimize so you don't have to do this
      component: template,
      context: {
        data: position,
      },
    })
  })
}