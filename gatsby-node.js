const path = require('path')

// createPages is called once the data layer is bootstrapped to create pages from data.
exports.createPages = async ({
  actions: { createPage },
  graphql,
  reporter,
}) => {
  const categoryTemplate = path.resolve('src/templates/category.js')
  const productTemplate = path.resolve('src/templates/product.js')

  // Query for all categories and products
  const { data, errors } = await graphql(`
    query {
      allContentfulCafeDrinks {
        edges {
          node {
            category
            slug
          }
        }
      }
    }
  `)

  // Handle errors
  if (errors) {
    reporter.panicOnBuild('Error while running GraphQL query.')
    return
  }

  // Iterate over all products and create a new page
  data.allContentfulCafeDrinks.edges.forEach(({ node }) => {
    const category = node.category.replace(/\W/g, '-').toLowerCase()

    // Create categories pages
    createPage({
      path: `menu/${category}`,
      component: categoryTemplate,
      context: {
        category: node.category,
      },
    })

    // Create products pages
    createPage({
      path: `menu/${category}/${node.slug}`,
      component: productTemplate,
      context: {
        slug: node.slug,
      },
    })
  })
}
