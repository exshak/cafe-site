import PropTypes from "prop-types"
import React from "react"
import "./bootstrap.min.css"
import Footer from "./Footer"
import Header from "./header"
import Info from "./Info"
import "./layout.css"
import Map from "./Map"

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Info />
    <Map />
    <Footer />
  </>
)
// const data = useStaticQuery(graphql`
//   query SiteTitleQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `)

// return (
//   <>
//     <Header siteTitle={data.site.siteMetadata.title} />
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `0px 1.0875rem 1.45rem`,
//         paddingTop: 0,
//       }}
//     >
//     </div>
//   </>
// )

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
