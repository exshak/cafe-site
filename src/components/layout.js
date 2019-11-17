import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./bootstrap.min.css"
import Footer from "./Footer"
import Header from "./header"
import "./layout.css"

// NOTE: rename

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <main id="content">{children}</main>
      <Footer />
    </>
  )
}

//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `0px 1.0875rem 1.45rem`,
//         paddingTop: 0,
//       }}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
