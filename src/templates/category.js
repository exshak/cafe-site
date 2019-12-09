import { graphql } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import Sidenav from '../components/menu/SideNav'
import SubCategory from '../components/menu/SubCategory'

export default ({ data, pageContext, path }) => {
  const drinks = data.allContentfulCafeDrinks
  return (
    <Layout>
      <div className="container py-5">
        <div className="row">
          <div className="col text-center">
            <h1>{pageContext.category}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2">
            <Sidenav category={drinks} />
          </div>
          <div className="col-md-10">
            <div className="row">
              {drinks.distinct.map(type => (
                <SubCategory type={type} drinks={drinks} path={path} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($category: String!) {
    allContentfulCafeDrinks(filter: { category: { eq: $category } }) {
      distinct(field: type)
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
            fixed(width: 120, height: 120) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
