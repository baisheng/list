const fs = require("fs")

exports.onPreBootstrap = ({ reporter }, options) => {
  const contentPath = options.contentPath || "data"

  if (!fs.existsSync(contentPath)) {
    reporter.info(`creating the ${contentPath} directory`);
    fs.mkdirSync(contentPath)
  }
}

exports.createPages = async ({ actions, graphql }) => {

  const result = await graphql(`
    {
      allAgencyYaml {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  `)

  const icons = result.data.allAgencyYaml.edges
  const PageTemplate = require.resolve("./src/templates/page.js")

  icons.forEach(icon => {
    const slug = icon.node.id

    actions.createPage({
      path: slug,
      component: PageTemplate,
      context: {
        id: slug,
        name: icon.node.name
      }
    })
  })
}
