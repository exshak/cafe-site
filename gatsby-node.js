/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require(`path`)

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const categoryTemplate = path.resolve(`src/templates/category.js`)
  const itemTemplate = path.resolve(`src/templates/item.js`)
  const result = await graphql(
    `
      query loadPagesQuery($limit: Int!) {
        allContentfulCafeDrinks(limit: $limit) {
          edges {
            node {
              id
              title
              category
              type
              slug
              description {
                description
              }
              price
              image {
                fixed {
                  src
                }
              }
            }
          }
        }
      }
    `,
    { limit: 1000 }
  )

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const items = result.data.allContentfulCafeDrinks.edges

  items.forEach(({ node }) => {
    const original = node.category
    const slug = node.category.replace(/\W/g, "-").toLowerCase()

    createPage({
      path: slug,
      component: categoryTemplate,
      context: {
        category: original,
        type: node.type,
      },
    })

    createPage({
      path: slug + "/" + node.slug,
      component: itemTemplate,
      context: {
        title: node.title,
      },
    })
  })
}
