import React from "react"
import Contact from "../components/Contact"
import Layout from "../components/layout"
import Map from "../components/Map"
import SEO from "../components/seo"

// NOTE:

export default () => (
  <Layout>
    <SEO title="Contact" />
    <Map />
    {/* <Banner /> */}
    <Contact />
  </Layout>
)
